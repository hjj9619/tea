

$(".jquery-menu li.parent").click(function(){
  $(this).siblings().find('ul').hide();
  //$(".menu").css({height:"auto"})
  $(this).find('ul').show();
});

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
  $(".menu").css({height:'auto'});
}, function(){
  $(".menu").css({height: '0'});
})