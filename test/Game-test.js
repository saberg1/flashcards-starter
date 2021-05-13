const Round = require("../src/Round.js");
const Deck = require("../src/Deck.js");
const Game = require("../src/Game.js");

const chai = require("chai");
const expect = chai.expect;

let game

beforeEach( () => {
  game = new Game()
})

describe('Game', () => {
  
  it('should instantiate a game', () => {

    expect(game).to.be.an.instanceOf(Game)
  })

  it('should keep track of currentRound', () => {

    expect(game.currentRound).to.equal(undefined)
  })
})

describe('start', () => {
  
  it('should be a method', () => {

    expect(game.start).to.be.a('function')
  })

  it('should create a Deck of cards', () => {

    game.start()

    let deck = game.currentRound.deck

    expect(deck).to.be.an.instanceOf(Deck)
  })

  it('should create a Round of cards', () => {

    game.start()

    let round = game.currentRound

    expect(round).to.be.an.instanceOf(Round)
  })
})
