// Configure variables
var TWEETLIMIT = 140;
var tweet_area = "#tweettext";
var character_count = "#charcount";
var undo_history = []; // undo history

// Define rule objects here
var rules = [];
rules.push({name:"Misschien", pattern: new RegExp('\\bmisschien\\b', 'ig'), replace:"mss"});
rules.push({name:"Inderdaad", pattern: new RegExp('\\binderdaad\\b', 'ig'), replace:"inderdaad"});

// TODO: we need case matching replace

// Update tweet character counter
function updateCharcount(){
	var length = 0;
	if ($(tweet_area).val() !== undefined){
		var length = $(tweet_area).val().length;
	}
	$(character_count).text(length);
	if(length <= TWEETLIMIT){
		$(character_count).css('color', 'green');
	} else {
		$(character_count).css('color', 'red');
	}
}

// Reduce tweet using ALL known rules
function tweetFullReduce(dry_run = false){
	// Get tweet, setup stats and undo history
	var tweet = $(tweet_area).val();
	if(!dry_run){undo_history.push(tweet);}
	var before_count = tweet.length;
	// Apply all rules
	for(var i = 0; i<rules.length; i++){
		tweet = tweet.replace(rules[i].pattern, rules[i].replace);
	}
	// Update tweet area and charcount
	if(!dry_run){
		$(tweet_area).val(tweet);
		updateCharcount();
	}
	var chars_saved = before_count - tweet.length;;
	console.log("I saved " + chars_saved + " characters.")
	return chars_saved;
}

$(tweet_area).on("change input paste keyup", function() {
  updateCharcount();
});