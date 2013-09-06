/* Copyright (c) 2010, Sage Software, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


define('Mobile/SalesLogix/Views/Account/ContactRelatedViewWidget', [
    'dojo/_base/declare',
    'Mobile/SalesLogix/Format',
    'Sage/Platform/Mobile/Convert',
    'Sage/Platform/Mobile/RelatedViewWidget'
], function(
    declare,
    format,
    convert,
    RelatedViewWidget
) {
    return declare('Mobile.SalesLogix.Views.Account.ContactRelatedViewWidget', [RelatedViewWidget], {
        
        id: 'relatedContacts',
        icon: 'content/images/icons/ContactProfile_48x48.png',
        title: 'Contacts',
        detailViewId: 'contact_detail',
        listViewId: 'contact_list',
        parentCollection: true,
        parentCollectionProperty: 'Contacts',
        relatedItemTemplate: new Simplate([
            '<h4>{%: $.NameLF %} ({%: $.Email %})</h4>'
        ])
    });
});
