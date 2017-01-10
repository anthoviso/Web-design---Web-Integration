$(function(){
 $("#actualites > a").keypress(function (e) {
    if (e.keyCode == 13) {
      $(".sousMenu").css("display", "block");
    }
 });
});
