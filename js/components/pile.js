import React from 'react';
import Card from './card.js';

module.exports = React.createClass({
  render: function() {
    var results = this.props.cards.map(function(card){
      return(
        <Card sorted="true" text={card['text']} type={card['type']}/>
      );
    });
    
    return(
      <div className="pile">
        {results}
      </div>
    );
    
  }
});