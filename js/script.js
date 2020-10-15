$(document).ready(function() {
  // ゆっくり要素表示
  $('#top').fadeIn(1500);
  $('.contents').fadeIn(1500);
  $('.menuContainer').fadeIn(1500);

  // topページはメニューをアイキャッチの後に出す
  $('#firstClick').on('click', function () {
    $(this).removeClass('show');
    $('#nav').addClass('show');
  });

  // スクロールで表示されるメニュー
  var startPosition = 0;
  $(window).on('scroll',function(){
    if ($(this).scrollTop() < startPosition || $(this).scrollTop() < 100) {
      $('.photoMenu').removeClass('hide');
      $('.photoMenuMask').removeClass('hide');
      $('.menuButton').removeClass('hide');
    } else {
        $('.photoMenu').addClass('hide');
        $('.photoMenuMask').addClass('hide');
        $('.menuButton').addClass('hide');
    }
    startPosition = $(this).scrollTop();
  });

  // ランダムにアイキャッチ画像を表示する関数
  // 600px以上の条件分岐
  if (window.matchMedia( '(min-width: 600px)' ).matches) {
    var minPc = 0 ;
    var maxPc = 22 ;  //このmaxは写真の枚数 
    var result = getRandom( minPc, maxPc );
    function getRandom( minPc, maxPc ) {
      var random = Math.floor( Math.random() * (maxPc - minPc ) + minPc);
      return random;
    };
    var eyeCatch = ['img/T1.jpg','img/T2.jpg','img/T3.jpg','img/T4.jpg','img/T5.jpg','img/T6.jpg','img/T7.jpg','img/T8.jpg','img/T9.jpg','img/T10.jpg','img/T11.jpg','img/T12.jpg','img/T13.jpg','img/T14.jpg','img/T15.jpg','img/T16.jpg','img/T17.jpg','img/T18.jpg','img/T19.jpg','img/T20.jpg','img/T21.jpg','img/T22.jpg'];
  } else {  // 600px以下の条件分岐
      var minSp = 0 ;
      var maxSp = 8 ; 
      var result = getRandom( minSp, maxSp );
      function getRandom( minSp, maxSp ) {
        var random = Math.floor( Math.random() * (maxSp - minSp) ) + minSp;
        return random;
    }
    var eyeCatch = ['img/m1.jpg','img/m2.jpg','img/m3.jpg','img/m4.jpg','img/m5.jpg','img/m6.jpg','img/m7.jpg','img/m8.jpg'];
  };
  // img挿入時(今回は背景で挿入)
  // $('#firstClick').html('<img src="'+eyeCatch[result]+'"></img>')
  $('#firstClick').css('background-image', 'url('+eyeCatch[result]+')')

  // 季節の無限ループ
  $(window).scroll(function(){
    var $windowHeight = $('#circulation').innerHeight(); // コンテンツの高さ
    var totalScroll = Math.floor($(this).scrollTop()) + $(window).height();
      if( $windowHeight <= totalScroll){
        $(window).scrollTop(0,0);
      }
  });
  // スマホ時の最下部調整(2枚目の挿入)
  if (window.matchMedia( '(max-width: 600px)' ).matches) {
    const $dummyImg = $('<img src="../img/a6.jpg" class="lazy max85"/>').append()
    const $dummyDiv = $('<div />', {class: 'imgBox'}).append($dummyImg)
    $('#circulation').append($dummyDiv);
  };
});
