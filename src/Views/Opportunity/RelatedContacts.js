define('Mobile/SalesLogix/Views/Opportunity/RelatedContacts', ['Mobile/SalesLogix/Views/Contact/List'], function() {
    return dojo.declare('Mobile.SalesLogix.Views.Opportunity.RelatedContacts', [Mobile.SalesLogix.Views.Contact.List], {
        //Localization
        requestErrorText: 'Unable to submit to server',
        selectTitleText: 'Select Contact',

        //View Properties
        id: 'opportunity_relatedcontacts',
        selectView: 'contact_related',
        entityName: 'Contact',
        expose: false,

        contextEntityName: 'Opportunity',
        contextResourceKind: 'opportunities',
        targetEntityName: 'OpportunityContact',
        targetResourceKind: 'opportunityContacts',

        complete: function(){
            var view = App.getPrimaryActiveView(),
                selectionModel = view && view.get('selectionModel'),
                selections,
                value = {};
            if (selectionModel) {
                selections = selectionModel.getSelections();

                if (0 == selectionModel.getSelectionCount() && view.options.allowEmptySelection)
                    ReUI.back();

                for (var selectionKey in selections) {
                    if (this.isDuplicate(selectionKey)) return;
                    var context = App.isNavigationFromResourceKind( [this.contextResourceKind] );
                    value['$name'] = this.targetEntityName;
                    value[this.contextEntityName] = { '$key': context.key };
                    value[this.entityName] = { '$key': selectionKey };
                }
                this.insert(value);
            }
        },
        insert: function(entry) {
            var request = this.createInsertRequest();
            if (request)
                request.create(entry, {
                    success: this.onInsertSuccess,
                    failure: this.onInsertFailure,
                    scope: this
                });
        },
        onInsertSuccess: function(entry) {
            App.onRefresh({
                resourceKind: this.resourceKind
            });
            ReUI.back();
        },
        onInsertFailure: function(response, o) {
            alert(dojo.string.substitute(this.requestErrorText, [response, o]));
            Sage.Platform.Mobile.ErrorManager.addError(response, o, this.options, 'failure');
        },
        createInsertRequest: function() {
            var request = new Sage.SData.Client.SDataSingleResourceRequest(App.getService(false));
            request.setResourceKind(this.targetResourceKind);
            return request;
        },
        isDuplicate: function(key){
            var feed = this.feed['$resources'];
            for(var i=0; i<feed.length; i++)
            {
                var current = feed[i]['$key'];
                if (current === key)
                    return true;
            }
            return false;
        },
        createNavigationOptions: function() {
            var options = {
                selectionOnly: true,
                singleSelect: true,
                singleSelectAction: 'complete',
                allowEmptySelection: false,
                title: this.selectTitleText,
                tools: {
                    tbar: [{
                        id: 'complete',
                        fn: this.complete,
                        cls: 'invisible',
                       scope: this
                    },{
                        id: 'cancel',
                        side: 'left',
                        fn: ReUI.back,
                        scope: ReUI
                    }]
                }
            };
            var context = App.isNavigationFromResourceKind( [this.contextResourceKind] );

            options.queryScopeExpression = '';
            options.where = this.expandExpression(this.options.prefilter);

            return options;
        },
        navigateToAssociateView: function() {
            var view = App.getView(this.selectView),
                options = this.createNavigationOptions();
            if (view && options)
                view.show(options);
        },
        createToolLayout: function() {
            return this.tools || (this.tools = {
                'tbar': [{
                    id: 'new',
                    action: 'navigateToInsertView',
                    security: App.getViewSecurity(this.insertView, 'insert')
                },{
                    id: 'associate',
                    icon: 'content/images/icons/srch_24.png',
                    action: 'navigateToAssociateView',
                    security: App.getViewSecurity(this.insertView, 'insert')
                }]
            });
        }
    });
});