//対象のクラス(.fade-in)を取得
const fadeInTarget = document.querySelectorAll('.fade-in');

// スクロールイベントを宣言
window.addEventListener('scroll', function(){
  // for文で要素一つ一つに対して繰り返し処理
  for (let count = 0; count < fadeInTarget.length; count++){
    //ターゲットまでの位置を取得する
    const rect = fadeInTarget[count].getBoundingClientRect().top;
    // ドキュメントの左上からのスクロール量を取得(現在のスクロール量)
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    // ウィンドウからターゲットまでの距離を取得
    const offset = rect + scroll;
    // 現在のブラウザの高さを取得
    const windowHeight = window.innerHeight;
    //　下にスクロール時ターゲットがウィンドウの高さまで達したら実行
    if (scroll > offset - windowHeight) {
      // class(.scroll-in)を追加
      fadeInTarget[count].classList.add('scroll-in');
    }
  }
});