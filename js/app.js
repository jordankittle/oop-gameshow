/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
var game;
document.getElementById('btn__reset').addEventListener('click', (e) => {
	game = new Game();
	game.startGame();
});

/**
*Listen for button clicks and call handleInteraction()
*
*/
document.getElementById('qwerty').addEventListener('click', (e) => {
	if (e.target.tagName === 'BUTTON'){
		game.handleInteraction(e.target);
	}
});

document.addEventListener('keyup', (e) => {
	console.log(game?'true':'false');
	if(game){
		const letter = String.fromCharCode(e.keyCode).toLowerCase();
		if(/[a-z]/.test(letter) ){
			const buttons = document.querySelectorAll('#qwerty button');
			buttons.forEach((button) => {
				if (button.textContent === letter){
					game.handleInteraction(button);
				}
			});
		}
	}
});
