define('localization/saleslogix/fa-ke', ['localization/fa-ke', 'Mobile/SalesLogix/ApplicationModule'], function() {

localize("Sage.Platform.Mobile.Calendar", {
  "timeFormatText": "h:mm A",
  "titleText": "__Calendar__",
  "amText": "__AM__",
  "pmText": "__PM__"
});

localize("Sage.Platform.Mobile.Fields.DateField", {
  "dateFormatText": "MM/DD/YYYY",
  "emptyText": "",
  "invalidDateFormatErrorText": "__Field '${0}' has Invalid date format.__"
});

localize("Sage.Platform.Mobile.Format", {
  "shortDateFormatText": "M/D/YYYY",
  "percentFormatText": "${0}${1}",
  "yesText": "__Yes__",
  "noText": "__No__",
  "trueText": "__T__",
  "falseText": "__F__",
  "hoursText": "__hours__",
  "hourText": "__hour__",
  "minutesText": "__minutes__",
  "minuteText": "__minute__",
  "bytesText": "__bytes__"
});

localize("Mobile.SalesLogix.Views.Activity.Complete", {
  "completedFormatText": "M/D/YYYY h:mm A",
  "startingFormatText": "M/D/YYYY h:mm A",
  "activityInfoText": "__Activity Info__",
  "accountText": "__account__",
  "contactText": "__contact__",
  "opportunityText": "__opportunity__",
  "ticketNumberText": "__ticket__",
  "companyText": "__company__",
  "leadText": "__lead__",
  "asScheduledText": "__as scheduled__",
  "categoryText": "__category__",
  "categoryTitleText": "__Activity Category__",
  "completedText": "__completed date__",
  "completionText": "__Completion__",
  "durationText": "__duration__",
  "durationInvalidText": "__The field '${2}' must have a value.__",
  "carryOverNotesText": "__carry over notes__",
  "followUpText": "__follow-up__",
  "followUpTitleText": "__Follow-up type__",
  "leaderText": "__leader__",
  "longNotesText": "__notes__",
  "longNotesTitleText": "__Notes__",
  "otherInfoText": "__Other Info__",
  "priorityText": "__priority__",
  "priorityTitleText": "__Priority__",
  "regardingText": "__regarding__",
  "regardingTitleText": "__Activity Regarding__",
  "resultText": "__result__",
  "resultTitleText": "__Result__",
  "startingText": "__start date__",
  "startingFormatTimelessText": "__M/D/YYYY__",
  "timelessText": "__timeless__",
  "durationValueText": {
    "0": "__none__",
    "15": "__15 minutes__",
    "30": "__30 minutes__",
    "60": "__1 hour__",
    "90": "__1.5 hours__",
    "120": "__2 hours__"
  },
  "followupValueText": {
    "none": "__None__",
    "atPhoneCall": "__Phone Call__",
    "atAppointment": "__Meeting__",
    "atToDo": "__To-Do__",
    "atPersonal": "__Personal Activity__"
  }
});

localize("Mobile.SalesLogix.Views.Activity.Detail", {
  "startDateFormatText": "M/D/YYYY h:mm:ss A",
  "timelessDateFormatText": "M/D/YYYY",
  "alarmDateFormatText": "M/D/YYYY h:mm:ss A",
  "activityTypeText": {
    "atToDo": "__To-Do__",
    "atPhoneCall": "__Phone Call__",
    "atAppointment": "__Meeting__",
    "atLiterature": "__Literature Request__",
    "atPersonal": "__Personal Activity__"
  },
  "actionsText": "__Quick Actions__",
  "completeActivityText": "__Complete Activity__",
  "completeOccurrenceText": "__Complete Occurrence__",
  "completeSeriesText": "__Complete Series__",
  "locationText": "__location__",
  "alarmText": "__alarm__",
  "alarmTimeText": "__alarm__",
  "categoryText": "__category__",
  "durationText": "__duration__",
  "leaderText": "__leader__",
  "longNotesText": "__notes__",
  "priorityText": "__priority__",
  "regardingText": "__regarding__",
  "rolloverText": "__auto rollover__",
  "startTimeText": "__start time__",
  "allDayText": "__all day__",
  "timelessText": "__timeless__",
  "titleText": "__Activity__",
  "typeText": "__type__",
  "companyText": "__company__",
  "leadText": "__lead__",
  "accountText": "__account__",
  "contactText": "__contact__",
  "opportunityText": "__opportunity__",
  "ticketNumberText": "__ticket__",
  "whenText": "__When__",
  "whoText": "__Who__",
  "recurrenceText": "__recurrence__",
  "confirmEditRecurrenceText": "__Edit all Occurrences?\\nCancel to edit single Occurrence.__",
  "relatedAttachmentText": "__Attachments__",
  "relatedAttachmentTitleText": "__Activity Attachments__",
  "relatedItemsText": "__Related Items__",
  "phoneText": "__phone__"
});

localize("Mobile.SalesLogix.Views.Activity.Edit", {
  "startingFormatText": "M/D/YYYY h:mm A",
  "activityCategoryTitleText": "__Activity Category__",
  "activityDescriptionTitleText": "__Activity Description__",
  "locationText": "__location__",
  "activityTypeTitleText": "__Activity Type__",
  "alarmText": "__alarm__",
  "reminderText": "",
  "categoryText": "__category__",
  "durationText": "__duration__",
  "durationTitleText": "__Duration__",
  "durationInvalidText": "__The field '${2}' must have a value.__",
  "reminderInvalidText": "__The field 'reminder' must have a value.__",
  "reminderTitleText": "__Reminder__",
  "leaderText": "__leader__",
  "longNotesText": "__notes__",
  "longNotesTitleText": "__Notes__",
  "priorityText": "__priority__",
  "priorityTitleText": "__Priority__",
  "regardingText": "__regarding__",
  "rolloverText": "__auto rollover__",
  "startingText": "__start time__",
  "startingFormatTimelessText": "__M/D/YYYY__",
  "repeatsText": "__repeats__",
  "recurringText": "__recurring__",
  "recurringTitleText": "__Recurring__",
  "timelessText": "__timeless__",
  "titleText": "__Activity__",
  "typeText": "__type__",
  "accountText": "__account__",
  "contactText": "__contact__",
  "opportunityText": "__opportunity__",
  "ticketNumberText": "__ticket__",
  "companyText": "__company__",
  "leadText": "__lead__",
  "isLeadText": "__for lead__",
  "yesText": "__YES__",
  "noText": "__NO__",
  "phoneText": "__phone__",
  "updateUserActErrorText": "__An error occured updating user activities.__",
  "reminderValueText": {
    "0": "__none__",
    "5": "__5 minutes__",
    "15": "__15 minutes__",
    "30": "__30 minutes__",
    "60": "__1 hour__",
    "1440": "__1 day__"
  },
  "durationValueText": {
    "0": "__none__",
    "15": "__15 minutes__",
    "30": "__30 minutes__",
    "60": "__1 hour__",
    "90": "__1.5 hours__",
    "120": "__2 hours__"
  }
});

localize("Mobile.SalesLogix.Views.Activity.List", {
  "startDateFormatText": "ddd M/D/YYYY",
  "startTimeFormatText": "h:mm",
  "allDayText": "__All-Day__",
  "completeActivityText": "__Complete__",
  "callText": "__Call__",
  "calledText": "__Called__",
  "addAttachmentActionText": "__Add Attachment__",
  "activityTypeText": {
    "atToDo": "__To-Do__",
    "atPhoneCall": "__Phone Call__",
    "atAppointment": "__Meeting__",
    "atLiterature": "__Lit Request__",
    "atPersonal": "__Personal__",
    "atQuestion": "__Question__",
    "atNote": "__Note__",
    "atEMail": "__Email__"
  },
  "titleText": "__Activities__",
  "hashTagQueriesText": {
    "alarm": "__alarm__",
    "recurring": "__recurring__",
    "timeless": "__timeless__",
    "today": "__today__",
    "this-week": "__this-week__",
    "yesterday": "__yesterday__"
  }
});

localize("Mobile.SalesLogix.Views.Attachment.AddAttachment", {
  "attachmentDateFormatText": "ddd M/d/yy h:mm:tt",
  "titleText": "__Add Attachments__"
});

localize("Mobile.SalesLogix.Views.Attachment.List", {
  "attachmentDateFormatText": "ddd M/D/YYYY hh:mm:ss",
  "titleText": "__Attachments__",
  "uploadedOnText": "__Uploaded __",
  "hashTagQueriesText": {
    "url": "__url__",
    "binary": "__binary__"
  }
});

localize("Mobile.SalesLogix.Views.Attachment.ViewAttachment", {
  "attachmentDateFormatText": "ddd M/d/yy h:mm:tt",
  "detailsText": "__Attachment Details__",
  "descriptionText": "__description__",
  "fileNameText": "__file name__",
  "attachDateText": "__attachment date__",
  "fileSizeText": "__file size__",
  "userText": "__user__",
  "attachmentNotSupportedText": "__The attachment type is not supported for viewing.__",
  "downloadingText": "__Downloading attachment ...__"
});

localize("Mobile.SalesLogix.Views.Calendar.DayView", {
  "eventDateFormatText": "M/D/YYYY",
  "dateHeaderFormatText": "dddd, M/D/YYYY",
  "startTimeFormatText": "h:mm",
  "titleText": "__Calendar__",
  "todayText": "__Today__",
  "dayText": "__Day__",
  "weekText": "__Week__",
  "monthText": "__Month__",
  "allDayText": "__All-Day__",
  "eventHeaderText": "__Events__",
  "activityHeaderText": "__Activities__",
  "eventMoreText": "__View ${0} More Event(s)__",
  "toggleCollapseText": "__toggle collapse__"
});

localize("Mobile.SalesLogix.Views.Calendar.MonthView", {
  "monthTitleFormatText": "MMMM YYYY",
  "dayTitleFormatText": "ddd MMM D, YYYY",
  "eventDateFormatText": "M/D/YYYY",
  "startTimeFormatText": "h:mm",
  "titleText": "__Calendar__",
  "todayText": "__Today__",
  "dayText": "__Day__",
  "weekText": "__Week__",
  "monthText": "__Month__",
  "allDayText": "__All-Day__",
  "eventText": "__Event__",
  "eventHeaderText": "__Events__",
  "countMoreText": "__View More__",
  "activityHeaderText": "__Activities__",
  "toggleCollapseText": "__toggle collapse__"
});

localize("Mobile.SalesLogix.Views.Calendar.WeekView", {
  "weekTitleFormatText": "MMM D, YYYY",
  "dayHeaderLeftFormatText": "dddd",
  "dayHeaderRightFormatText": "MMM D, YYYY",
  "eventDateFormatText": "M/D/YYYY",
  "startTimeFormatText": "h:mm",
  "titleText": "__Calendar__",
  "todayText": "__Today__",
  "dayText": "__Day__",
  "weekText": "__Week__",
  "monthText": "__Month__",
  "allDayText": "__All Day__",
  "eventHeaderText": "__Events__",
  "eventMoreText": "__View ${0} More Event(s)__",
  "toggleCollapseText": "__toggle collapse__"
});

localize("Mobile.SalesLogix.Views.ErrorLog.Detail", {
  "errorDateFormatText": "MM/DD/YYYY hh:mm A",
  "titleText": "__Error Log__",
  "detailsText": "__Details__",
  "errorDateText": "__date__",
  "statusTextText": "__error__",
  "urlText": "__url__",
  "moreDetailsText": "__More Details__",
  "severityText": "__severity__",
  "statusCodeText": "__status code__",
  "errorText": "__error__",
  "emailSubjectText": "__Error received in Sage SalesLogix Mobile Client__",
  "copiedSuccessText": "__Copied to clipboard__"
});

localize("Mobile.SalesLogix.Views.ErrorLog.List", {
  "errorDateFormatText": "MM/DD/YYYY hh:mm A",
  "titleText": "__Error Logs__"
});

localize("Mobile.SalesLogix.Views.Event.Detail", {
  "startDateFormatText": "M/D/YYYY h:mm:ss A",
  "endDateFormatText": "M/D/YYYY h:mm:ss A",
  "eventTypeText": {
    "atToDo": "__To-Do__",
    "atPhoneCall": "__Phone Call__",
    "atAppointment": "__Meeting__",
    "atLiterature": "__Literature Request__",
    "atPersonal": "__Personal Activity__"
  },
  "actionsText": "__Quick Actions__",
  "startTimeText": "__start date__",
  "endTimeText": "__end date__",
  "titleText": "__Event__",
  "descriptionText": "__description__",
  "typeText": "__type__",
  "whenText": "__When__"
});

localize("Mobile.SalesLogix.Views.Event.Edit", {
  "startingFormatText": "M/D/YYYY h:mm A",
  "titleText": "__Event__",
  "typeText": "__type__",
  "descriptionText": "__description__",
  "startDateText": "__start date__",
  "endDateText": "__end date__"
});

localize("Mobile.SalesLogix.Views.Event.List", {
  "eventDateFormatText": "M/D/YYYY",
  "titleText": "__Events__",
  "eventText": "__Event__"
});

localize("Mobile.SalesLogix.Views.History.Detail", {
  "dateFormatText": "M/D/YYYY h:mm:ss A",
  "categoryText": "__category__",
  "completedText": "__completed__",
  "durationText": "__duration__",
  "leaderText": "__leader__",
  "longNotesText": "__notes__",
  "notesText": "__Notes__",
  "priorityText": "__priority__",
  "regardingText": "__regarding__",
  "completedByText": "__completed by__",
  "scheduledText": "__scheduled__",
  "timelessText": "__timeless__",
  "companyText": "__company__",
  "leadText": "__lead__",
  "titleText": "__History__",
  "accountText": "__account__",
  "contactText": "__contact__",
  "opportunityText": "__opportunity__",
  "ticketNumberText": "__ticket__",
  "moreDetailsText": "__More Details__",
  "relatedItemsText": "__Related Items__",
  "relatedAttachmentText": "__Attachments__",
  "relatedAttachmentTitleText": "__History Attachments__",
  "modifiedText": "__modified__",
  "typeText": "__type__",
  "activityTypeText": {
    "atToDo": "__To-Do__",
    "atPhoneCall": "__Phone Call__",
    "atAppointment": "__Meeting__",
    "atLiterature": "__Literature Request__",
    "atPersonal": "__Personal Activity__",
    "atQuestion": "__Question__",
    "atEMail": "__E-mail__"
  }
});

localize("Mobile.SalesLogix.Views.History.Edit", {
  "startingFormatText": "M/D/YYYY h:mm A",
  "accountText": "__account__",
  "noteDescriptionTitleText": "__Note Description__",
  "contactText": "__contact__",
  "longNotesText": "__notes__",
  "longNotesTitleText": "__Notes__",
  "opportunityText": "__opportunity__",
  "ticketNumberText": "__ticket__",
  "regardingText": "__regarding__",
  "isLeadText": "__for lead__",
  "startingText": "__time__",
  "titleText": "__Note__",
  "companyText": "__company__",
  "leadText": "__lead__",
  "relatedItemsText": "__Related Items__",
  "yesText": "__YES__",
  "noText": "__NO__"
});

localize("Mobile.SalesLogix.Views.History.List", {
  "hourMinuteFormatText": "h:mm",
  "dateFormatText": "M/D/YY",
  "activityTypeText": {
    "atToDo": "__To-Do__",
    "atPhoneCall": "__Phone Call__",
    "atAppointment": "__Meeting__",
    "atLiterature": "__Literature Request__",
    "atPersonal": "__Personal Activity__",
    "atQuestion": "__Question__",
    "atEMail": "__E-mail__"
  },
  "hashTagQueriesText": {
    "my-history": "__my-history__",
    "note": "__note__",
    "phonecall": "__phonecall__",
    "meeting": "__meeting__",
    "personal": "__personal__",
    "email": "__email__"
  },
  "titleText": "__Notes/History__",
  "viewAccountActionText": "__Account__",
  "viewOpportunityActionText": "__Opp.__",
  "viewContactActionText": "__Contact__",
  "addAttachmentActionText": "__Add Attachment__",
  "regardingText": "__Regarding: __"
});

localize("Mobile.SalesLogix.Views.Opportunity.Detail", {
  "exchangeRateDateFormatText": "M/D/YYYY h:mm A",
  "accountText": "__acct__",
  "acctMgrText": "__acct mgr__",
  "estCloseText": "__est close__",
  "detailsText": "__Details__",
  "fbarHomeTitleText": "__home__",
  "fbarScheduleTitleText": "__schedule__",
  "importSourceText": "__lead source__",
  "opportunityText": "__opportunity__",
  "ownerText": "__owner__",
  "actionsText": "__Quick Actions__",
  "potentialText": "__sales potential__",
  "potentialBaseText": "__sales potential (base rate)__",
  "potentialOpportunityText": "__sales potential (opp. rate)__",
  "potentialMyRateText": "__sales potential (my rate)__",
  "probabilityText": "__close prob__",
  "relatedActivitiesText": "__Activities__",
  "relatedContactsText": "__Opportunity Contacts__",
  "relatedHistoriesText": "__Notes/History__",
  "relatedItemsText": "__Related Items__",
  "relatedNotesText": "__Notes__",
  "relatedProductsText": "__Products__",
  "relatedAttachmentText": "__Attachments__",
  "relatedAttachmentTitleText": "__Opportunity Attachments__",
  "resellerText": "__reseller__",
  "statusText": "__status__",
  "titleText": "__Opportunity__",
  "typeText": "__type__",
  "scheduleActivityText": "__Schedule activity__",
  "addNoteText": "__Add note__",
  "moreDetailsText": "__More Details__",
  "multiCurrencyText": "__Multi Currency__",
  "multiCurrencyRateText": "__exchange rate__",
  "multiCurrencyCodeText": "__code__",
  "multiCurrencyDateText": "__rate date__",
  "multiCurrencyLockedText": "__rate locked__"
});

localize("Mobile.SalesLogix.Views.Opportunity.Edit", {
  "exchangeRateDateFormatText": "M/D/YYYY h:mm A",
  "accountText": "__acct__",
  "acctMgrText": "__acct mgr__",
  "estCloseText": "__est close__",
  "importSourceText": "__lead source__",
  "detailsText": "__Details__",
  "opportunityStatusTitleText": "__Opportunity Status__",
  "opportunityText": "__opportunity__",
  "opportunityTypeTitleText": "__Opportunity Type__",
  "ownerText": "__owner__",
  "potentialText": "__sales potential__",
  "probabilityText": "__close prob__",
  "probabilityTitleText": "__Opportunity Probability__",
  "resellerText": "__reseller__",
  "statusText": "__status__",
  "titleText": "__Opportunity__",
  "typeText": "__type__",
  "multiCurrencyText": "__Multi Currency__",
  "multiCurrencyRateText": "__exchange rate__",
  "multiCurrencyCodeText": "__code__",
  "multiCurrencyDateText": "__rate date__",
  "multiCurrencyLockedText": "__rate locked__",
  "subTypePickListResellerText": "__RESELLER__"
});

localize("Mobile.SalesLogix.Views.TicketActivity.Edit", {
  "startingFormatText": "M/D/YYYY h:mm A",
  "titleText": "__Edit Ticket Activity__",
  "activityTypeText": "__type__",
  "activityTypeTitleText": "__Type__",
  "publicAccessText": "__public access__",
  "publicAccessTitleText": "__Public Access__",
  "userText": "__user__",
  "startDateText": "__start date__",
  "endDateText": "__end date__",
  "commentsText": "__comments__"
});

localize("Mobile.SalesLogix.Views.TicketActivity.List", {
  "startDateFormatText": "MM/DD/YYYY h:mmA",
  "titleText": "__Ticket Activities__"
});

localize("Sage.Platform.Mobile.Detail", {
  "editText": "__Edit__",
  "titleText": "__Detail__",
  "detailsText": "__Details__",
  "toggleCollapseText": "__toggle collapse__",
  "loadingText": "__loading...__",
  "requestErrorText": "__A server error occurred while requesting data.__",
  "notAvailableText": "__The requested entry is not available.__"
});

localize("Sage.Platform.Mobile.Edit", {
  "saveText": "__Save__",
  "titleText": "__Edit__",
  "toggleCollapseText": "__toggle collapse__",
  "validationSummaryText": "__Validation Summary__",
  "detailsText": "__Details__",
  "loadingText": "__loading...__",
  "requestErrorText": "__A server error occured while requesting data.__"
});

localize("Sage.Platform.Mobile.ErrorManager", {
  "abortedText": "__Aborted__",
  "scopeSaveText": "__Scope is not saved in error report__"
});

localize("Sage.Platform.Mobile.Fields.BooleanField", {
  "onText": "__ON__",
  "offText": "__OFF__"
});

localize("Sage.Platform.Mobile.Fields.DurationField", {
  "emptyText": "",
  "invalidDurationErrorText": "__Field '${0}' is not a valid duration.__",
  "autoCompleteText": {
    "1": "__minute(s)__",
    "60": "__hour(s)__",
    "1440": "__day(s)__",
    "10080": "__week(s)__",
    "525960": "__year(s)__"
  }
});

localize("Sage.Platform.Mobile.Fields.EditorField", {
  "lookupLabelText": "__edit__",
  "lookupText": "__...__",
  "emptyText": "__empty__",
  "completeText": "__Ok__"
});

localize("Sage.Platform.Mobile.Fields.LookupField", {
  "dependentErrorText": "__A value for '${0}' must be selected.__",
  "emptyText": "",
  "completeText": "__Select__",
  "lookupLabelText": "__lookup__",
  "lookupText": "__...__"
});

localize("Sage.Platform.Mobile.Fields.NoteField", {
  "emptyText": ""
});

localize("Sage.Platform.Mobile.Fields.SignatureField", {
  "signatureLabelText": "__signature__",
  "signatureText": "__...__"
});

localize("Sage.Platform.Mobile.GroupedList", {
  "toggleCollapseText": "__toggle collapse__"
});

localize("Sage.Platform.Mobile.Groups.DateTimeSection", {
  "displayNameText": "__Date Time Section__",
  "todayText": "__Today__",
  "tomorrowText": "__Tomorrow__",
  "laterThisWeekText": "__Later this week__",
  "earlierThisWeekText": "__Earlier this week__",
  "thisLaterMonthText": "__Later this month__",
  "thisEarlierMonthText": "__Earlier this month__",
  "thisYearEarlierText": "__Earlier this year__",
  "thisYearLaterText": "__Later this year__",
  "yesterdayText": "__Yesterday__",
  "lastWeekText": "__Last week__",
  "lastMonthText": "__Last month__",
  "pastYearText": "__Past year(s)__",
  "nextYearText": "__Next year__",
  "nextMonthText": "__Next month__",
  "nextWeekText": "__Next week__",
  "futureText": "__Future__",
  "twoWeeksAgoText": "__Two weeks ago__",
  "threeWeeksAgoText": "__Three weeks ago__",
  "twoMonthsAgoText": "__Two months ago__",
  "threeMonthsAgoText": "__Three months ago__",
  "unknownText": "__Unknown__"
});

localize("Sage.Platform.Mobile.Groups.GroupByValueSection", {
  "displayNameText": "__Group By Value Section__"
});

localize("Sage.Platform.Mobile.List", {
  "moreText": "__Retrieve More Records__",
  "emptySelectionText": "__None__",
  "titleText": "__List__",
  "remainingText": "__${0} records remaining__",
  "cancelText": "__Cancel__",
  "insertText": "__New__",
  "noDataText": "__no records__",
  "loadingText": "__loading...__",
  "requestErrorText": "__A server error occurred while requesting data.__"
});

localize("Sage.Platform.Mobile.MainToolbar", {
  "titleText": "__Mobile__"
});

localize("Sage.Platform.Mobile.RelatedViewWidget", {
  "nodataText": "__no records found ...__",
  "selectMoreDataText": "__see ${0} more of ${1} ... __",
  "loadingText": "__loading ... __",
  "refreshViewText": "__refresh__",
  "totalCountText": "__ ${0} of ${1}__"
});

localize("Sage.Platform.Mobile.SearchWidget", {
  "searchText": "__Search__"
});

localize("Sage.Platform.Mobile.View", {
  "titleText": "__Generic View__"
});

localize("Sage.Platform.Mobile.Views.FileSelect", {
  "titleText": "__File Select__",
  "addFileText": "__Click or Tap here to add a file.__",
  "uploadText": "__Upload__",
  "cancelText": "__Cancel__",
  "selectFileText": "__Select file__",
  "loadingText": "__Uploading...__",
  "descriptionText": "__description__",
  "bytesText": "__bytes__"
});

localize("Sage.Platform.Mobile.Views.Signature", {
  "titleText": "__Signature__",
  "clearCanvasText": "__Erase__",
  "undoText": "__Undo__"
});

localize("Mobile.SalesLogix.Action", {
  "calledText": "__Called ${0}__",
  "emailedText": "__E-mailed ${0}__"
});

localize("Mobile.SalesLogix.ApplicationModule", {
  "searchText": "__Lookup__"
});

localize("Mobile.SalesLogix.Fields.AddressField", {
  "lookupLabelText": "__edit__",
  "emptyText": ""
});

localize("Mobile.SalesLogix.Fields.NameField", {
  "emptyText": ""
});

localize("Mobile.SalesLogix.Fields.RecurrencesField", {
  "titleText": "__Recurring__",
  "emptyText": ""
});

localize("Mobile.SalesLogix.FileManager", {
  "unableToUploadText": "__This browser does not support HTML5 File API.__",
  "unknownSizeText": "__unknown__",
  "unknownErrorText": "__Warning: An error occured and the file failed to upload.__",
  "largeFileWarningText": "__Warning: This request exceeds the size limit set by your administrator and failed to upload.__",
  "percentCompleteText": "__Uploading, please wait...__"
});

localize("Mobile.SalesLogix.Format", {
  "bigNumberAbbrText": {
    "billion": "__B__",
    "million": "__M__",
    "thousand": "__K__"
  }
});

localize("Mobile.SalesLogix.Recurrence", {
  "neverText": "__Never__",
  "daysText": "__days__",
  "dailyText": "__Daily__",
  "weeksText": "__weeks__",
  "weeklyText": "__Weekly__",
  "weeklyOnText": "__Weekly on ${3}__",
  "monthsText": "__months__",
  "monthlyText": "__Monthly__",
  "monthlyOnDayText": "__Monthly on day ${1}__",
  "monthlyOnText": "__Monthly on ${5} ${3}__",
  "yearsText": "__years__",
  "yearlyText": "__Yearly__",
  "yearlyOnText": "__Yearly on ${2}__",
  "yearlyOnWeekdayText": "__Yearly on ${5} ${3} in ${4}__",
  "everyText": "__every ${0} ${1}__",
  "afterCompletionText": "__after completion__",
  "untilEndDateText": "__${0} until ${1}__",
  "ordText": {
    "0": "__day__",
    "1": "__first__",
    "2": "__second__",
    "3": "__third__",
    "4": "__fourth__",
    "5": "__last__"
  }
});

localize("Mobile.SalesLogix.SpeedSearchWidget", {
  "searchText": "__SpeedSearch__"
});

localize("Mobile.SalesLogix.Validator", {
  "exists": {
    "message": "__The field '${2}' must have a value.__"
  },
  "name": {
    "message": "__The field '${2}' must have a first and last name specified.__"
  },
  "notEmpty": {
    "message": "__The field '${2}' cannot be empty.__"
  },
  "hasText": {
    "test": "",
    "message": "__The field '${2}' must contain some text.__"
  },
  "isInteger": {
    "message": "__The value '${0}' is not a valid number.__"
  },
  "isDecimal": {
    "message": "__The value '${0}' is not a valid number.__"
  },
  "isCurrency": {
    "message": "__The value '${0}' is not a valid currency number.__"
  },
  "isInt32": {
    "message": "__The field '${2}' value exceeds the allowed numeric range.__"
  },
  "exceedsMaxTextLength": {
    "message": "__The field '${2}' value exceeds the allowed limit in length.__"
  },
  "isDateInRange": {
    "message": "__The field '${2}' value is out of allowed date range.__"
  }
});

localize("Mobile.SalesLogix.Views.Account.Detail", {
  "accountText": "__account__",
  "acctMgrText": "__acct mgr__",
  "addressText": "__address__",
  "businessDescriptionText": "__bus desc__",
  "createDateText": "__create date__",
  "createUserText": "__create user__",
  "faxText": "__fax__",
  "importSourceText": "__lead source__",
  "industryText": "__industry__",
  "notesText": "__notes__",
  "ownerText": "__owner__",
  "phoneText": "__phone__",
  "activityTypeText": {
    "atPhoneCall": "__Phone Call__"
  },
  "actionsText": "__Quick Actions__",
  "relatedActivitiesText": "__Activities__",
  "relatedContactsText": "__Contacts__",
  "relatedHistoriesText": "__Notes/History__",
  "relatedItemsText": "__Related Items__",
  "relatedNotesText": "__Notes__",
  "relatedOpportunitiesText": "__Opportunities__",
  "relatedTicketsText": "__Tickets__",
  "relatedAddressesText": "__Addresses__",
  "relatedAttachmentText": "__Attachments__",
  "relatedAttachmentTitleText": "__Account Attachments__",
  "statusText": "__status__",
  "subTypeText": "__subtype__",
  "titleText": "__Account__",
  "typeText": "__type__",
  "webText": "__web__",
  "callMainNumberText": "__Call main number__",
  "scheduleActivityText": "__Schedule activity__",
  "addNoteText": "__Add note__",
  "viewAddressText": "__View address__",
  "moreDetailsText": "__More Details__",
  "calledText": "__Called ${0}__"
});

localize("Mobile.SalesLogix.Views.Account.Edit", {
  "accountStatusTitleText": "__Account Status__",
  "accountSubTypeTitleText": "__Account Subtype__",
  "accountText": "__account__",
  "accountTypeTitleText": "__Account Type__",
  "acctMgrText": "__acct mgr__",
  "businessDescriptionText": "__bus desc__",
  "businessDescriptionTitleText": "__Business Description__",
  "descriptionText": "__desc__",
  "faxText": "__fax__",
  "fullAddressText": "__address__",
  "importSourceText": "__lead source__",
  "industryText": "__industry__",
  "industryTitleText": "__Industry__",
  "ownerText": "__owner__",
  "phoneText": "__phone__",
  "statusText": "__status__",
  "subTypeText": "__subtype__",
  "titleText": "__Account__",
  "typeText": "__type__",
  "webText": "__web__"
});

localize("Mobile.SalesLogix.Views.Account.List", {
  "titleText": "__Accounts__",
  "activitiesText": "__Activities__",
  "notesText": "__Notes__",
  "scheduleText": "__Schedule__",
  "editActionText": "__Edit__",
  "callMainActionText": "__Call Main__",
  "viewContactsActionText": "__Contacts__",
  "addNoteActionText": "__Add Note__",
  "addActivityActionText": "__Add Activity__",
  "addAttachmentActionText": "__Add Attachment__",
  "phoneAbbreviationText": "__Phone: __",
  "faxAbbreviationText": "__Fax: __",
  "hashTagQueriesText": {
    "active": "__active__",
    "inactive": "__inactive__",
    "suspect": "__suspect__",
    "lead": "__lead__",
    "prospect": "__prospect__",
    "customer": "__customer__",
    "partner": "__partner__",
    "vendor": "__vendor__",
    "influencer": "__influencer__",
    "competitor": "__competitor__"
  }
});

localize("Mobile.SalesLogix.Views.Activity.MyList", {
  "titleText": "__My Activities__",
  "completeActivityText": "__Complete__",
  "acceptActivityText": "__Accept__",
  "declineActivityText": "__Decline__",
  "callText": "__Call__",
  "calledText": "__Called__",
  "addAttachmentActionText": "__Add Attachment__",
  "viewContactActionText": "__Contact__",
  "viewAccountActionText": "__Account__",
  "viewOpportunityActionText": "__Opportunity__",
  "hashTagQueriesText": {
    "alarm": "__alarm__",
    "status-unconfirmed": "__status-unconfirmed__",
    "status-accepted": "__status-accepted__",
    "status-declined": "__status-declined__",
    "recurring": "__recurring__",
    "timeless": "__timeless__",
    "today": "__today__",
    "this-week": "__this-week__",
    "yesterday": "__yesterday__"
  }
});

localize("Mobile.SalesLogix.Views.Activity.Recurring", {
  "startingText": "__start date__",
  "endingText": "__end date__",
  "repeatsText": "__repeats__",
  "everyText": "__every__",
  "afterCompletionText": "__after completed__",
  "singleWeekdayText": "__weekday__",
  "weekdaysText": "__weekday(s)__",
  "dayText": "__day__",
  "monthText": "__month__",
  "onText": "__on__",
  "occurrencesText": "__occurrences__",
  "summaryText": "__summary__",
  "frequencyOptionsText": {
    "0": "__days__",
    "1": "__weeks__",
    "2": "__months__",
    "3": "__years__"
  },
  "recurringFrequencyText": "__Recurring Frequency__",
  "yesText": "__Yes__",
  "noText": "__No__",
  "titleText": "__Recurrence__"
});

localize("Mobile.SalesLogix.Views.Activity.TypesList", {
  "titleText": "__Schedule...__",
  "activityTypeText": {
    "atToDo": "__To-Do__",
    "atPhoneCall": "__Phone Call__",
    "atAppointment": "__Meeting__",
    "atLiterature": "__Literature Request__",
    "atPersonal": "__Personal Activity__",
    "event": "__Event__"
  }
});

localize("Mobile.SalesLogix.Views.AddAccountContact", {
  "accountNameText": "__account__",
  "accountStatusTitleText": "__Account Status__",
  "accountSubTypeTitleText": "__Account SubType__",
  "accountText": "__Account__",
  "accountTypeTitleText": "__Account Type__",
  "acctMgrText": "__acct mgr__",
  "addressText": "__address__",
  "contactTitleText": "__Title__",
  "descriptionText": "__description__",
  "detailsAccountText": "__Account Info__",
  "detailsContactText": "__Contact Info__",
  "detailsText": "__Contact / Account Info__",
  "emailText": "__email__",
  "faxText": "__fax__",
  "homePhoneText": "__home phone__",
  "industryText": "__industry__",
  "ownerText": "__owner__",
  "lastNameText": "__last__",
  "mobileText": "__mobile__",
  "nameText": "__name__",
  "statusText": "__status__",
  "subTypeText": "__sub-type__",
  "titleText": "__Add Account / Contact__",
  "typeText": "__type__",
  "webText": "__web__",
  "workText": "__work phone__",
  "industryTitleText": "__Industry__"
});

localize("Mobile.SalesLogix.Views.Address.Edit", {
  "address1Text": "__address 1__",
  "address2Text": "__address 2__",
  "address3Text": "__address 3__",
  "cityText": "__city__",
  "cityTitleText": "__City__",
  "countryText": "__country__",
  "countryTitleText": "__Country__",
  "descriptionText": "__description__",
  "descriptionTitleText": "__Description__",
  "isMailingText": "__shipping__",
  "isPrimaryText": "__primary__",
  "postalCodeText": "__postal__",
  "salutationText": "__attention__",
  "stateText": "__state__",
  "stateTitleText": "__State__",
  "titleText": "__Address__"
});

localize("Mobile.SalesLogix.Views.Address.List", {
  "titleText": "__Addresses__"
});

localize("Mobile.SalesLogix.Views.AreaCategoryIssueLookup", {
  "titleText": "__Accounts__"
});

localize("Mobile.SalesLogix.Views.Attachment.MyAttachmentList", {
  "titleText": "__My Attachments__"
});

localize("Mobile.SalesLogix.Views.Charts.GenericBar", {
  "titleText": "",
  "otherText": "__Other__"
});

localize("Mobile.SalesLogix.Views.Charts.GenericPie", {
  "titleText": "",
  "otherText": "__Other__"
});

localize("Mobile.SalesLogix.Views.Competitor.List", {
  "titleText": "__Competitors__"
});

localize("Mobile.SalesLogix.Views.Configure", {
  "titleText": "__Configure__"
});

localize("Mobile.SalesLogix.Views.Contact.Detail", {
  "activityTypeText": {
    "atPhoneCall": "__Phone Call__",
    "atEMail": "__E-mail__"
  },
  "accountText": "__account__",
  "acctMgrText": "__acct mgr__",
  "addressText": "__address__",
  "contactTitleText": "__title__",
  "createDateText": "__create date__",
  "createUserText": "__create user__",
  "emailText": "__email__",
  "faxText": "__fax__",
  "homeText": "__home phone__",
  "nameText": "__contact__",
  "ownerText": "__owner__",
  "actionsText": "__Quick Actions__",
  "relatedAccountsText": "__Accounts__",
  "relatedActivitiesText": "__Activities__",
  "relatedHistoriesText": "__Notes/History__",
  "relatedItemsText": "__Related Items__",
  "relatedNotesText": "__Notes__",
  "relatedOpportunitiesText": "__Opportunities__",
  "relatedTicketsText": "__Tickets__",
  "relatedAddressesText": "__Addresses__",
  "relatedAttachmentText": "__Attachments__",
  "relatedAttachmentTitleText": "__Contact Attachments__",
  "titleText": "__Contact__",
  "webText": "__web__",
  "workText": "__phone__",
  "cuisinePreferenceText": "__cuisine__",
  "callMobileNumberText": "__Call mobile__",
  "callWorkNumberText": "__Call main number__",
  "calledText": "__Called__",
  "scheduleActivityText": "__Schedule activity__",
  "addNoteText": "__Add note__",
  "sendEmailText": "__Send email__",
  "viewAddressText": "__View address__",
  "moreDetailsText": "__More Details__"
});

localize("Mobile.SalesLogix.Views.Contact.Edit", {
  "titleText": "__Contact__",
  "nameText": "__name__",
  "workText": "__phone__",
  "mobileText": "__mobile__",
  "emailText": "__email__",
  "webText": "__web__",
  "acctMgrText": "__acct mgr__",
  "accountNameText": "__account__",
  "homePhoneText": "__home phone__",
  "faxText": "__fax__",
  "addressText": "__address__",
  "contactTitleText": "__title__",
  "titleTitleText": "__Title__",
  "addressTitleText": "__Address__",
  "ownerText": "__owner__",
  "cuisinePreferenceText": "__cuisine__",
  "cuisinePreferenceTitleText": "__Cuisine__"
});

localize("Mobile.SalesLogix.Views.Contact.List", {
  "titleText": "__Contacts__",
  "activitiesText": "__Activities__",
  "notesText": "__Notes__",
  "scheduleText": "__Schedule__",
  "editActionText": "__Edit__",
  "callMainActionText": "__Call Main__",
  "callWorkActionText": "__Call Work__",
  "callMobileActionText": "__Call Mobile__",
  "sendEmailActionText": "__Email__",
  "viewAccountActionText": "__Account__",
  "addNoteActionText": "__Add Note__",
  "addActivityActionText": "__Add Activity__",
  "addAttachmentActionText": "__Add Attachment__",
  "phoneAbbreviationText": "__Work: __",
  "mobileAbbreviationText": "__Mobile: __",
  "hashTagQueriesText": {
    "my-contacts": "__my-contacts__",
    "primary": "__primary__",
    "not-primary": "__not-primary__",
    "can-email": "__can-email__",
    "can-phone": "__can-phone__",
    "can-fax": "__can-fax__",
    "can-mail": "__can-mail__",
    "can-solicit": "__can-solicit__"
  }
});

localize("Mobile.SalesLogix.Views.Contract.List", {
  "titleText": "__Contracts__"
});

localize("Mobile.SalesLogix.Views.ExchangeRateLookup", {
  "titleText": "__Exchange Rates__"
});

localize("Mobile.SalesLogix.Views.FooterToolbar", {
  "copyrightText": "__&copy; 2013 Sage Software, Inc. All rights reserved.__"
});

localize("Mobile.SalesLogix.Views.Help", {
  "titleText": "__Help__",
  "errorText": "__Error__",
  "errorMessageText": "__Unable to load the help document.__"
});

localize("Mobile.SalesLogix.Views.History.RelatedView", {
  "regardingText": "__Regarding__",
  "byText": "__by__"
});

localize("Mobile.SalesLogix.Views.Home", {
  "configureText": "__Configure__",
  "addAccountContactText": "__Add Account/Contact__",
  "titleText": "__Home__",
  "actionsText": "__Quick Actions__",
  "viewsText": "__Go To__"
});

localize("Mobile.SalesLogix.Views.Lead.Detail", {
  "activityTypeText": {
    "atPhoneCall": "__Phone Call__",
    "atEMail": "__E-mail__"
  },
  "accountText": "__company__",
  "addressText": "__address__",
  "businessDescriptionText": "__bus desc__",
  "createDateText": "__create date__",
  "createUserText": "__create user__",
  "eMailText": "__email__",
  "leadSourceText": "__lead source__",
  "industryText": "__industry__",
  "interestsText": "__interests__",
  "leadTitleText": "__title__",
  "nameText": "__name__",
  "notesText": "__comments__",
  "ownerText": "__owner__",
  "relatedActivitiesText": "__Activities__",
  "relatedHistoriesText": "__Notes/History__",
  "relatedItemsText": "__Related Items__",
  "relatedNotesText": "__Notes__",
  "relatedAttachmentText": "__Attachments__",
  "relatedAttachmentTitleText": "__Lead Attachments__",
  "sicCodeText": "__sic code__",
  "titleText": "__Lead__",
  "tollFreeText": "__toll free__",
  "mobileText": "__mobile phone__",
  "webText": "__web__",
  "workText": "__work phone__",
  "actionsText": "__Quick Actions__",
  "callWorkNumberText": "__Call main number__",
  "scheduleActivityText": "__Schedule activity__",
  "addNoteText": "__Add note__",
  "sendEmailText": "__Send email__",
  "viewAddressText": "__View address__",
  "moreDetailsText": "__More Details__",
  "calledText": "__Called ${0}__",
  "emailedText": "__Emailed ${0}__"
});

localize("Mobile.SalesLogix.Views.Lead.Edit", {
  "accountText": "__account__",
  "addressText": "__address__",
  "businessText": "__bus desc__",
  "businessTitleText": "__Business Description__",
  "companyText": "__company__",
  "contactTitleText": "__title__",
  "emailText": "__email__",
  "faxText": "__fax__",
  "importSourceText": "__lead source__",
  "industryText": "__industry__",
  "industryTitleText": "__Industry__",
  "interestsText": "__interests__",
  "leadNameLastFirstText": "__name__",
  "leadOwnerText": "__owner__",
  "nameText": "__name__",
  "notesText": "__comments__",
  "notesTitleText": "__Comments__",
  "sicCodeText": "__sic code__",
  "titleText": "__Lead__",
  "titleTitleText": "__Title__",
  "tollFreeText": "__toll free__",
  "webText": "__web__",
  "workText": "__work phone__",
  "mobileText": "__mobile phone__"
});

localize("Mobile.SalesLogix.Views.Lead.List", {
  "titleText": "__Leads__",
  "activitiesText": "__Activities__",
  "notesText": "__Notes__",
  "scheduleText": "__Schedule__",
  "emailedText": "__E-mailed ${0}__",
  "calledText": "__Called ${0}__",
  "editActionText": "__Edit__",
  "callMobileActionText": "__Call Mobile__",
  "callWorkActionText": "__Call Work__",
  "sendEmailActionText": "__Email__",
  "addNoteActionText": "__Add Note__",
  "addActivityActionText": "__Add Activity__",
  "addAttachmentActionText": "__Add Attachment__",
  "phoneAbbreviationText": "__Work: __",
  "mobileAbbreviationText": "__Mobile: __",
  "tollFreeAbbreviationText": "__Toll Free: __",
  "hashTagQueriesText": {
    "my-leads": "__my-leads__",
    "can-email": "__can-email__",
    "can-phone": "__can-phone__",
    "can-fax": "__can-fax__",
    "can-mail": "__can-mail__",
    "can-solicit": "__can-solicit__"
  }
});

localize("Mobile.SalesLogix.Views.LeadSource.List", {
  "titleText": "__Lead Sources__"
});

localize("Mobile.SalesLogix.Views.LeftDrawer", {
  "configureText": "__Configure Menu__",
  "addAccountContactText": "__Add Account/Contact__",
  "titleText": "__Main Menu__",
  "actionsText": "__Quick Actions__",
  "viewsText": "__Go To__",
  "footerText": "__Other__",
  "settingsText": "__Settings__",
  "helpText": "__Help__",
  "logOutText": "__Log Out__",
  "logOutConfirmText": "__Are you sure you want to log out?__"
});

localize("Mobile.SalesLogix.Views.Login", {
  "copyrightText": "__&copy; 2013 SalesLogix, NA, LLC. All rights reserved.__",
  "logOnText": "__Log on to Saleslogix__",
  "passText": "__password__",
  "rememberText": "__remember__",
  "titleText": "__Log On__",
  "userText": "__user name__",
  "invalidUserText": "__The user name or password is invalid.__",
  "missingUserText": "__The user record was not found.__",
  "serverProblemText": "__A problem occured on the server.__",
  "requestAbortedText": "__The request was aborted.__"
});

localize("Mobile.SalesLogix.Views.MainToolbar", {
  "titleText": "__Saleslogix__"
});

localize("Mobile.SalesLogix.Views.MetricConfigure", {
  "titleText": "__Configure Metric__",
  "metricTitleText": "__title__",
  "metricFilterText": "__filter__",
  "metricText": "__metric__",
  "chartTypeText": "__chart type__",
  "advancedText": "__advanced options__",
  "formatterText": "__formatter__",
  "aggregateText": "__aggregate__",
  "reportViewText": "__chart view id__"
});

localize("Mobile.SalesLogix.Views.MetricFilterLookup", {
  "titleText": "__Filter/Metric Lookup__"
});

localize("Mobile.SalesLogix.Views.MetricWidget", {
  "loadingText": "__loading...__"
});

localize("Mobile.SalesLogix.Views.NameEdit", {
  "titleText": "__Edit Name__",
  "firstNameText": "__first__",
  "middleNameText": "__middle__",
  "lastNameText": "__last__",
  "prefixText": "__prefix__",
  "prefixTitleText": "__Name Prefix__",
  "suffixText": "__suffix__",
  "suffixTitleText": "__Name Suffix__"
});

localize("Mobile.SalesLogix.Views.Opportunity.List", {
  "titleText": "__Opportunities__",
  "activitiesText": "__Activities__",
  "notesText": "__Notes__",
  "scheduleText": "__Schedule__",
  "editActionText": "__Edit__",
  "viewAccountActionText": "__Account__",
  "viewContactsActionText": "__Contacts__",
  "viewProductsActionText": "__Products__",
  "addNoteActionText": "__Add Note__",
  "addActivityActionText": "__Add Activity__",
  "addAttachmentActionText": "__Add Attachment__",
  "actualCloseText": "__Closed __",
  "estimatedCloseText": "__Estimated close __",
  "hashTagQueriesText": {
    "my-opportunities": "__my-opportunities__",
    "open": "__open__",
    "closed": "__closed__",
    "won": "__won__",
    "lost": "__lost__",
    "inactive": "__inactive__",
    "prospect": "__prospect__",
    "qualification": "__qualification__",
    "negotiation": "__negotiation__",
    "needs-analysis": "__needs-analysis__",
    "demonstration": "__demonstration__",
    "decision": "__decision__"
  }
});

localize("Mobile.SalesLogix.Views.OpportunityContact.Detail", {
  "titleText": "__Opportunity Contact__",
  "accountText": "__account__",
  "contactTitleText": "__title__",
  "nameText": "__contact__",
  "moreDetailsText": "__More Details__",
  "salesRoleText": "__role__",
  "strategyText": "__strategy__",
  "personalBenefitsText": "__personal ben__",
  "standingText": "__standing__",
  "issuesText": "__issues__",
  "competitorNameText": "__competitor pref__",
  "removeContactTitleText": "__Remove Contact__",
  "confirmDeleteText": "__Remove \"${0}\" from the opportunity?__",
  "contactText": "__Contact__"
});

localize("Mobile.SalesLogix.Views.OpportunityContact.Edit", {
  "titleText": "__Edit Opp. Contact__",
  "nameText": "__name__",
  "accountNameText": "__account__",
  "contactTitleText": "__title__",
  "salesRoleText": "__role__",
  "salesRoleTitleText": "__Role__",
  "personalBenefitsText": "__personal ben.__",
  "strategyText": "__strategy__",
  "issuesText": "__issues__",
  "standingText": "__standing__",
  "standingTitleText": "__Standing__",
  "contactText": "__Contact__",
  "competitorPrefText": "__competitor pref__"
});

localize("Mobile.SalesLogix.Views.OpportunityContact.List", {
  "titleText": "__Opportunity Contacts__",
  "selectTitleText": "__Select Contact__",
  "activitiesText": "__Activities__",
  "notesText": "__Notes__",
  "scheduleText": "__Schedule__"
});

localize("Mobile.SalesLogix.Views.OpportunityProduct.Detail", {
  "detailsText": "__Details__",
  "opportunityText": "__opportunity__",
  "productText": "__product__",
  "productFamilyText": "__product family__",
  "priceLevelText": "__price level__",
  "priceText": "__price__",
  "basePriceText": "__base price__",
  "discountText": "__discount__",
  "quantityText": "__quantity__",
  "baseExtendedPriceText": "__base__",
  "extendedPriceText": "__extended price__",
  "extendedPriceSectionText": "__Extended Price__",
  "adjustedPriceSectionText": "__Adjusted Price__",
  "baseAdjustedPriceText": "__base__",
  "adjustedPriceText": "__adjusted price__",
  "myAdjustedPriceText": "__user__",
  "confirmDeleteText": "__Remove ${0} from the opportunity products?__",
  "removeOppProductTitleText": "__remove opportunity product__"
});

localize("Mobile.SalesLogix.Views.OpportunityProduct.Edit", {
  "titleText": "__Opportunity Product__",
  "detailsText": "__Details__",
  "opportunityText": "__opportunity__",
  "productText": "__product__",
  "productFamilyText": "__product family__",
  "priceLevelText": "__price level__",
  "priceText": "__price__",
  "basePriceText": "__base price__",
  "discountText": "__discount %__",
  "adjustedPriceText": "__adjusted price__",
  "myAdjustedPriceText": "__user__",
  "baseAdjustedPriceText": "__base__",
  "quantityText": "__quantity__",
  "baseExtendedPriceText": "__base__",
  "extendedPriceText": "__extended price__",
  "extendedPriceSectionText": "__Extended Price__",
  "adjustedPriceSectionText": "__Adjusted Price__"
});

localize("Mobile.SalesLogix.Views.OpportunityProduct.List", {
  "titleText": "__Products__"
});

localize("Mobile.SalesLogix.Views.Owner.List", {
  "titleText": "__Owners__"
});

localize("Mobile.SalesLogix.Views.Product.List", {
  "titleText": "__Products__"
});

localize("Mobile.SalesLogix.Views.ProductProgram.List", {
  "titleText": "__Product Programs__"
});

localize("Mobile.SalesLogix.Views.Settings", {
  "clearLocalStorageTitleText": "__Clear Storage__",
  "clearAuthenticationTitleText": "__Clear Saved Credentials__",
  "errorLogTitleText": "__View Error Logs__",
  "localStorageClearedText": "__Local storage cleared successfully.__",
  "credentialsClearedText": "__Saved credentials cleared successfully.__",
  "titleText": "__Settings__"
});

localize("Mobile.SalesLogix.Views.SpeedSearchList", {
  "titleText": "__SpeedSearch__",
  "indexesText": {
    "Account": "__Account__",
    "Activity": "__Activity__",
    "Contact": "__Contact__",
    "History": "__History__",
    "Lead": "__Lead__",
    "Opportunity": "__Opportunity__",
    "Ticket": "__Ticket__"
  }
});

localize("Mobile.SalesLogix.Views.TextEdit", {
  "titleText": "__Edit Text__"
});

localize("Mobile.SalesLogix.Views.Ticket.Detail", {
  "accountText": "__account__",
  "areaText": "__area__",
  "assignedDateText": "__assigned date__",
  "assignedToText": "__assigned to__",
  "completedByText": "__completed by__",
  "categoryText": "__category__",
  "contactText": "__contact__",
  "contractText": "__contract__",
  "descriptionText": "__desc__",
  "issueText": "__issue__",
  "needByText": "__needed date__",
  "notesText": "__comments__",
  "phoneText": "__phone__",
  "actionsText": "__Quick Actions__",
  "relatedAttachmentText": "__Attachments__",
  "relatedAttachmentTitleText": "__Ticket Attachments__",
  "relatedActivitiesText": "__Activities__",
  "relatedItemsText": "__Related Items__",
  "resolutionText": "__resolution__",
  "sourceText": "__source__",
  "statusText": "__status__",
  "subjectText": "__subject__",
  "ticketIdText": "__ticket number__",
  "titleText": "__Ticket__",
  "urgencyText": "__urgency__",
  "scheduleActivityText": "__Schedule activity__",
  "moreDetailsText": "__More Details__",
  "relatedTicketActivitiesText": "__Ticket Activities__",
  "loadingText": "__loading...__"
});

localize("Mobile.SalesLogix.Views.Ticket.Edit", {
  "accountText": "__acct__",
  "areaText": "__area__",
  "assignedDateText": "__assigned date__",
  "assignedToText": "__assigned to__",
  "categoryText": "__category__",
  "contactText": "__contact__",
  "contractText": "__contract__",
  "descriptionText": "__desc__",
  "descriptionTitleText": "__Description__",
  "issueText": "__issue__",
  "needByText": "__needed date__",
  "notesText": "__comments__",
  "notesTitleText": "__Comments__",
  "phoneText": "__phone__",
  "relatedActivitiesText": "__Activities__",
  "relatedItemsText": "__Related Items__",
  "resolutionText": "__resolution__",
  "resolutionTitleText": "__Resolution__",
  "sourceText": "__source__",
  "sourceTitleText": "__Source__",
  "statusText": "__status__",
  "subjectText": "__subject__",
  "ticketAreaTitleText": "__Ticket Area__",
  "ticketCategoryTitleText": "__Ticket Category__",
  "ticketIdText": "__ticket number__",
  "ticketIssueTitleText": "__Ticket Issue__",
  "ticketStatusTitleText": "__Ticket Status__",
  "ticketUrgencyTitleText": "__Ticket Urgency__",
  "titleText": "__Ticket__",
  "urgencyText": "__urgency__"
});

localize("Mobile.SalesLogix.Views.Ticket.List", {
  "titleText": "__Tickets__",
  "activitiesText": "__Activities__",
  "scheduleText": "__Schedule__",
  "notAssignedText": "__Not assigned__",
  "editActionText": "__Edit__",
  "viewAccountActionText": "__Account__",
  "viewContactActionText": "__Contact__",
  "addNoteActionText": "__Add Note__",
  "addActivityActionText": "__Add Activity__",
  "addAttachmentActionText": "__Add Attachment__",
  "assignedToText": "__Assigned To: __",
  "urgencyText": "__Urgency: __",
  "createdOnText": "__Created  __",
  "modifiedText": "__Modified __",
  "neededByText": "__Needed  __",
  "hashTagQueriesText": {
    "assigned-to-me": "__assigned-to-me__",
    "completed-by-me": "__completed-by-me__"
  }
});

localize("Mobile.SalesLogix.Views.Ticket.UrgencyLookup", {
  "titleText": "__Ticket Urgency__"
});

localize("Mobile.SalesLogix.Views.TicketActivity.Detail", {
  "titleText": "__Ticket Activity__",
  "accountText": "__account__",
  "contactText": "__contact__",
  "typeText": "__type__",
  "publicAccessText": "__public access__",
  "assignedDateText": "__start date__",
  "completedDateText": "__end date__",
  "followUpText": "__follow up__",
  "unitsText": "__time units__",
  "elapsedUnitsText": "__elapsed hours__",
  "rateTypeDescriptionText": "__charge type__",
  "rateText": "__rate__",
  "totalLaborText": "__total labor__",
  "totalPartsText": "__total parts__",
  "totalFeeText": "__total fee__",
  "activityDescriptionText": "__comments__",
  "ticketNumberText": "__ticket number__",
  "userText": "__user__",
  "completeTicketText": "__Complete Ticket Activity__",
  "moreDetailsText": "__More Details__",
  "relatedItemsText": "__Related Items__",
  "relatedTicketActivityItemText": "__Ticket Activity Parts__"
});

localize("Mobile.SalesLogix.Views.TicketActivity.RateLookup", {
  "titleText": "__Rates__"
});

localize("Mobile.SalesLogix.Views.TicketActivityItem.Detail", {
  "titleText": "__Ticket Activity Part__",
  "productNameText": "__product__",
  "skuText": "__SKU__",
  "serialNumberText": "__serial #__",
  "itemAmountText": "__price__",
  "itemDescriptionText": "__description__"
});

localize("Mobile.SalesLogix.Views.TicketActivityItem.List", {
  "titleText": "__Ticket Activity Parts__"
});

localize("Mobile.SalesLogix.Views.UpdateToolbar", {
  "updateText": "__An update is available.  Click to reload.__"
});

localize("Mobile.SalesLogix.Views.User.List", {
  "titleText": "__Users__"
});

localize("Mobile.SalesLogix.Views._CardLayoutListMixin", {
  "itemIconAltText": "__Contact__",
  "allRecordsText": "__no search applied__"
});

localize("Mobile.SalesLogix.Views._RightDrawerListMixin", {
  "hashTagsSectionText": "__Hash Tags__",
  "kpiSectionText": "__KPI__"
});

localize("Mobile.SalesLogix.Views._SpeedSearchRightDrawerListMixin", {
  "indexSectionText": "__Indexes__",
  "configureText": "__Configure__"
});
});