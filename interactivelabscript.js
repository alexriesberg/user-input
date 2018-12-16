$(document).ready(function() {
	$("div").hide();

	$(".answer").on("click", function() {
		$("div").show();

		$("div").makeItRain();		
	});

$(function() {  
  
  $("#HOWSUBMIT").click(function(){
    
    //select the box with id of age
    //get the value from that box
    var howString = $("#how").val();

    //convert string to number
    var howmany = parseInt(ageString);

    //check if age is greater than 21
    if ( howmany >= 21 ) {
      //if age is greater than 21 show the next question
      $("#neil-form").show();
      $("#age-form").hide();

    if ( neilAlbums > 5 ) {
      $("#neil-form").hide();
      $("#answer").text("You're in!");
      $("#club-img").attr("src", "https://media.giphy.com/media/zyxiqEQb6wTSg/giphy.gif");

    } else {
      $("#answer").text("scram. youre too young.");
      $("#club-img").text("");
  
    }
    });
});