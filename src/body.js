var React = require('react');
var style = require('./style');

var Body = React.createClass({

	render: function() {
		return (
			<div className="rsa-body" style={style.body}>{this.props.message}</div>
		);
	}

});

module.exports = Body;