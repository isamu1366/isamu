$(".js-toggle").on("click",function(){
    $(this).siblings("dd").slideToggle();
  })
  $(function() {
      $(document).snowfall({
        minSize  : 5,    // 雪の最小サイズ
        maxSize  : 10,    // 雪の最大サイズ
        minSpeed : 1,    // 雪の最低速度
        maxSpeed : 8,    // 雪の最高速度
        round    : true, // 雪の形を丸くする
        shadow   : true, // 雪に影をつける
        flakeColor : "pink", // 雪の色を指定
      });
    })