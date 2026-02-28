// martinpina.com — main.js

/* ── Mobile Navigation ─────────────────────────────────── */
const menuBtn = document.querySelector('.nav-menu-btn');
const navMobile = document.querySelector('.nav-mobile');
if (menuBtn && navMobile) {
  menuBtn.addEventListener('click', () => {
    navMobile.classList.toggle('open');
    const open = navMobile.classList.contains('open');
    menuBtn.setAttribute('aria-expanded', open);
  });
}

/* ── Active Nav Link ───────────────────────────────────── */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

/* ── Scroll Reveal ─────────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Reading Progress Bar ──────────────────────────────── */
const progressBar = document.querySelector('.reading-progress');
if (progressBar) {
  window.addEventListener('scroll', () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / docHeight) * 100;
    progressBar.style.width = scrolled + '%';
  });
}

/* ── Blog Tag Filter ───────────────────────────────────── */
const tagBtns = document.querySelectorAll('.sidebar-tag');
const postItems = document.querySelectorAll('.blog-post-item');
if (tagBtns.length && postItems.length) {
  tagBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tag = btn.dataset.tag;

      tagBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      postItems.forEach(post => {
        if (tag === 'all' || post.dataset.tag === tag) {
          post.style.display = '';
        } else {
          post.style.display = 'none';
        }
      });
    });
  });
}

/* ── Newsletter Form ───────────────────────────────────── */
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    if (email) {
      newsletterForm.innerHTML = `
        <p style="padding: 1rem; font-family: var(--font-display); font-style: italic; font-size: 1.1rem; color: var(--amber);">
          Thank you — you'll hear from me soon.
        </p>`;
    }
  });
}
