$(document).ready(function () {
  $(".menuMedia").hide();

  $(".menuBtn").click(function () {
    $(".menuBg").show();
    $(".menuContent").show();
    $(".menu").toggleClass("open");
    $(".menuBg").toggleClass("open");
    $("main").toggleClass("move");
    $("footer").toggleClass("move");
    setTimeout(function () {
      $(".menu .front").removeClass("hide");
    }, 2000);
    setTimeout(function () {
      $(".menuContent").css('pointer-events','initial');
      $(".menuMedia").show();
    }, 2500);
   

  });
  $(".closeMenu").click(function () {
    $(".menuContent").css('pointer-events','none');
    $(".menu .front").addClass("hide");
    $(".menu").toggleClass("open");
    $(".menuBg").toggleClass("open");
    $("main").toggleClass("move");
    $("footer").toggleClass("move");

    setTimeout(function () {
      $(".menuContent").hide();
    }, 200);
    setTimeout(function () {
      $(".menuBg").hide();
    }, 2500);
    $(".menuMedia").hide();
  });
  $(".menuBg").click(function () {
    $(".menuContent").css('pointer-events','none');
    $(".menu .front").addClass("hide");
    $(".menu").toggleClass("open");
    $(".menuBg").toggleClass("open");
    $("main").toggleClass("move");
    $("footer").toggleClass("move");

    setTimeout(function () {
      $(".menuContent").hide();
    }, 200);
    setTimeout(function () {
      $(".menuBg").hide();
    }, 2500);
    $(".menuMedia").hide();
  });

  $(".linkCon").mouseleave(function (e) {
    TweenMax.to($(".linkCon").children(".menuLink"), 0.3, {
      x: "0",
      y: "0",
      ease: Power2.easeOut,
    });
  });
  $(".linkCon").mouseenter(function (e) {
    // TweenMax.to(this, 0.3, { height: 200, width: 200 });
  });
  $(".linkCon").mousemove(function (e) {
    callParallax(e, this, $(this).children(".menuLink"));
  });
  function callParallax(e, con, element) {
    parallaxIt(e, con, element, 80);
  }
  function parallaxIt(e, con, target, movement) {
    var $this = $(con);
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;
    TweenMax.to(target, 0.3, {
      x: ((relX - $this.width() / 2) / $this.width()) * movement,
      y: ((relY - $this.height() / 2) / $this.height()) * movement,
      ease: Power2.easeOut,
    });
  }

// footer btn
  $(".upbtn").click(function () {
    $(document).scrollTop(0);
  });
  $(".darkBtn").click(function () {
    $("body").toggleClass("dark");
  });

});
