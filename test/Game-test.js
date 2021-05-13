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
  
  it.only('should instantiate a game', () => {

    expect(game).to.be.an.instanceOf(Game)
  })

  it.only('should keep track of currentRound', () => {

    expect(game.currentRound).to.equal(undefined)
  })
})

describe('start', () => {
  
  it.only('should be a method', () => {

    expect(game.start).to.be.a('function')
  })

  it.only('should create a Deck of cards', () => {

    game.start()

    let deck = game.currentRound.deck

    expect(deck).to.be.an.instanceOf(Deck)
  })

  it.only('should create a Round of cards', () => {

    game.start()

    let round = game.currentRound

    expect(round).to.be.an.instanceOf(Round)
  })
})
