/**
 * @jsx React.DOM
 */
define('Components/LoginComponent', [
    'React'
], function(React) {
    var LabelComponent = React.createClass({
        render: function() {
            return (
                <label>{this.props.text}</label>
            );
        }
    });

    var LoginComponent = React.createClass({
        render: function() {
            return (
                <div>
                    <LabelComponent text="Login"/>  
                    <input type="text" />
                </div>
            );
        }
    });


    return LoginComponent;
});
