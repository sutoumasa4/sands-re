// ハンバーガーメニュー
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  // タッチ操作（iOS Safari）
  hamburger.addEventListener('touchstart', function(e) {
    e.preventDefault();
    e.stopPropagation();
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  }, { passive: false });

  // デスクトップ用クリック
  hamburger.addEventListener('click', function(e) {
    e.stopPropagation();
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // リンクをタップしたら閉じる
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // 外側タップで閉じる
  document.addEventListener('touchstart', function(e) {
    if (navLinks.classList.contains('open') &&
        !hamburger.contains(e.target) &&
        !navLinks.contains(e.target)) {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    }
  }, { passive: true });
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
