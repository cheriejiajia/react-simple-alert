var React = require('react');
var style = require('./style');

var Footer = React.createClass({displayName: "Footer",

	render: function() {
		var buttons = null;
		var cfm = this.props.confirmButton;

		if(!cfm) {
			buttons = (React.createElement("div", {className: "rsa-ok btn btn-default", onClick: this.props.close, style: style.btnClose}, "Close"));
		} else {
			buttons = (
				React.createElement("div", null, 
					React.createElement("div", {className: "rsa-confirm btn btn-primary", onClick: this._onConfirm, style: style.confirm}, cfm.text || "OK"), 
					React.createElement("div", {className: "rsa-cancel btn btn-default", onClick: this.props.close, style: style.cancel}, "Cancel")
				)
			);
		}

		return (
			React.createElement("div", {className: "rsa-footer", style: style.footer}, 
				buttons
			)
		);
	},

	_onConfirm: function() {
		this.props.confirmButton.action();
		this.props.close();
	}

});

module.exports = Footer;