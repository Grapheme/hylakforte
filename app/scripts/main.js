/* jshint devel:true */
//console.log('\'Allo \'Allo!');

$(function() {
  var $slides = $('.main-slider .slide');
  var $video = $('.video-link iframe.video');
  var slides_count = $slides.size()-1;
  var $next = $('.arrow.right');
  var $prev = $('.arrow.left');
  
  $next.click(function(e){
    e.preventDefault();
    
    var cur = $slides.index($slides.filter('.active'));
    $slides.removeClass('active');
    $video.removeClass('active');
    if (cur<slides_count) {
      $slides.eq(cur+1).addClass('active');
      $video.eq(cur+1).addClass('active');
    } else {
      $slides.eq(0).addClass('active');
      $video.eq(0).addClass('active');
    }
    
  });
  
  $prev.click(function(e){
    e.preventDefault();
    
    var cur = $slides.index($slides.filter('.active'));
    $slides.removeClass('active');
    $video.removeClass('active');
    if (cur>0) {
      $slides.eq(cur-1).addClass('active');
      $video.eq(cur-1).addClass('active');
    } else {
      $slides.eq(slides_count).addClass('active');
      $video.eq(slides_count).addClass('active');
    }
    
  });
  
  /*setInterval(function(){
    $next.click();
  }, 5000)*/
  
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


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-61411084-1', 'auto');
ga('send', 'pageview');
