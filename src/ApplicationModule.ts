import declare = require('dojo/_base/declare');
import lang = require('dojo/_base/lang');
import query = require('dojo/query');
import win = require('dojo/_base/window');
import ApplicationModule = require('argos/ApplicationModule');
import Calendar = require('argos/Calendar');
import RelatedViewManager = require('argos/RelatedViewManager');
import RelatedViewWidget = require('argos/RelatedViewWidget');
import List = require('argos/List');
import Signature = require('argos/Views/Signature');
import SearchWidget = require('argos/SearchWidget');
import FileSelect = require('argos/Views/FileSelect');
import AddAccountContact = require('./Views/AddAccountContact');
import AreaCategoryIssueLookup = require('./Views/AreaCategoryIssueLookup');
import ExchangeRateLookup = require('./Views/ExchangeRateLookup');
import MainToolbar = require('./Views/MainToolbar');
import UpdateToolbar = require('./Views/UpdateToolbar');
import LeftDrawer = require('./Views/LeftDrawer');
import RightDrawer = require('./Views/RightDrawer');
import Login = require('./Views/Login');
import LogOff = require('./Views/LogOff');
import Settings = require('./Views/Settings');
import Configure = require('./Views/Configure');
import MetricConfigure = require('./Views/MetricConfigure');
import MetricFilterLookup = require('./Views/MetricFilterLookup');
import Help = require('./Views/Help');
import NameEdit = require('./Views/NameEdit');
import PickList = require('./Views/PickList');
import SelectList = require('./Views/SelectList');
import SpeedSearchList = require('./Views/SpeedSearchList');
import TextEdit = require('./Views/TextEdit');
import AccountList = require('./Views/Account/List');
import AccountDetail = require('./Views/Account/Detail');
import AccountEdit = require('./Views/Account/Edit');
import AddressList = require('./Views/Address/List');
import AddressEdit = require('./Views/Address/Edit');
import ActivityList = require('./Views/Activity/List');
import MyActivityList = require('./Views/Activity/MyList');
import ActivityDetail = require('./Views/Activity/Detail');
import ActivityEdit = require('./Views/Activity/Edit');
import ActivityComplete = require('./Views/Activity/Complete');
import ActivityTypesList = require('./Views/Activity/TypesList');
import ActivityRecurring = require('./Views/Activity/Recurring');
import CalendarDayView = require('./Views/Calendar/DayView');
import CalendarWeekView = require('./Views/Calendar/WeekView');
import CalendarMonthView = require('./Views/Calendar/MonthView');
import GenericBar = require('./Views/Charts/GenericBar');
import GenericLine = require('./Views/Charts/GenericLine');
import GenericPie = require('./Views/Charts/GenericPie');
import CompetitorList = require('./Views/Competitor/List');
import ContactList = require('./Views/Contact/List');
import ContactDetail = require('./Views/Contact/Detail');
import ContactEdit = require('./Views/Contact/Edit');
import ContractList = require('./Views/Contract/List');
import ErrorLogList = require('./Views/ErrorLog/List');
import ErrorLogDetail = require('./Views/ErrorLog/Detail');
import EventList = require('./Views/Event/List');
import EventDetail = require('./Views/Event/Detail');
import EventEdit = require('./Views/Event/Edit');
import GroupsSelector = require('./Views/Groups/Selector');
import LeadList = require('./Views/Lead/List');
import LeadDetail = require('./Views/Lead/Detail');
import LeadEdit = require('./Views/Lead/Edit');
import LeadSourceList = require('./Views/LeadSource/List');
import OpportunityList = require('./Views/Opportunity/List');
import OpportunityDetail = require('./Views/Opportunity/Detail');
import OpportunityEdit = require('./Views/Opportunity/Edit');
import OpportunityQuickEdit = require('./Views/Opportunity/QuickEdit');
import OpportunityContactList = require('./Views/OpportunityContact/List');
import OpportunityContactDetail = require('./Views/OpportunityContact/Detail');
import OpportunityContactEdit = require('./Views/OpportunityContact/Edit');
import OpportunityProductList = require('./Views/OpportunityProduct/List');
import OpportunityProductDetail = require('./Views/OpportunityProduct/Detail');
import OpportunityProductEdit = require('./Views/OpportunityProduct/Edit');
import OwnerList = require('./Views/Owner/List');
import ProductList = require('./Views/Product/List');
import ProductProgramList = require('./Views/ProductProgram/List');
import TicketList = require('./Views/Ticket/List');
import TicketDetail = require('./Views/Ticket/Detail');
import TicketEdit = require('./Views/Ticket/Edit');
import TicketUrgencyLookup = require('./Views/Ticket/UrgencyLookup');
import TicketActivityList = require('./Views/TicketActivity/List');
import TicketActivityDetail = require('./Views/TicketActivity/Detail');
import TicketActivityEdit = require('./Views/TicketActivity/Edit');
import TicketActivityRateLookup = require('./Views/TicketActivity/RateLookup');
import TicketActivityItemList = require('./Views/TicketActivityItem/List');
import TicketActivityItemDetail = require('./Views/TicketActivityItem/Detail');
import HistoryList = require('./Views/History/List');
import HistoryDetail = require('./Views/History/Detail');
import HistoryEdit = require('./Views/History/Edit');
import HistoryRelatedView = require('./Views/History/RelatedView');
import CalendarAccessList = require('./Views/User/CalendarAccessList');
import UserList = require('./Views/User/List');
import ViewAttachment = require('./Views/Attachment/ViewAttachment');
import AttachmentList = require('./Views/Attachment/List');
import AddAttachment = require('./Views/Attachment/AddAttachment');
import MyAttachmentList = require('./Views/Attachment/MyAttachmentList');

// un-used, but we want to import them anyways
import AddressField = require('./Fields/AddressField');
import MultiCurrencyField = require('./Fields/MultiCurrencyField');
import NameField = require('./Fields/NameField');
import PicklistField = require('./Fields/PicklistField');
import RecurrencesField = require('./Fields/RecurrencesField');
import RelatedContextWidget = require('./Views/RelatedContextWidget');
import RelatedEditWidget = require('./Views/RelatedEditWidget');
import Action = require('./Action');
import Format = require('./Format');
import Template = require('./Template');
import Validator = require('./Validator');
import Environment = require('./Environment');
import Utility = require('./Utility');

var __unused__ = AddressField;
__unused__ = MultiCurrencyField;
__unused__ = NameField;
__unused__ = PicklistField;
__unused__ = RecurrencesField;
__unused__ = RelatedContextWidget;
__unused__ = RelatedEditWidget;
__unused__ = Action;
__unused__ = Format;
__unused__ = Template;
__unused__ = Validator;
__unused__ = Environment;
__unused__ = Utility;

/**
 * @class crm.ApplicationModule
 *
 * @extends argos.ApplicationModule
 * @requires argos.Calendar
 * @requires argos.RelatedViewManager
 * @requires argos.RelatedViewWidget
 * @requires argos.List
 * @requires argos.Views.Signature
 * @requires argos.Views.FileSelect
 * @requires argos.SearchWidget
 *
 */
var __class = declare('crm.ApplicationModule', [ApplicationModule], {
    searchText: 'Lookup',
    loadViews: function() {
        this.inherited(arguments);

        this.registerView(new Calendar({
            expose: false
        }));

        this.registerView(new Signature({
            expose: false
        }));

        this.registerView(new Login());
        this.registerView(new LogOff());

        this.registerView(new LeftDrawer(), query('.left-drawer')[0]);
        this.registerView(new RightDrawer(), query('.right-drawer')[0]);

        this.registerView(new Help());
        this.registerView(new Settings());
        this.registerView(new Configure());
        this.registerView(new MetricConfigure());
        this.registerView(new MetricFilterLookup());
        this.registerView(new PickList());
        this.registerView(new SelectList());
        this.registerView(new SpeedSearchList());
        this.registerView(new AddAccountContact());
        this.registerView(new AreaCategoryIssueLookup());
        this.registerView(new ExchangeRateLookup());
        this.registerView(new FileSelect());

        this.registerView(new NameEdit());
        this.registerView(new TextEdit());
        this.registerView(new AddressList({
            id: 'address_related',
            expose: false,
            defaultSearchTerm: function() {
                return '';
            }
        }));
        this.registerView(new AddressEdit());

        this.registerView(new AccountList());
        this.registerView(new AccountDetail());
        this.registerView(new AccountEdit());
        this.registerView(new AccountList({
            id: 'account_related',
            expose: false,
            groupsEnabled: false,
            defaultSearchTerm: function() {
                return '';
            }
        }));

        this.registerView(new CalendarMonthView());
        this.registerView(new CalendarWeekView());
        this.registerView(new CalendarDayView());

        // Charts
        this.registerView(new GenericBar({ expose: false }));
        this.registerView(new GenericLine({ expose: false }));
        this.registerView(new GenericPie({ expose: false }));

        this.registerView(new CompetitorList({
            id: 'competitor_related',
            expose: false,
            defaultSearchTerm: function() {
                return '';
            }
        }));

        this.registerView(new ContactList());
        this.registerView(new ContactDetail());
        this.registerView(new ContactEdit());
        this.registerView(new ContactList({
            id: 'contact_related',
            expose: false,
            groupsEnabled: false,
            defaultSearchTerm: function() {
                return '';
            }
        }));

        this.registerView(new ContractList({
            id: 'contract_related',
            expose: false,
            defaultSearchTerm: function() {
                return '';
            }
        }));

        this.registerView(new ErrorLogList());
        this.registerView(new ErrorLogDetail());

        this.registerView(new EventEdit());
        this.registerView(new EventList({expose: false}));
        this.registerView(new EventDetail());
        this.registerView(new EventList({
            id: 'event_related',
            expose: false,
            defaultSearchTerm: function() {
                return '';
            }
        }));

        this.registerView(new GroupsSelector());

        this.registerView(new OpportunityEdit());
        this.registerView(new OpportunityQuickEdit());
        this.registerView(new OpportunityList());
        this.registerView(new OpportunityDetail());
        this.registerView(new OpportunityList({
            id: 'opportunity_related',
            expose: false,
            groupsEnabled: false,
            defaultSearchTerm: function() {
                return '';
            }
        }));

        this.registerView(new OpportunityContactEdit());
        this.registerView(new OpportunityContactList());
        this.registerView(new OpportunityContactDetail());
        this.registerView(new OpportunityContactList({
            id: 'opportunitycontact_related',
            expose: false,
            defaultSearchTerm: function() {
                return '';
            }
        }));

        this.registerView(new OpportunityProductList({
            id: 'opportunityproduct_related',
            expose: false,
            defaultSearchTerm: function() {
                return '';
            }
        }));

        this.registerView(new OpportunityProductDetail({
            id: 'opportunityproduct_detail',
            expose: false
        }));

        this.registerView(new OpportunityProductEdit({
            id: 'opportunityproduct_edit',
            expose: false
        }));

        this.registerView(new LeadEdit());
        this.registerView(new LeadList());
        this.registerView(new LeadDetail());
        this.registerView(new LeadList({
            id: 'lead_related',
            expose: false,
            groupsEnabled: false,
            defaultSearchTerm: function() {
                return '';
            }
        }));

        this.registerView(new TicketList());
        this.registerView(new TicketDetail());
        this.registerView(new TicketEdit());
        this.registerView(new TicketList({
            id: 'ticket_related',
            expose: false,
            groupsEnabled: false,
            defaultSearchTerm: function() {
                return '';
            }
        }));

        this.registerView(new TicketActivityList());
        this.registerView(new TicketActivityDetail());
        this.registerView(new TicketActivityEdit());
        this.registerView(new TicketActivityRateLookup());
        this.registerView(new TicketActivityList({
            id: 'ticketactivity_related',
            expose: false,
            defaultSearchTerm: function() {
                return '';
            }
        }));

        this.registerView(new TicketActivityItemList());
        this.registerView(new TicketActivityItemDetail());
        this.registerView(new TicketActivityItemList({
            id: 'ticketactivityitem_related',
            expose: false,
            defaultSearchTerm: function() {
                return '';
            }
        }));

        this.registerView(new ActivityDetail());
        this.registerView(new ActivityEdit());
        this.registerView(new ActivityComplete());
        this.registerView(new ActivityTypesList());
        this.registerView(new ActivityList({
            id: 'activity_related',
            expose: false,
            defaultSearchTerm: function() {
                return '';
            }
        }));

        this.registerView(new MyActivityList());
        this.registerView(new ActivityRecurring());

        this.registerView(new HistoryDetail());
        this.registerView(new HistoryList());
        this.registerView(new HistoryEdit());
        this.registerView(new HistoryList({
            id: 'history_related',
            expose: false,
            groupsEnabled: false,
            defaultSearchTerm: function() {
                return '';
            }
        }));

        this.registerView(new CalendarAccessList({
            expose: false
        }));

        this.registerView(new UserList({
            expose: false
        }));

        this.registerView(new OwnerList({
            expose: false
        }));

        this.registerView(new ProductList({
            id: 'product_related',
            expose: false,
            defaultSearchTerm: function() {
                return '';
            }
        }));

        this.registerView(new ProductProgramList({
            id: 'productprogram_related',
            expose: false,
            defaultSearchTerm: function() {
                return '';
            }
        }));

        this.registerView(new LeadSourceList({
            expose: false
        }));

        this.registerView(new TicketUrgencyLookup({
            expose: false
        }));

        this.registerView(new ViewAttachment());
        this.registerView(new AddAttachment());
        this.registerView(new MyAttachmentList());
        this.registerView(new AttachmentList({
            id: 'account_attachment_related',
            expose: false,
            defaultSearchTerm: function() {
                return '';
            }
        }));
        this.registerView(new AttachmentList({
            id: 'contact_attachment_related',
            expose: false,
            defaultSearchTerm: function() {
                return '';
            }
        }));
        this.registerView(new AttachmentList({
            id: 'lead_attachment_related',
            expose: false,
            defaultSearchTerm: function() {
                return '';
            }
        }));
        this.registerView(new AttachmentList({
            id: 'ticket_attachment_related',
            expose: false,
            defaultSearchTerm: function() {
                return '';
            }
        }));
        this.registerView(new AttachmentList({
            id: 'opportunity_attachment_related',
            expose: false,
            defaultSearchTerm: function() {
                return '';
            }
        }));
        this.registerView(new AttachmentList({
            id: 'activity_attachment_related',
            expose: false,
            defaultSearchTerm: function() {
                return '';
            }
        }));
        this.registerView(new AttachmentList({
            id: 'history_attachment_related',
            expose: false,
            defaultSearchTerm: function() {
                return '';
            }
        }));
    },
    loadToolbars: function() {
        this.inherited(arguments);

        this.registerToolbar(new MainToolbar({
            name: 'tbar'
        }));

        this.registerToolbar(new UpdateToolbar({
            name: 'updatebar'
        }));
    },
    loadCustomizations: function() {
        this.loadBaseCustomizations();
    },
    loadBaseCustomizations: function() {
        lang.extend(List, {
            expose: true,
            getSecurity: function() {
                return (this.expose && this.security); // only check security on exposed views
            }
        });

        lang.extend(SearchWidget, {
            searchText: this.searchText
        });
    },
    loadAppStatPromises: function() {
        this.registerAppStatePromise(function() {
            return App.requestUserDetails();

        });
        this.registerAppStatePromise(function() {
            return App.requestUserOptions();
        });
        this.registerAppStatePromise(function() {
            return App.requestSystemOptions();
        });
    }
});

lang.setObject('Mobile.SalesLogix.ApplicationModule', __class);
export = __class;
