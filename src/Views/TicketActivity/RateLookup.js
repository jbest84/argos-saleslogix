import declare from 'dojo/_base/declare';
import lang from 'dojo/_base/lang';
import string from 'dojo/string';
import List from 'argos/List';

/**
 * @class crm.Views.TicketActivity.RateLookup
 *
 * @extends argos.List
 */
var __class = declare('crm.Views.TicketActivity.RateLookup', [List], {
  //Templates
  itemTemplate: new Simplate([
    '<h3>{%: $.RateTypeCode %} - {%: $.Amount %}</h3>',
    '<h4>{%: $.TypeDescription %}</h4>'
  ]),

  //Localization
  titleText: 'Rates',

  //View Properties
  id: 'ticketactivity_ratelookup',
  expose: false,
  queryOrderBy: 'Amount asc',
  querySelect: [
    'Amount',
    'RateTypeCode',
    'TypeDescription'
  ],
  resourceKind: 'ticketActivityRates',

  formatSearchQuery: function(searchQuery) {
    return string.substitute('upper(RateTypeCode) like "%${0}%"', [this.escapeSearchQuery(searchQuery.toUpperCase())]);
  }
});

lang.setObject('Mobile.SalesLogix.Views.TicketActivity.RateLookup', __class);
export default __class;
