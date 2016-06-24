$(document).ready(function() {
  $(".small").click(function(event){
  event.preventDefault();
  $(".small").animate({"font-size":"100px"});
});
$(".bigImage").click(function(event){
  event.preventDefault();
  $(".bigImage").animate({"width":"500px"});
});
});
