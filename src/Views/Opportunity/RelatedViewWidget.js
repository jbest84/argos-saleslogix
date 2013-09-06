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


define('Mobile/SalesLogix/Views/Opportunity/RelatedViewWidget', [
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
    return declare('Mobile.SalesLogix.Views.Opportunity.RelatedViewWidget', [RelatedViewWidget], {
        actualCloseText: 'Closed ',
        estimatedCloseText: 'Estimated close ',
        id: 'relatedOpportunites',
        icon: 'content/images/icons/Opportunity_24.png',
        title: 'Oppotunities',
        detailViewId: 'opportunity_detail',
        listViewId: 'opportunity_list',
        listViewWhere: function(entry) { return "Account.Id eq '" + entry.$key + "'"; },
        enabled: true,
        resourceKind: 'opportunities',
        selectProperties: ['ModifyDate', 'SalesPotential', 'Status', 'Stage', 'ExchangeRate', 'ExchangeRateCode','ActualClose','EstimatedClose'],
        where: function(entry) { return "Account.Id eq '" + entry.$key + "'"; },
        sort: 'ModifyDate desc',
        numberOfItems: 3,
        relatedItemTemplate: new Simplate([
            '<h4><strong>{%: $$.formatDate($) %}</strong></h4>',
            '<h4>{%: $.$descriptor %}</h4>',
                 '<h4>{%: $.Status %}</h4>',
                 '<h4>{%: $.Stage %}</h4>',
                 '{% if ($.SalesPotential) { %}',
                    '<h4><strong>',
                    '{% if (App.hasMultiCurrency()) { %}',
                        '{%: Mobile.SalesLogix.Format.multiCurrency($.SalesPotential * $.ExchangeRate, $.ExchangeRateCode) %}',
                    '{% } else { %}',
                        '{%: Mobile.SalesLogix.Format.multiCurrency($.SalesPotential, App.getBaseExchangeRate().code) %}',
                   '{% } %}',
                   '</strong></h4>',
                '{% } %}'
        ]),
        formatDate: function(entry) {
            if (entry.Status === 'Open' && entry.EstimatedClose) {
                return this.estimatedCloseText + format.relativeDate(entry.EstimatedClose);
            } else if (entry.ActualClose) {
                return this.actualCloseText + format.relativeDate(entry.ActualClose);
            }

            return '';
        },
    });
});
