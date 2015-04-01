/* jshint devel:true */
//console.log('\'Allo \'Allo!');

$(function() {
  var $slides = $('.main-slider .slide');
  var slides_count = $slides.size()-1;
  var $next = $('.arrow.right');
  var $prev = $('.arrow.left');
  var timer;
  
  function showSlideAndVideo(next) {
    $slides.removeClass('active');
    
    $slides.eq(next).addClass('active');
    var video_src = $slides.eq(next).attr('data-video');
    console.log(video_src);
    $('.video-link iframe.video').attr('src', video_src);
    clearInterval(timer);
    startTimer();
  }
  
  $next.click(function(e){
    e.preventDefault();
    
    var cur = $slides.index($slides.filter('.active'));
    
    if (cur<slides_count) {
      var next = cur+1;
    } else {
      var next = 0;
    }
    
    showSlideAndVideo(next);
  });
  
  $prev.click(function(e){
    e.preventDefault();
    
    var cur = $slides.index($slides.filter('.active'));
    
    if (cur>0) {
      var next = cur -1;
    } else {
      var next = slides_count;
    }
    
    showSlideAndVideo(next);
  });
  
  function startTimer() {
    timer = setInterval(function(){
      $next.click();
    }, 7000);
  }
  
  startTimer();
  
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
  
  /*$('.video-link').click(function(e){
    e.preventDefault();
    var $box = $(this).find('.video');
    $box.attr('src', $box.attr('data-src')).fadeIn();
  });*/
  
});


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-61411084-1', 'auto');
ga('send', 'pageview');
