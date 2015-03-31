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
  
});