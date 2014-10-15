function Rock() {
	this.type = "Rock"
};
function Paper() {
	this.type = "Paper"
};
function Scissors() {
	this.type = "Scissors"
};
function Rules() {};
function Draw() {};

Rules.prototype.winningChoiceOf = function(choice1, choice2) {
	if(choice1 === choice2) 
		return draw
	else 
		return rock
};