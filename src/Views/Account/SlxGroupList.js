/*
 * Copyright (c) 1997-2014, SalesLogix, NA., LLC. All rights reserved.
 */

/**
 * @class Mobile.SalesLogix.Views.Account.SlxGroupList
 *
 * @extends Sage.Platform.Mobile.List
 * @requires Sage.Platform.Mobile.List
 * @requires Sage.Platform.Mobile.Format
 * @requires Sage.Platform.Mobile.Utility
 * @requires Sage.Platform.Mobile.Convert

 *
 */
define('Mobile/SalesLogix/Views/Account/SlxGroupList', [
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

    return declare('Mobile.SalesLogix.Views.Account.SlxGroupList', [SlxGroupListBase], {
        //Templates
        itemTemplate: new Simplate([
            
        ]),

        //Localization
        titleText: 'Accounts',
        
        //View Properties
        entityName: 'Account',
        detailView: 'account_detail',
        icon: 'content/images/icons/Company_24.png',
        id: 'account_slx_group_list',
        security: 'Entities/Account/View',
        insertView: 'account_edit',
        insertSecurity: 'Entities/Account/Add',
        //resourceKind: 'accounts',
        
    });
});

