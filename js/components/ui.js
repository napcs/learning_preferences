import React from 'react';
import Pile from './pile.js';
import Chooser from './chooser.js';

module.exports = React.createClass({
  handleDo: function(e) {
    this.doesPile.push(this.state.currentCard);
    this.pickNextCard();
  },
  
  handleDont: function(e) {
    this.doesNotPile.push(this.state.currentCard);
    this.pickNextCard();
  },
  
  pickNextCard: function() {
    if(this.state.cards.length === 0) {
      this.setState({done: true})
    } else {
      this.setState({
        currentCard: this.state.cards.shift(),
        cards: this.state.cards
      });
    }
  },
  
  componentDidMount: function() {
    this.doesPile = [];
    this.doesNotPile = [];
    
  },
  getInitialState: function() {
    var card = this.props.cards.shift();
    return {
      currentCard: card,
      cards: this.props.cards,
      done: false
    };
  },
  render: function() {
    var result;
    
    if(this.state.done) {
      result = <div>
        <div id="do">
          <h2>Things you do</h2>
          <Pile cards={this.doesPile} />
        </div>
        <div id="dont">
          <h2>Things you could do</h2>
          <Pile cards={this.doesNotPile} />
        </div>
      </div>
    } else {
      result = <Chooser handleDo={this.handleDo} handleDont={this.handleDont} card={this.state.currentCard} />
    }
    
    return <div>{result}</div>
    
  }
});