import React from 'react';

import Card from './card.js';

module.exports = React.createClass({
  
  render: function() {
    return(
      <div className="chooser">
        <p>Do you do this activity in your class?</p>
        <Card text={this.props.card['text']} type={this.props.card['type']}/>
        <div className="buttons">
          <button onClick={this.props.handleDo}>I do this</button>
          <button onClick={this.props.handleDont}>I don't do this</button>
        </div>
      </div>
    );
    
  }
});
