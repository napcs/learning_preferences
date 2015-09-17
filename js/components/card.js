import React from 'react';

module.exports = React.createClass({
  render: function(){
    var klass = "card " + this.props.type;
    return(
    <div className={klass}>
      {this.props.text}
    </div>
    );
  }
});

