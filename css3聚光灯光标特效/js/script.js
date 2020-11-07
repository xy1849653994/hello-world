//レイヤーを移動させると手間が大きいので
//グラデーションの中央を移動させる
$(document).mousemove(function(e){
  $('.spotlight').attr({  'style':'background:radial-gradient(50px 50px at '+ e.clientX +'px '+ e.clientY +'px, transparent, transparent 100px, rgba(0,0,0,0.6) 150px)'
  });
});