function Rock() {
	this.type = "Rock"
};
function Paper() {
	this.type = "Paper"
};
function Scissors() {
	this.type = "Scissors"
};
function Rules() {
	this.trump = {"Rock": {"Scissors": "beats"},
							  "Paper": {"Rock": "beats"},
						  	"Scissors": {"Paper": "beats"}
							 };
};
function Draw() {};

Rules.prototype.winningChoiceOf = function(choice1, choice2) {
	if(choice1.type === choice2.type) 
		return new Draw;
	else if (choice2.type in this.trump[choice1.type])
		return choice1;
	else
		return choice2;
};