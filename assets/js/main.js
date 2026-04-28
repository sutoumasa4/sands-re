// ハンバーガーメニュー
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

function closeNav() {
  if (hamburger) hamburger.classList.remove('open');
  if (navLinks) navLinks.classList.remove('open');
}

function toggleNav(e) {
  e.stopPropagation();
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
}

if (hamburger && navLinks) {
  hamburger.addEventListener('click', toggleNav);
  hamburger.addEventListener('touchend', function(e) {
    e.preventDefault();
    toggleNav(e);
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeNav);
    link.addEventListener('touchend', closeNav);
  });

  // 外側タップで閉じる（iOS対応）
  document.addEventListener('touchstart', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      closeNav();
    }
  });
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      closeNav();
    }
  });
}

// ナビ: スクロールで背景を切り替え
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// スクロールアニメーション (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.offsetTop - 68, behavior: 'smooth' });
  });
});
