$(".voiture_mois").hover(function(){
  $('.txt_mois2').css("display", "block");
  $(".txt_mois").css("display", "none");
}, function(){
  $(".txt_mois").css("display", "block");
  $('.txt_mois2').css("display", "none");
});

$(".voiture3hover").hover(function(){
  $(".voiture3hover").css("opacity", "1");
  $('.voiture3').addClass( "voiture3-hover" );
}, function(){
  $('.voiture3hover').css("opacity", "0");
  $('.voiture3').removeClass( "voiture3-hover" );
});

$(".voiture4hover").hover(function(){
  $(".voiture4hover").css("opacity", "1");

  $(".voiture4ho").css("opacity", "0");
  $('.voiture4').addClass( "voiture4-hover" );
}, function(){
  $('.voiture4hover').css("opacity", "0");

  $('.voiture4ho').css("opacity", "1");
  $('.voiture4').removeClass( "voiture4-hover" );
});

$(".voiture5hover").hover(function(){
  $(".voiture5hover").css("opacity", "1");
  $(".voiture5ho").css("opacity", "0");
  $('.voiture5').addClass( "voiture5-hover" );
}, function(){
  $('.voiture5hover').css("opacity", "0");
  $('.voiture5ho').css("opacity", "1");
  $('.voiture5').removeClass( "voiture5-hover" );
});
