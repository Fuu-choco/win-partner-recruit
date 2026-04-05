/* ============================================================
   common.js  —  全ページ共通パーツの自動挿入
   ヘッダー / Download・Contact / SNS / フッター
   ============================================================ */

(function () {

  /* ---- ヘッダー HTML（メインページ用） ---- */
  const HEADER_SIMPLE = `
  <header id="site-header">
    <a href="index.html" class="logo">WIN PARTNER</a>
  </header>`;

  /* ---- ヘッダー HTML（サブページ用 - ハンバーガーメニューのみ） ---- */
  const HEADER_WITH_NAV = `
  <header id="site-header">
    <a href="index.html" class="logo">WIN PARTNER</a>
    <div class="header-right">
      <button class="hamburger" id="hamburger" aria-label="メニュー">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
  <nav class="mobile-nav" id="mobileNav">
    <a href="jobs.html">募集要項</a>
    <a href="education.html">教育 / 研修制度</a>
    <a href="benefits.html">福利厚生 / 社内制度</a>
    <a href="environment.html">働く環境</a>
    <a href="career.html">キャリアパス・モデルケース</a>
    <a href="https://win-partner.jp" target="_blank" rel="noopener">WIN PARTNER 公式サイト</a>
  </nav>`;

  /* ---- フッター上のナビゲーション HTML ---- */
  const FOOTER_NAV_HTML = `
  <section id="footer-navigation">
    <div class="footer-nav-container">
      <nav class="footer-page-nav">
        <a href="jobs.html">募集要項</a>
        <a href="education.html">教育 / 研修</a>
        <a href="benefits.html">福利厚生</a>
        <a href="environment.html">働く環境</a>
        <a href="career.html">キャリアパス</a>
        <a href="https://win-partner.jp" target="_blank" rel="noopener">WIN PARTNER 公式サイト</a>
      </nav>
    </div>
  </section>`;

  /* ---- Image Section HTML ---- */
  const IMAGE_SECTION_HTML = `
  <div id="page-image-section">
    <div class="page-image-wrap">
      <div class="page-image-placeholder">
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="8" width="40" height="32" rx="2"/>
          <circle cx="17" cy="20" r="4"/>
          <polyline points="4,34 14,22 22,30 30,20 44,36"/>
        </svg>
        <span>IMAGE PLACEHOLDER</span>
        <p class="image-note">ここに画像を挿入できます</p>
      </div>
    </div>
  </div>`;

  /* ---- SNS HTML ---- */
  const SNS_HTML = `
  <div id="sns">
    <div class="sns-inner">
      <div class="sns-list fade-in">
        <div class="sns-item">
          <div class="sns-icon yt">
            <svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.75 15.5V8.5l6.25 3.5-6.25 3.5z"/></svg>
          </div>
          YouTubeアカウント
        </div>
        <div class="sns-item">
          <div class="sns-icon x">
            <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </div>
          Xアカウント
        </div>
        <div class="sns-item">
          <div class="sns-icon line">
            <svg viewBox="0 0 24 24"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>
          </div>
          LINEアカウント
        </div>
      </div>
    </div>
  </div>`;

  /* ---- フッター HTML ---- */
  const FOOTER_HTML = `
  <footer>
    <div class="footer-inner">
      <div>
        <p class="footer-logo-en">WIN PARTNER</p>
        <p class="footer-logo-ja">株式会社ウィンパートナー</p>
        <p class="footer-address">
          〒000-0000 大阪市◯◯区◯◯<br>
          TEL.00-0000-0000<br><br>
          〒000-0000 東京都◯◯区◯◯<br>
          TEL.00-0000-0000
        </p>
      </div>
      <nav class="footer-nav-grid">
        <div class="footer-nav-col">
          <h5>Blog</h5>
        </div>
        <div class="footer-nav-col">
          <h5>Service</h5>
          <ul>
            <li><a href="#">コンサルティング</a></li>
            <li><a href="#">ブランドデザイン</a></li>
            <li><a href="#">WEB制作</a></li>
          </ul>
        </div>
        <div class="footer-nav-col">
          <h5>Company</h5>
          <ul>
            <li><a href="#">会社概要</a></li>
            <li><a href="#">代表メッセージ</a></li>
            <li><a href="#">アクセス</a></li>
          </ul>
        </div>
        <div class="footer-nav-col">
          <h5>Recruit</h5>
          <ul>
            <li><a href="jobs.html">募集要項</a></li>
            <li><a href="benefits.html">福利厚生</a></li>
            <li><a href="positions.html">募集職種</a></li>
            <li><a href="flow.html">採用フロー</a></li>
            <li><a href="contact.html">エントリー</a></li>
          </ul>
        </div>
        <div class="footer-nav-col">
          <h5>Download</h5>
          <ul>
            <li><a href="download.html">会社資料</a></li>
            <li><a href="download.html">採用資料</a></li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="footer-bottom">
      <p class="footer-copy">©WIN PARTNER INC.</p>
      <a href="#" class="footer-privacy">プライバシーポリシー</a>
    </div>
  </footer>`;


  /* ============================================================
     DOM への挿入
  ============================================================ */
  document.addEventListener('DOMContentLoaded', function () {

    /* 1. ヘッダー：ページに応じて適切なヘッダーを挿入 */
    const currentPage = location.pathname.split('/').pop();
    const isMainPage = currentPage === 'index.html' || currentPage === '';

    // メインページはシンプルなヘッダー、サブページはナビゲーション付きヘッダー
    const headerHTML = isMainPage ? HEADER_SIMPLE : HEADER_WITH_NAV;
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    /* 2. Image Section のみ挿入（SNS・フッターは削除）
          ただし #common-footer-anchor がある場合はその直前に挿入
          メインページの場合はイメージセクションなし */
    const contentToInsert = ''; // IMAGE PLACEHOLDERを挿入しないように変更

    const anchor = document.getElementById('common-footer-anchor');
    if (anchor) {
      anchor.insertAdjacentHTML('beforebegin', contentToInsert);
      anchor.remove();
    } else {
      document.body.insertAdjacentHTML('beforeend', contentToInsert);
    }

    /* 3. サブページのフッター前にナビゲーションを挿入 */
    if (!isMainPage) {
      const footer = document.querySelector('.site-footer');
      if (footer) {
        footer.insertAdjacentHTML('beforebegin', FOOTER_NAV_HTML);
      }
    }

    /* 3. 現在ページのナビリンクをアクティブ表示 */
    const currentPath = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.footer-nav-col a').forEach(a => {
      if (a.getAttribute('href') === currentPath) {
        a.style.color = '#ffffff';
        a.style.fontWeight = '500';
      }
    });

    /* 4. Intersection Observer（fade-in） */
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.fade-in').forEach(el => io.observe(el));

    /* 5. スムーススクロール */
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', function (e) {
        const id = this.getAttribute('href');
        if (id === '#') return;
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          const top = target.getBoundingClientRect().top + window.pageYOffset - 64;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });

    /* 6. ハンバーガーメニューの開閉（サブページのみ） */
    if (!isMainPage) {
      const hamburger = document.getElementById('hamburger');
      const mobileNav = document.getElementById('mobileNav');

      if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
          hamburger.classList.toggle('active');
          mobileNav.classList.toggle('open');
        });

        // モバイルナビのリンクをクリックしたらメニューを閉じる
        mobileNav.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('open');
          });
        });
      }

      /* 7. 現在のページをアクティブ表示（フッターナビ & モバイルナビ） */
      // フッターナビゲーション
      const footerNav = document.querySelector('.footer-page-nav');
      if (footerNav) {
        footerNav.querySelectorAll('a').forEach(link => {
          if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
          }
        });
      }

      // モバイル用ナビゲーション
      if (mobileNav) {
        mobileNav.querySelectorAll('a').forEach(link => {
          if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
          }
        });
      }
    }

  });

  /* ============================================================
     タイピングアニメーション
  ============================================================ */
  window.initTypingAnimation = function(selector, speed = 150, delay = 500) {
    const element = document.querySelector(selector);
    if (!element) return;

    const originalText = element.textContent + '          '; // 最後にスペース10個追加
    element.classList.add('typing-text');
    element.textContent = '';

    setTimeout(() => {
      let i = 0;
      function type() {
        if (i < originalText.length) {
          element.textContent += originalText.charAt(i);
          i++;
          setTimeout(type, speed);
        }
      }
      type();
    }, delay);
  };

})();
