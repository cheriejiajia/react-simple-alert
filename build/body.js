var React = require('react');
var style = require('./style');

var Body = React.createClass({displayName: "Body",

	render: function() {
		return (
			React.createElement("div", {className: "rsa-body", style: style.body}, this.props.message)
		);
	}

});

module.exports = Body;