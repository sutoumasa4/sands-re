// ハンバーガーメニュー（iOS Safari対応）
const navToggle = document.getElementById('nav-toggle');
const navLabel = document.querySelector('label[for="nav-toggle"]');
if (navToggle && navLabel) {
  // iOSでlabelのtoggleが不安定なのでJSで直接制御
  navLabel.addEventListener('click', function(e) {
    e.preventDefault();
    navToggle.checked = !navToggle.checked;
  });
  // リンクをタップしたら閉じる
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => { navToggle.checked = false; });
  });
}

// ナビ: スクロールで背景を切り替え（トップページのみ）
const header = document.getElementById('header');
if (header && !document.body.classList.contains('subpage')) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

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
