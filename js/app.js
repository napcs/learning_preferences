import React from 'react';
import cards from './data/cards.js';
import UI from './components/ui.js';
import shuffle from './lib/shuffle.js';


var App = {};
App.sort = function() {
  var shuffledDeck = shuffle(cards);
  React.render(
    <UI cards={shuffledDeck} />, document.getElementById("app"));
  
}


App.sort();
