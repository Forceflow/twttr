var TWEETLIMIT = 140;

function updateCharcount(){
	var length = 0;
	if ($("#tweettext").val() !== undefined){
		var length = $("#tweettext").val().length;
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

