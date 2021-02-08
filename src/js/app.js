$(function() {
  // $Functions-variables|
  var stickyNavbar = $('nav');
  var btn_login = $('#btn-login');

  // ==>| Navigation-> Sticky-Animation
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      stickyNavbar.fadeIn(600);
    } else {
      stickyNavbar.fadeOut(100);
    }
  });
  // ==>| Navigation-> Back-to-top
  $("a[href='#home']").click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });


});
