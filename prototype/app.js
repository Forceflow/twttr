// Configure variables
var TWEETLIMIT = 140;
var tweet_area = "#tweettext"

// Define rule objects here


// Update tweet character count
function updateCharcount(){
	var length = 0;
	if ($(tweet_area).val() !== undefined){
		var length = $(tweet_area).val().length;
	}
	$("#charcount").text(length);
	if(length <= TWEETLIMIT){
		$("#charcount").css('color', 'green');
	} else {
		$("#charcount").css('color', 'red');
	}
}

$("#tweettext").on("change input paste keyup", function() {
  updateCharcount();
});

