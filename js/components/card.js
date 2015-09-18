import React from 'react';

module.exports = React.createClass({
  render: function(){
    var klass = "card " + this.props.type;
    var type = "";
    
    if(this.props.sorted) {
      type = <footer>({this.props.type})</footer>;
    }
    
    return(
    <div className={klass}>
      <p>{this.props.text}</p>
      {type}
    </div>
    );
  }
});

