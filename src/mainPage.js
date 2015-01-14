$('#rock').data('type', 'Rock');
$('#paper').data('type', 'Paper');
$('#scissors').data('type', 'Scissors');

$('input').each(function() {
	$(this).click(function() {
		var gestures = $('input');
		var index = Math.floor(Math.random() * (gestures.length));
		var computerChoice = gestures[index];
		var rules = new Rules;
		var winner = rules.winningChoiceOf($(this).data(), $(computerChoice).data())
		if(winner === $(this).data())
			$('#Winner').text("You win");
		else if (winner === $(computerChoice).data())
			$('#Winner').text("computer wins");
		else
			$('#Winner').text("It's a draw!");
	});
});
