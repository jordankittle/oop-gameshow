/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
 class Game {
 	constructor() {
 		this.missed = 0;
 		this.phrases = this.createPhrases();
 		this.activePhrase = null;
 	}

 	createPhrases(){
 		const phraseList =  [
 			{phrase: 'The best of both worlds'},
 			{phrase: 'A perfect storm'},
 			{phrase: 'Barking up the wrong tree'},
 			{phrase: 'Every cloud has a silver lining'},
 			{phrase: 'Hit the nail on the head'}
 		];
 		return phraseList.map( (phrase) => {
 			phrase.phrase = phrase.phrase.toLowerCase();
 			return phrase;
 		} );
 	}
 }