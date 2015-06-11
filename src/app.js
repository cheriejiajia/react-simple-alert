var React = require('react');
var Header = require('./header');
var Body = require('./body');
var Footer = require('./footer');
var style = require('./style');

var ReactSimpleAlert = React.createClass({

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
				<div className="rsa-alert" style={style.alert}>
					<Header title={options.title} close={this._close} />
					<Body message={options.message} />
					<Footer confirmButton={options.confirmButton} close={this._close} />
				</div>
			);
			bgStyle = style.bg;
		}
		return (
			<div className="rsa rsa-bg" style={bgStyle}>
				{alert}
			</div>
		);
	},

	_close: function(){
		this.setState({alert: false});
	}

});

module.exports = ReactSimpleAlert;

