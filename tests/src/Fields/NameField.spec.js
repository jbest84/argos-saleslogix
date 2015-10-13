/* eslint-disable */
define('spec/Fields/NameField.spec', [
  'Mobile/SalesLogix/Fields/NameField'
], function(NameField) {
  return describe('Mobile/SalesLogix/Fields/NameField', function() {
    it('can set text', function() {
      var field = new NameField();
      field.setText('test');
      expect(field.inputNode.value)
        .toEqual('test');
    });
  });
});
