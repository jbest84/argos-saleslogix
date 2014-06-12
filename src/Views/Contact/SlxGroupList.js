/*
 * Copyright (c) 1997-2014, SalesLogix, NA., LLC. All rights reserved.
 */

/**
 * @class Mobile.SalesLogix.Views.Contact.SlxGroupList
 *
 * @extends Sage.Platform.Mobile.List
 * @requires Sage.Platform.Mobile.List
 * @requires Sage.Platform.Mobile.Format
 * @requires Sage.Platform.Mobile.Utility
 * @requires Sage.Platform.Mobile.Convert

 *
 */
define('Mobile/SalesLogix/Views/Contact/SlxGroupList', [
    'dojo/_base/declare',
    'dojo/_base/array',
    'dojo/string',
    'Mobile/SalesLogix/Action',
    'Sage/Platform/Mobile/Format',
    'Sage/Platform/Mobile/Utility',
    'Sage/Platform/Mobile/Convert',
    'Mobile/SalesLogix/Views/_SlxGroupListBase'
], function(
    declare,
    array,
    string,
    action,
    format,
    utility,
    Convert,
    SlxGroupListBase

) {

    return declare('Mobile.SalesLogix.Views.Contact.SlxGroupList', [SlxGroupListBase], {
        //Templates
        
        //Localization
        titleText: 'Contact - groups',
        
        //View Properties
        entityName: 'Contact',
        resourceKind: 'contacts',
        icon: 'content/images/icons/Contacts_24x24.png',
        id: 'contact_slx_group_list',
        security: 'Entities/Contact/View',
        detailView: 'contact_detail',
        insertView: 'contact_edit',
        insertSecurity: 'Entities/Contact/Add'
    });
});

