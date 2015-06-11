var React = require('react');
var style = require('./style');

var Footer = React.createClass({

	render: function() {
		var buttons = null;
		var cfm = this.props.confirmButton;

		if(!cfm) {
			buttons = (<div className="rsa-ok btn btn-default" onClick={this.props.close} style={style.btnClose}>Close</div>);
		} else {
			buttons = (
				<div>
					<div className="rsa-confirm btn btn-primary" onClick={this._onConfirm} style={style.confirm}>{cfm.text || "OK"}</div>
					<div className="rsa-cancel btn btn-default" onClick={this.props.close} style={style.cancel}>Cancel</div>
				</div>
			);
		}

		return (
			<div className="rsa-footer" style={style.footer}>
				{buttons}
			</div>
		);
	},

	_onConfirm: function() {
		this.props.confirmButton.action();
		this.props.close();
	}

});

module.exports = Footer;