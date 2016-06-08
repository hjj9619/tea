

$(".jquery-menu li.parent").click(function(){
  $(this).siblings().find('ul').hide();
  $(".menu").css({height:"auto"})
  $(this).find('ul').show();
});
/*.click(function(){
  var b = true;
  if( b ){
    b = false;
    $(".menu").animate({height:300}, 1000);
    alert(b)
  }else{
    $(".menu").animate({height:0}, 1000);
    b = true;
    alert(b);
  }
});*/
function toggle(obj, fn1, fn2){
  var onOff=true;
  obj.click(function(){
    if(onOff){
      fn1();
      onOff=false;
    }else{
      fn2();
      onOff=true;
    }
  })
}

toggle($('.menu-btn'), function(){
  $(".menu").animate({maxHeight:160}, 1000);
}, function(){
  $(".menu").animate({maxHeight:0}, 1000);
})