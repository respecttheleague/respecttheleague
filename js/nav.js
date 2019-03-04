$(".homeNav").on("click", function(){
  $(".aboutMe").hide(500);
  $(".experience").hide(500);
  $(".homepage").show(1000);
});

$(".aboutNav").on("click", function(){
  $(".homepage").hide(500);
  $(".experience").hide(500);
  $(".aboutMe").show(1000);
});

$(".expNav").on("click", function(){
  $(".aboutMe").hide(500);
  $(".homepage").hide(500);
  $(".experience").show(1000);
});
