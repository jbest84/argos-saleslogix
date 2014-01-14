/**
 * @jsx React.DOM
 */
define('React/LoginComponent', [
], function() {
    var LoginComponent = React.createClass({
        displayName: 'LoginComponent',
        render: function() {
            return (
                <div>
                    <input type="text" />
                </div>
            );
        }
    });


    return LoginComponent;
});
