const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');

const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound;
  }
  
  start() {
    //i want to remove each cardObj from the array of questions and
    //put them into a new deck instance
    //put deck instance into round?
    //print message using CLI. what is CLI? 
    //invokes printQuestion to kick off our helper functions that allow interaction via the CLI
    //invoke game in index.js
    const question = prototypeQuestions.map(questions => {
      return new Card(
        questions.id, questions.question, 
        questions.answers, questions.correctAnswer
        );
      })
      const deck = new Deck(question)
      this.currentRound = new Round(deck)
      this.printMessage(deck, this.currentRound)
      this.printQuestion(this.currentRound)
    }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;