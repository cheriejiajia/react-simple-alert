var React = require('react');
var style = require('./style');

var Header = React.createClass({displayName: "Header",

	render: function() {
		return (
			React.createElement("div", {className: "rsa-header", style: style.header}, 
				React.createElement("span", {className: "rsa-title", style: style.title}, this.props.title || "Alert"), 
				React.createElement("div", {className: "rsa-close close", style: style.close, onClick: this.props.close}, React.createElement("span", null, "×"))
			)
		);
	}

});

module.exports = Header;