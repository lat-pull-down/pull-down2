$(window).load(function(){
  $('body').delay(500).queue(function(){
    $(this).addClass('loaded');
  });
});
$(document).ready(function(){
  $('.toggle').click(function(e){
   e.preventDefault(); 
    $('body').toggleClass('loaded');
  }
  );
});