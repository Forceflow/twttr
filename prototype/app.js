// Configure variables
var TWEETLIMIT = 140;
var tweet_area = "#tweettext";
var character_count = "#charcount";
var undo_history = []; // undo history

// Update tweet character counter
function updateTweetCharCount(){
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

function applyRule(id, text, dry_run = false){
	var newtext = text.replace(rules[id].pattern, rules[id].replace); // apply rule	
	rules_stats[id] = new RuleStat(true, (text.length-newtext.length))  // update stats
	if(dry_run){return text;} // in case of dry run, return old (unchanged text)
	return newtext;
}

function resetRuleStats(){
	for(var i = 0; i<rules.length; i++){rules_stats[i] = new RuleStat(false, 0);}
}

// Reduce tweet using ALL known rules
function tweetFullReduce(){
	// Get tweet, set undo history
	var tweet = $(tweet_area).val();
	undo_history.push(tweet);
	var before_count = tweet.length;
	// Apply all rules
	for(var i = 0; i<rules.length; i++){
		tweet = applyRule(i, tweet);
	}
	// Update tweet area and charcount
	$(tweet_area).val(tweet);
	updateTweetCharCount();
	console.log("I saved " + (before_count - tweet.length) + " characters.")
}

// List all the rules we're using
function listRules(){
	var html = "<ul>";
	for(var i = 0; i<rules.length; i++){
		html = html + "<li>" + rules[i].name + "</li>";
	}
	var html = html + "</ul>";
	$("#knownrules").html(html);
}

// EVENT LISTENERS

$(tweet_area).on("change input paste keyup", function() {
  updateTweetCharCount();
});

$( document ).ready(listRules())