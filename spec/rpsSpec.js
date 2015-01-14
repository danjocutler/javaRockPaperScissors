describe('RockPaperScissors', function(){

	beforeEach( function(){
		rock = new Rock;
		paper = new Paper
		scissors = new Scissors;
		rules = new Rules;
		draw = new Draw;		
	});

	describe('Gestures', function(){
		it('Rock', function(){
			expect(rock.type).toEqual ("Rock")
		});

		it('Paper', function(){
			expect(paper.type).toEqual ("Paper")
		});

		it('Scissors', function(){
			expect(scissors.type).toEqual ("Scissors")
		});	
	});

	describe('Rules', function(){
		it('rock should beat scissors', function() {
			expect(rules.winningChoiceOf(rock, scissors)).toBe(rock);
		});

		it('scissors should not beat rock', function() {
			expect(rules.winningChoiceOf(scissors, rock)).toBe(rock)
		});

		it('paper should beat rock', function(){
			expect(rules.winningChoiceOf(paper, rock)).toBe(paper)
		});

		it('paper should not beat rock', function(){
			expect(rules.winningChoiceOf(rock, paper)).toBe(paper)
		});

		it('scissors should beat paper', function(){
			expect(rules.winningChoiceOf(scissors, paper)).toBe(scissors)
		});

		it('paper should not beat scissors', function(){
			expect(rules.winningChoiceOf(paper, scissors)).toBe(scissors)
		});

		it('rock vs rock should be a draw', function(){
			expect(rules.winningChoiceOf(rock, rock)).toEqual(draw)
		});
	});

});