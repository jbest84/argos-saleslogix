import declare from 'dojo/_base/declare';
import string from 'dojo/string';
import List from 'argos/List';

const __class = declare('crm.Views.Views.LeadQualification.CategoryList', [List], {
    // Templates
    itemTemplate: new Simplate([
        '<h3>{%: $.CategoryName %}</h3>',
    ]),

    // Localization
    titleText: 'Qualification Categories',

    // View Properties
    icon: 'content/images/Options_24x24.gif',
    id: 'qualification_category_list',
    queryOrderBy: 'CategoryName',
    querySelect: [
        'CategoryName',
    ],
    resourceKind: 'qualificationCategories',

    formatSearchQuery: function formatSearchQuery(searchQuery) {
      return string.substitute('upper(CategoryName) like "${0}%"', [this.escapeSearchQuery(searchQuery.toUpperCase())]);
    },
  });
export default __class;
