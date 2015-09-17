import React from 'react';
import cards from './data/cards.js';
import UI from './components/ui.js';
import shuffle from './lib/shuffle.js';

var App = {};
App.sort = function() {
  React.render(
    <UI cards={shuffle(cards)} />, document.getElementById("app"));
  
}


App.sort();
