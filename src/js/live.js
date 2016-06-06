$(".jquery-menu li.parent").click(function(){
  $(this).siblings().find('ul').hide();
  $(this).find('ul').show();
})