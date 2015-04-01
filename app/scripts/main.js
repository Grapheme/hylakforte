/* jshint devel:true */
console.log('\'Allo \'Allo!');

$(function() {
  var $slides = $('.main-slider .slide');
  var slides_count = $slides.size()-1;
  var $next = $('.arrow.right');
  var $prev = $('.arrow.left');
  
  $next.click(function(e){
    e.preventDefault();
    
    var cur = $slides.index($slides.filter('.active'));
    $slides.removeClass('active');
    if (cur<slides_count) {
      $slides.eq(cur+1).addClass('active');
    } else {
      $slides.eq(0).addClass('active');
    }
    
  });
  
  $prev.click(function(e){
    e.preventDefault();
    
    var cur = $slides.index($slides.filter('.active'));
    $slides.removeClass('active');
    if (cur>0) {
      $slides.eq(cur-1).addClass('active');
    } else {
      $slides.eq(slides_count).addClass('active');
    }
    
  });
  
  setInterval(function(){
    $next.click();
  }, 5000)
  
  /*$(".video-link").fancybox({
    maxWidth	: 800,
    maxHeight	: 600,
    fitToView	: false,
    width		: '70%',
    height		: '70%',
    autoSize	: false,
    closeClick	: false,
    openEffect	: 'none',
    closeEffect	: 'none'
  });*/
  
  $('.video-link').click(function(e){
    e.preventDefault();
    var $box = $(this).find('.video');
    $box.attr('src', $box.attr('data-src')).fadeIn();
  });
  
});