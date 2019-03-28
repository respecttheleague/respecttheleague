//Redundant NavBar code to switch between various pages. Using JQuery Slideown Effect
$(".homeMenu").click(function(){
  $(".aboutMe").hide();
  $(".experience").hide();
  $(".resume").hide();
  $(".home").slideDown(1000);
});

$(".aboutMenu").click(function(){
  $(".home").hide();
  $(".experience").hide();
  $(".resume").hide();
  $(".aboutMe").slideDown(1000);
});

$(".expMenu").click(function(){
  $(".home").hide();
  $(".aboutMe").hide();
  $(".resume").hide();
  $(".experience").slideDown(1000);
});

$(".resMenu").click(function(){
  $(".home").hide();
  $(".aboutMe").hide();
  $(".experience").hide();
  $(".resume").slideDown(1000);
});





//Something a little extra for those using console
console.log("Nice work using the console. As a reward, see the nerdy/funny photo of me back in my chess days:")
console.log("http://chessmaine.net/chessmaine/images/101_0968.JPG")
