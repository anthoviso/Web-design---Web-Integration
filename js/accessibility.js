$(function(){
 $("#homeMenu > a").keypress(function (e) {
    if (e.keyCode == 9) {
      $(".sousMenu").addClass( "accessMenu" );
    }
 });
 $("#competitionMenu").keypress(function (e) {
    if (e.keyCode == 9) {
      $(".sousMenu").removeClass( "accessMenu" );
    }
 });
});
