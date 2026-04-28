// リンクをタップしたらチェックボックスをオフにして閉じる
const navToggle = document.getElementById('nav-toggle');
if (navToggle) {
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => { navToggle.checked = false; });
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
