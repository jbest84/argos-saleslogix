define('crm/Utility', ['exports', 'module', 'dojo/_base/lang', 'argos/Utility'], function (exports, module, _dojo_baseLang, _argosUtility) {
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _lang = _interopRequireDefault(_dojo_baseLang);

  var _Utility = _interopRequireDefault(_argosUtility);

  /**
   * @class crm.Utility
   *
   * Utility provides functions that are more javascript enhancers than application related code. Mixes in argos.Utility.
   *
   * @requires argos.Utility
   * @singleton
   *
   */
  var __class = _lang['default'].setObject('crm.Utility', _lang['default'].mixin({}, _Utility['default'], {
    base64ArrayBuffer: function base64ArrayBuffer(arrayBuffer) {
      var base64 = '';
      var chunk = undefined;
      var a = undefined;
      var b = undefined;
      var c = undefined;
      var d = undefined;
      var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
      var bytes = new Uint8Array(arrayBuffer);
      var byteLength = bytes.byteLength;
      var byteRemainder = byteLength % 3;
      var mainLength = byteLength - byteRemainder;

      // Main loop deals with bytes in chunks of 3
      for (var i = 0; i < mainLength; i = i + 3) {
        // Combine the three bytes into a single integer
        chunk = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2];

        // Use bitmasks to extract 6-bit segments from the triplet
        a = (chunk & 16515072) >> 18; // 16515072 = (2^6 - 1) << 18
        b = (chunk & 258048) >> 12; // 258048   = (2^6 - 1) << 12
        c = (chunk & 4032) >> 6; // 4032     = (2^6 - 1) << 6
        d = chunk & 63; // 63       = 2^6 - 1

        // Convert the raw binary segments to the appropriate ASCII encoding
        base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
      }

      // Deal with the remaining bytes and padding
      if (byteRemainder === 1) {
        chunk = bytes[mainLength];

        a = (chunk & 252) >> 2; // 252 = (2^6 - 1) << 2

        // Set the 4 least significant bits to zero
        b = (chunk & 3) << 4; // 3   = 2^2 - 1

        base64 += encodings[a] + encodings[b] + '==';
      } else if (byteRemainder === 2) {
        chunk = bytes[mainLength] << 8 | bytes[mainLength + 1];

        a = (chunk & 64512) >> 10; // 64512 = (2^6 - 1) << 10
        b = (chunk & 1008) >> 4; // 1008  = (2^6 - 1) << 4

        // Set the 2 least significant bits to zero
        c = (chunk & 15) << 2; // 15    = 2^4 - 1

        base64 += encodings[a] + encodings[b] + encodings[c] + '=';
      }

      return base64;
    },

    /** Gets the extension for a file.
     * @param {String} fileName
     * The file name including the extension
     * @returns {String}
     * Returns the file extension, if fileName is null or undefined, returns the string '.'
     */
    getFileExtension: function getFileExtension(fileName) {
      if (!fileName) {
        return '.';
      }
      return fileName.substr(fileName.lastIndexOf('.'));
    },
    /** Parses the activity ID
     * @param {String} activityId
     * A string with the activity id seperated by a semi-colon
     * @returns {String}
     */
    getRealActivityId: function getRealActivityId(activityId) {
      var id = activityId;
      if (activityId) {
        if (activityId.indexOf(';') > 0) {
          id = activityId.substring(0, 12);
        } else {
          id = activityId;
        }
      }
      return id;
    }
  }));

  _lang['default'].setObject('Mobile.SalesLogix.Utility', __class);
  module.exports = __class;
});
