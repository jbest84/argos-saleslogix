/**
 * @jsx React.DOM
 */
define('Components/LoginComponent', [
    'React'
], function(React) {
    var LabelComponent = React.createClass({displayName: 'LabelComponent',
        render: function() {
            return (
                React.DOM.label(null, this.props.text)
            );
        }
    });

    var LoginComponent = React.createClass({displayName: 'LoginComponent',
        render: function() {
            return (
                React.DOM.div(null, 
                    LabelComponent( {text:"Login"}),  
                    React.DOM.input( {type:"text"} )
                )
            );
        }
    });


    return LoginComponent;
});
