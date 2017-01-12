/* Permettre aux personnes déficientes d'accéder aux menus cachés sans utiliser la souris*/
/* Le keycode 9 correspond à la touche "tabulation".*/
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
