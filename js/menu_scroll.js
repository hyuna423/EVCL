jQuery(document).ready(function($) {

$(".scroll").click(function(event){

event.preventDefault();

$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);

});

});


//메뉴 클릭시 자연스러운 스크롤 이동


var burger = $('.menu-trigger');

burger.each(function(index){
  var $this = $(this);

  $this.on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active-' + (index+1));
  })
});

var h = 0;

$(burger).on("click", function () {
if (h == 0) {
$('.m_menu').animate({
right: '8%',
opacity: 1
}, 500);
$(this).addClass('active-1');
h++;
} else if (h == 1) {
$('.m_menu').animate({
right: '8%',
/* opacity: 0 */
}, 500);
$(this).removeClass('active-1');
h--;
}
})

//모바일 메뉴


$(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 1) {
        $("header").css("background" , "rgba(0,0,0,.4)");
      }
      else{
        $("header").css("background" , "transparent");   
      }
    })
  })

  //스크롤시 메뉴변경