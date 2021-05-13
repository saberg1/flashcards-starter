const Round = require("../src/Round.js");
const Deck = require("../src/Deck.js");
const Game = require("../src/Game.js");

const chai = require("chai");
const expect = chai.expect;

const data = require("../src/data");
const prototypeQuestions = data.prototypeData;

let game

beforeEach( () => {
  game = new Game()
})

describe('Game', () => {
  
  it.only('should instantiate a game', () => {

    expect(game).to.be.an.instanceOf(Game)
  })
})