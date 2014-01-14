/**
 * @jsx React.DOM
 */
define('React/LoginComponent', [
], function() {
    var LoginComponent = React.createClass({displayName: 'LoginComponent',
        displayName: 'LoginComponent',
        render: function() {
            return (
                React.DOM.div(null, 
                    React.DOM.input( {type:"text"} )
                )
            );
        }
    });


    return LoginComponent;
});
