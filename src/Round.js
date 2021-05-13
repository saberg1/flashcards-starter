const Turn = require("../src/Turn.js");

class Round{
  constructor(deck) {
    this.deck = deck
    this.turns = 0
    this.currentCard = this.deck.cards[this.turns]
    this.incorrectGuesses = []
  }

  returnCurrentCard() {

    return this.currentCard;
  }

  takeTurn(guess) {
    this.turns++
    let turn = new Turn(guess, this.currentCard)
    
    this.currentCard = this.deck.cards[this.turns]
    
    if(!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.card.id)
      return turn.giveFeedback() 
    } else {
      return turn.giveFeedback()
    }
  }

  calculatePercentCorrect() {
    // console.log('calcualte percent: ', Math.round((this.incorrectGuesses.length / this.turns) * 100))
    // return Math.round((this.incorrectGuesses.length / this.turns) * 100)
    return Math.round(((this.turns - this.incorrectGuesses.length)/ this.turns ) * 100)
  }

  endRound() {
    // console.log('endRound: ', Math.round((this.incorrectGuesses.length / this.turns) * 100))

    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round