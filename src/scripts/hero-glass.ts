import * as THREE from 'three';

// Builds a pastel "studio" for the glass to reflect and refract: rainbow walls plus soft light boxes.
function studioScene() {
  const scene = new THREE.Scene();
  const c = document.createElement('canvas');
  c.width = 1024; c.height = 512;
  const g = c.getContext('2d')!;
  const grad = g.createLinearGradient(0, 0, 1024, 0);
  const cols = ['#ff5cbf', '#14102e', '#3feeff', '#ffffff', '#7d52ff', '#ffe35a', '#0c0a1c', '#ff7fd4', '#40cfff', '#14102e', '#b58cff', '#ff5cbf'];
  cols.forEach((col, i) => grad.addColorStop(i / (cols.length - 1), col));
  g.fillStyle = grad; g.fillRect(0, 0, 1024, 512);
  const v = g.createLinearGradient(0, 0, 0, 512);
  v.addColorStop(0, 'rgba(255,255,255,.7)'); v.addColorStop(.5, 'rgba(255,255,255,0)'); v.addColorStop(1, 'rgba(40,30,60,.55)');
  g.fillStyle = v; g.fillRect(0, 0, 1024, 512);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  scene.add(new THREE.Mesh(new THREE.SphereGeometry(20, 64, 32), new THREE.MeshBasicMaterial({ map: tex, side: THREE.BackSide })));
  const box = (col: number, pos: [number, number, number], sc: [number, number, number]) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ color: new THREE.Color(col).multiplyScalar(4), side: THREE.DoubleSide }));
    m.position.set(...pos); m.scale.set(...sc); m.lookAt(0, 0, 0); scene.add(m);
  };
  box(0xffffff, [0, 9, 4], [10, 3, 1]);
  box(0xffc4ec, [-9, 2, 3], [3, 8, 1]);
  box(0xa8fbff, [9, 1, 2], [3, 8, 1]);
  box(0xd6c4ff, [0, -3, -9], [8, 3, 1]);
  return scene;
}

// Soft pastel backdrop the glass refracts (matches the CSS .foil fallback).
function backdropTexture() {
  const w = 1024, h = 512;
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d')!;
  const base = g.createLinearGradient(0, 0, w, h);
  base.addColorStop(0, '#fbfafd'); base.addColorStop(1, '#edebf4');
  g.fillStyle = base; g.fillRect(0, 0, w, h);
  ([['#f7cde7', .18, .3], ['#9ff0e6', .82, .18], ['#beb9de', .72, .82], ['#e8efd2', .28, .88]] as const).forEach(([col, x, y]) => {
    const r = g.createRadialGradient(x * w, y * h, 0, x * w, y * h, w * .45);
    r.addColorStop(0, col); r.addColorStop(1, col + '00');
    g.fillStyle = r; g.fillRect(0, 0, w, h);
  });
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function mountHeroGlass(canvas: HTMLCanvasElement) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const small = window.matchMedia('(max-width: 767px)').matches;
  const animate = !reduce && !small; // phones and reduced motion get one still frame

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, small ? 1.25 : 1.5));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.95;

  const scene = new THREE.Scene();
  scene.background = backdropTexture();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(studioScene(), 0.02).texture;
  scene.environmentIntensity = 1.6;

  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);

  const glass = (o: THREE.MeshPhysicalMaterialParameters = {}) =>
    new THREE.MeshPhysicalMaterial({
      color: 0xffffff, roughness: 0, transmission: 1, thickness: 1.1, ior: 1.45,
      iridescence: 1, iridescenceIOR: 1.9, iridescenceThicknessRange: [100, 1200],
      clearcoat: 1, clearcoatRoughness: 0, dispersion: 12,
      attenuationColor: new THREE.Color(0xc9d6ff), attenuationDistance: 2.2, ...o,
    });

  const pts = [[2.6,2.2,0],[4.6,.6,1],[3.2,-1.6,-.5],[.8,-.6,1.2],[1.6,1.6,-1],[4,2.4,.4],[5.6,0,-.6],[4.2,-2.6,.8],[1.4,-2.4,-.4],[-.2,-.4,.6],[1.2,1.2,1.4]]
    .map(([x, y, z]) => new THREE.Vector3(x, y, z));
  const curve = new THREE.CatmullRomCurve3(pts, true, 'catmullrom', 0.6);
  const ribbon = new THREE.Mesh(new THREE.TubeGeometry(curve, small ? 260 : 480, 0.4, small ? 40 : 64, true), glass());
  const group = new THREE.Group();
  ribbon.position.set(-2.6, 0.1, 0);
  group.add(ribbon);
  const bubble = new THREE.Mesh(new THREE.SphereGeometry(0.55, 64, 64), glass({ attenuationDistance: 6 }));
  bubble.position.set(-3.6, 2.4, -0.5);
  group.add(bubble);
  scene.add(group);

  function layout() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // Push the ribbon right on wide screens so the headline stays clear; center it on phones.
    const wide = camera.aspect > 1.2;
    group.position.set(wide ? 3.0 : 0.4, wide ? 0.1 : 1.6, 0);
    group.scale.setScalar(wide ? 1 : 0.72);
    camera.position.set(0, 0, wide ? 12 : 15);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  }
  layout();

  const pointer = { x: 0, y: 0 };
  let scrollP = 0;
  let visible = true;
  const clock = new THREE.Clock();

  function frame() {
    const t = clock.getElapsedTime();
    group.rotation.x = 0.25 + pointer.y * 0.18 + Math.sin(t * 0.25) * 0.05;
    group.rotation.y = -0.35 + pointer.x * 0.25 + t * 0.04 + scrollP * 0.9;
    group.rotation.z = 0.1 + scrollP * 0.35;
    bubble.position.y = 2.4 + Math.sin(t * 0.8) * 0.15;
    renderer.render(scene, camera);
  }

  frame();
  canvas.classList.add('is-ready');

  window.addEventListener('resize', () => { layout(); frame(); }, { passive: true });
  if (!animate) return;

  window.addEventListener('pointermove', (e) => {
    pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
  }, { passive: true });
  window.addEventListener('scroll', () => {
    scrollP = Math.min(1, window.scrollY / window.innerHeight);
  }, { passive: true });
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(canvas);

  const loop = () => {
    if (visible && !document.hidden) frame();
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}
