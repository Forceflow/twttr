// Configure variables
var TWEETLIMIT = 140;
// Page areas
var tweet_area = "#tweettext";
var character_count = "#charcount";
var rules_list = "#rules_list";
var rules_list_title = "#rules_list_title";
// Undo history
var undo_history = []; // undo history

var rules_stats = [];

// just store rule in rulestats - much easier
function RuleStat(rule, savings){
	this.rule = rule;
	this.savings = savings;
}

function resetRuleStats(){
	rules_stats = [];
}

// Get current tweet length and update character counter
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
	return length;
}

function applyRule(id, text, dry_run = false){
	var newtext = text.replace(rules[id].pattern, rules[id].replace); // apply rule
	savings = text.length-newtext.length;
	if(savings > 0){
		rules_stats.push(new RuleStat(rules[id], savings));  // update stats
	}
	if(dry_run){return text;} // in case of dry run, return old (unchanged text)
	return newtext;
}

// Reduce tweet using ALL known rules
function tweetFullReduce(){
	resetRuleStats();
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
	listRules(true);
	console.log("I saved " + (before_count - tweet.length) + " characters.")
}

// List all the rules we're using
function listRules(only_used = false){
	var html = "<ul>";
	if(!only_used){
		for(var i = 0; i<rules.length; i++){
				html = html + "<li>" + rules[i].name + "</li>";
		}
	} else {
		for(var i = 0; i<rules_stats.length; i++){
				html = html + "<li>" + rules_stats[i].rule.name + " | " + rules_stats[i].savings +"</li>";
		}
	}
	var html = html + "</ul>";
	$(rules_list).html(html);
	if(only_used){
		$(rules_list_title).html('Used Rules');
	} else {
		$(rules_list_title).html('Known Rules');
	}
}

resetRuleStats();

// EVENT LISTENERS
$(tweet_area).on("change input paste keyup", function() {
  var length = updateTweetCharCount();
  if (length == 0){
	  resetRuleStats();
	  listRules();
  }
});

$( document ).ready(listRules())