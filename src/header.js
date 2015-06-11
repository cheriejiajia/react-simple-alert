var React = require('react');
var style = require('./style');

var Header = React.createClass({

	render: function() {
		return (
			<div className="rsa-header" style={style.header}>
				<span className="rsa-title" style={style.title}>{this.props.title || "Alert"}</span>
				<div className="rsa-close close" style={style.close} onClick={this.props.close} ><span>&times;</span></div>
			</div>
		);
	}

});

module.exports = Header;