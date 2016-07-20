// Configure variables
var TWEETLIMIT = 140;
var tweet_area = "#tweettext";
var character_count = "#charcount";
var undo_history = []; // undo history

// This is a rule object
function Rule(name, pattern, replace){
	this.name = name;
	this.pattern = pattern;
	this.replace = replace;
}

// Define rules here
var rules = [];
// Notes: we use groups () to preserve case for first character, as well as \\b for word boundaries
rules.push(new Rule("Misschien", new RegExp('\\b(m)isschien\\b', 'ig'), "$1ss"));
rules.push(new Rule("Inderdaad", new RegExp('\\b(i)nderdaad\\b', 'ig'), "$1dd"));
rules.push(new Rule("Met behulp van", new RegExp('\\b(m)et\\sbehulp\\svan\\b', 'ig'), "$1bv"));
rules.push(new Rule("Van de", new RegExp('\\b(v)an\\s(d)e\\b', 'ig'), "$1$2"));

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