/*
 * Copyright (c) 1997-2013, SalesLogix, NA., LLC. All rights reserved.
 * @jsx React.DOM
 */

/**
 * @class crm.Views.Login
 *
 *
 * @extends argos.Edit
 *
 */
define('crm/Views/Login', [
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/dom-class',
    'argos/Edit'
    //'Components/LoginComponent'
], function(
    declare,
    lang,
    domClass,
    Edit
    //LoginComponent
) {

    var __class = declare('crm.Views.Login', [Edit], {
        //Templates
        widgetTemplate: new Simplate([
            '<div id="{%= $.id %}" title="{%: $.titleText %}" class="panel {%= $.cls %}" hideBackButton="true">',
            '<p class="logo"><img src="content/images/logo-64.png" /><span>{%: $.logoText %}<span></p>',
            '<div class="panel-content" data-dojo-attach-event="onkeypress: _onKeyPress, onkeyup: _onKeyUp" data-dojo-attach-point="contentNode"></div>',
            '<button class="button actionButton" data-action="authenticate"><span class="indicator fa fa-spinner fa-spin"></span><span>{%: $.logOnText %}</span></button>',
            '<span class="copyright">{%= $.copyrightText %}</span>',
            '<span class="copyright">{%= App.getVersionInfo() %}</span>',
            '<div data-dojo-attach-point="componentNode" class="panel-content"></div>',
            '</div>'
        ]),

        //Localization
        id: 'login',
        busy: false,
        copyrightText: 'Copyright &copy; 2015 Infor. All rights reserved. www.infor.com',
        logOnText: 'Sign in',
        passText: 'Password',
        rememberText: 'Remember me',
        titleText: 'Sign in',
        userText: 'User ID',
        invalidUserText: 'The user name or password is invalid.',
        missingUserText: 'The user record was not found.',
        requestAbortedText: 'The request was aborted.',
        logoText: 'Infor CRM',

        ENTER_KEY: 13,

        _onKeyPress: function(evt) {
            if (evt.charOrCode === this.ENTER_KEY) {
                this.authenticate();
            }
        },
        _onKeyUp: function() {
            var username = this.fields.username.getValue();
            if (username && username.length > 0) {
                domClass.add(this.domNode, 'login-active');
            } else {
                domClass.remove(this.domNode, 'login-active');
            }
        },
        onShow: function() {
            var credentials;
            credentials = App.getCredentials();
            if (credentials) {
                App.authenticateUser(credentials, {
                    success: function() {
                        App.initAppState().then(function() {
                            App.navigateToInitialView();
                        });
                    },
                    scope: this
                });
            }
        },
        show: function() {
            var layout, components:React.ComponentClass<any>[], container:React.ComponentClass<any>;

            this.inherited(arguments);
            layout = this.createLayout();
            components = [];
            layout.forEach(function(item) {
                if (item.component) {
                    components.push(item.component);
                }
            });

            container = React.createClass({
                displayName: 'container',
                componentDidMount: function() {
                    console.log('Child count: ');
                    console.log(React.Children.count(this.props.children));
                    console.dir(this.props.children);
                },
                render: function() {
                    // Port back the idea of $ and $$ from Simplate?
                    let index = 0;
                    return React.DOM.fieldset({ 'data-id': this.props.$$.id, ref: 'fields' }, React.Children.map<React.ReactElement<any>>(this.props.children, (child:React.ReactElement<any>) => {
                        return child;
                    }));
                }
            });

            let children = components.map((c) => React.createElement(c, null));
            crm.comp = React.render(React.createElement(container, {$: null, $$: this}, children), this.componentNode);
        },
        createToolLayout: function() {
            return this.tools || (this.tools = {
                bbar: false,
                tbar: false
            });
        },
        getContext: function() {
            return {id: this.id};
        },
        createLayout: function() {
            var userText, passText;

            userText = this.userText;
            passText = this.passText;
            return this.layout || (this.layout = [
                {
                    name: 'username',
                    type: 'text_component',
                    placeHolderText: this.userText,
                    component: React.createClass({
                        displayName: 'text',
                        componentWillMount: function() {
                            // Fires before render, can setState here
                            console.log('componentWillMount');
                        },
                        componentDidMount: function() {
                            // Fires after render
                            console.log('componentDidMount');
                            crm.username = this;
                        },
                        componentDidUpdate: function() {
                            console.log('componentDidUpdate');
                        },
                        getInitialState: function() {
                            console.log('getInitialState');
                            return {key: ''};
                        },
                        getDefaultProps: function() {
                        },
                        shouldComponentUpdate: function(nextProps, nextState) {
                            console.log('shouldComponentUpdate');
                            if (this.state.key === nextState.key) {
                                return false;
                            } else {
                                return true;
                            }
                        },
                        handleFocus: function() {
                            this.setState({key: 'value'}, function() {
                                this.refs.input.getDOMNode().value = this.state.key;
                            }.bind(this));
                        },
                        render: function() {
                            console.log('render');
                            var {div, input} = React.DOM;
                            return (
                                div({'className': 'row row-edit'},
                                              input({
                                                  'type': 'text',
                                                  'name': 'username',
                                                  'className': 'text-input',
                                                  'placeholder': userText,
                                                  'ref': 'input',
                                                  'onFocus': this.handleFocus,
                                                  'value': this.state.key
                                              })
                                             )
                            );
                        }
                    })
                },
                {
                    name: 'password',
                    placeHolderText: this.passText,
                    type: 'text',
                    inputType: 'password',
                    component: React.createClass({
                        displayName: 'password',
                        render: function() {
                            var {div, input} = React.DOM;
                            return (
                                div({'className': 'row row-edit'},
                                              input({'type': 'password', name: 'password', 'className': 'text-input', 'placeholder': passText})
                                             )
                            );
                        }
                    })
                },
                {
                    name: 'remember',
                    label: this.rememberText,
                    type: 'boolean'
                }
            ]);
        },
        authenticate: function() {
            if (this.busy) {
                return;
            }

            var credentials = this.getValues(),
                username = credentials && credentials.username;

            if (username) {
                this.validateCredentials(credentials);
            }
        },
        createErrorHandlers: function() {
            this.errorText.status[this.HTTP_STATUS.FORBIDDEN] = this.invalidUserText;

            this.errorHandlers = [{
                name: 'NoResponse',
                test: function(error) {
                    return !error.xhr;
                },
                handle: function(error, next) {
                    alert(this.missingUserText);
                    next();
                }
            }, {
                name: 'GeneralError',
                test: function(error) {
                    return typeof error.xhr !== 'undefined' && error.xhr !== null;
                },
                handle: function(error, next) {
                    alert(this.getErrorMessage(error));
                    next();
                }
            }];

            return this.errorHandlers;
        },
        validateCredentials: function(credentials) {
            this.disable();

            App.authenticateUser(credentials, {
                success: function success() {
                    this.enable();

                    var attr = this.domNode.attributes.getNamedItem('selected');
                    if (attr) {
                        attr.value = 'false';
                    }

                    App.setPrimaryTitle(App.loadingText);
                    App.initAppState().then(function() {
                        App.navigateToInitialView();
                    });
                },
                failure: function(result) {
                    var error;

                    this.enable();

                    error = new Error();
                    error.status = result && result.response && result.response.status;
                    error.xhr = result && result.response;
                    this.handleError(error);
                },
                aborted: function() {
                    this.enable();

                    alert(this.requestAbortedText);
                },
                scope: this
            });
        }
    });

    lang.setObject('Mobile.SalesLogix.Views.Login', __class);
    return __class;
});

