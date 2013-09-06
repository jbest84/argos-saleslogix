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


define('Mobile/SalesLogix/Views/Activity/RelatedViewWidget', [
    'dojo/_base/declare',
    'dojo/string',
    'Mobile/SalesLogix/Format',
    'Sage/Platform/Mobile/Convert',
    'Sage/Platform/Mobile/RelatedViewWidget'
], function(
    declare,
    string,
    format,
    convert,
    RelatedViewWidget
) {
    return declare('Mobile.SalesLogix.Views.Activity.RelatedViewWidget', [RelatedViewWidget], {
        
        id: 'relatedActivites',
        icon: 'content/images/icons/ContactProfile_48x48.png',
        title: 'Activites',
        detailViewId: 'activity_detail',
        listViewId: 'activity_related',
        listViewWhere: null,
        enabled: true,
        resourceKind: 'activities',
        contractName: 'system',
        select: ['Type','StartDate','Timeless', 'UserName', 'Description', 'Notes'],
        where:null ,
        sort: 'StartDate desc',
        numberOfItems: 3,
        relatedItemTemplate: new Simplate([
            '<h4>',
                '<strong>{%! $$.activityTimeTemplate %}</strong>',
            '</h4>',
            '<h4>',
                '<span>{%: $$.activityTypeText[$.Type] + " : "  %} </span>',
                '<span class="p-description">{%: $.Description %}</span>',
            '</h4>',
            '<div class="note-text-item">',
                    '<div class="note-text-wrap">',
                       '{%: $.Notes %}',
                     '</div>',
            '</div>'
        ]),
        activityTimeTemplate: new Simplate([
            '{%: Mobile.SalesLogix.Format.relativeDate($.StartDate, Sage.Platform.Mobile.Convert.toBoolean($.Timeless)) %}'
        ]),
        'this-week': function() {
            var now, weekStartDate, weekEndDate, query;

            now = moment();

            weekStartDate = now.clone().startOf('week');
            weekEndDate = weekStartDate.clone().endOf('week');

            query = string.substitute(
                    '((Timeless eq false and StartDate between @${0}@ and @${1}@) or (Timeless eq true and StartDate between @${2}@ and @${3}@))',
                    [
                    convert.toIsoStringFromDate(weekStartDate.toDate()),
                    convert.toIsoStringFromDate(weekEndDate.toDate()),
                    weekStartDate.format('YYYY-MM-DDT00:00:00[Z]'),
                    weekEndDate.format('YYYY-MM-DDT23:59:59[Z]')
                    ]
            );
            return query;
        },
        'today': function() {
            var now, todayStart, todayEnd, query;

            now = moment();

            todayStart = now.clone().startOf('day');
            todayEnd = todayStart.clone().endOf('day');

            query = string.substitute(
                    '((Timeless eq false and StartDate between @${0}@ and @${1}@) or (Timeless eq true and StartDate between @${2}@ and @${3}@))',
                    [
                    convert.toIsoStringFromDate(todayStart.toDate()),
                    convert.toIsoStringFromDate(todayEnd.toDate()),
                    todayStart.format('YYYY-MM-DDT00:00:00[Z]'),
                    todayEnd.format('YYYY-MM-DDT23:59:59[Z]')
                    ]
            );
            return query;
        },
        activityTypeText: {
            'atToDo': 'To-Do',
            'atPhoneCall': 'Phone Call',
            'atAppointment': 'Meeting',
            'atLiterature': 'Lit Request',
            'atPersonal': 'Personal',
            'atQuestion': 'Question',
            'atNote': 'Note',
            'atEMail': 'Email'
        },

    });
});
