# react-simple-alert
A simple alert component for React

##How to use:

"options" props is required.
Set options for the component:
- title: The text displayed as title in the header.
- message: The text displayed as main content in the body.
- alert: Indicates if the alert is displayed or not.
- confirmButton (optional): Define the button with functionality in the footer. If this is defined, a "Cancel" button will be added automatically. If not, a default "Close" button will be displayed instead.

```js
var React = require('react');
var ReactSimpleAlert = require('react-simple-alert');

var App = React.createClass({
	getInitialState: function() {
		return {
			alert: false 
		};
	},
	render: function() {
		var rsaOptions = {
			title: "Alert title",
			message: "This is an alert!",
			alert: this.state.alert,
			confirmButton: {
				text: "Save", 
				action: function(){
					//Click action for the "Save" button
				}
			}
		};
		return (
			<div>
				<button onClick={this._alert}>alert</button>
				<ReactSimpleAlert options={rsaOptions} />
			</div>
		);
	},

	_alert: function(){
		this.setState({alert: true});
	}
});
```
