// === THEME TOGGLE ===
const toggle = document.getElementById('themeToggle');
const body = document.body;

toggle.addEventListener('click', () => {
  const current = body.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', next);
  toggle.textContent = next === 'dark' ? '🌙' : '☀️';
});

// === PARTICLES BACKGROUND ===
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particlesArray = [];
canvas.width = innerWidth;
canvas.height = innerHeight;

class Particle {
  constructor(x, y, size, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }
  draw() {
    ctx.fillStyle = 'rgba(0,229,255,0.8)';
    ctx.shadowBlur = 20;
    ctx.shadowColor = '#00e5ff';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  particlesArray = [];
  for (let i = 0; i < 60; i++) {
    let size = Math.random() * 2 + 1;
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let speedX = (Math.random() - 0.5) * 1.2;
    let speedY = (Math.random() - 0.5) * 1.2;
    particlesArray.push(new Particle(x, y, size, speedX, speedY));
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

window.addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  initParticles();
});

// === CONTACT FORM HANDLER ===
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formMessage.textContent = "✅ Message sent successfully (demo mode)";
  contactForm.reset();
});

// === GITHUB PROJECT FETCHER (DEMO) ===
const githubProjects = document.getElementById('githubProjects');
const sampleProjects = [
  { name: "AI Dashboard", desc: "AI-powered analytics dashboard built with Next.js" },
  { name: "SmartHome API", desc: "RESTful API for IoT and smart devices" },
  { name: "CodeVerse 3D", desc: "3D portfolio built using Three.js and WebGL" }
];

sampleProjects.forEach(p => {
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `<h3>${p.name}</h3><p>${p.desc}</p>`;
  githubProjects.appendChild(div);
});
