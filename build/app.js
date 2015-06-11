var React = require('react');
var Header = require('./header');
var Body = require('./body');
var Footer = require('./footer');
var style = require('./style');

var ReactSimpleAlert = React.createClass({displayName: "ReactSimpleAlert",

  propTypes: {
    options: React.PropTypes.object.isRequired
  },
  
	getInitialState: function() {
		return {
			alert: false
		};
	},

	componentWillReceiveProps: function(nextProps) {
		this.setState({alert: nextProps.options.alert});
	},

	render: function() {
		var alert = null;
		var bgStyle = style.hide;
		var options = this.props.options;
		if(this.state.alert) {
			alert = (
				React.createElement("div", {className: "rsa-alert", style: style.alert}, 
					React.createElement(Header, {title: options.title, close: this._close}), 
					React.createElement(Body, {message: options.message}), 
					React.createElement(Footer, {confirmButton: options.confirmButton, close: this._close})
				)
			);
			bgStyle = style.bg;
		}
		return (
			React.createElement("div", {className: "rsa rsa-bg", style: bgStyle}, 
				alert
			)
		);
	},

	_close: function(){
		this.setState({alert: false});
	}

});

module.exports = ReactSimpleAlert;

