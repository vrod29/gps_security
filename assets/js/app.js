$('.hamburger').click(function(e){
  e.preventDefault();
  $(this).toggleClass('is-active');
})

$(window).scroll(function(){
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});
