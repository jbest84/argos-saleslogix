define('crm/Fields/TextField', [
    'dojo/_base/declare',
    'dojo/_base/lang',
    'argos/Fields/EditorField',
    'argos/FieldManager'
], function(
    declare,
    lang,
    EditorField,
    FieldManager
) {
    var ctor = Polymer({
        is: 'text-field',
        properties: {
            label: {
                type: String
            },
            fieldName: {
                type: String
            }
        },
        ready: function() {
            console.log('ready');
            console.dir(this);
        },
        created: function () {
            console.log(this.localName + '#' + this.id + ' was created');
        },

        attached: function () {
            console.log(this.localName + '#' + this.id + ' was attached');
        },

        detached: function () {
            console.log(this.localName + '#' + this.id + ' was detached');
        },

        attributeChanged: function (name, type) {
            console.log(this.localName + '#' + this.id + ' attribute ' + name +
                ' was changed to ' + this.getAttribute(name));
        }
    });

    return FieldManager.register('text-field', ctor);
});