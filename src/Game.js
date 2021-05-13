/* eslint-disable max-len */
/* eslint-disable no-console */
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