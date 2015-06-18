 /// <reference path="../../../argos-sdk/declarations/argos.d.ts"/>

declare var Base64: any;

interface Window {
    BlobBuilder: any;
    WebKitBlobBuilder: any;
    MozBlobBuilder: any;
    MSBlobBuilder: any;
    Chart: any;
    unescape: any;
}

declare module crm {
    var Action: any
    var Aggregate: any
    var Environment: any
    var Format: any

    interface Application {
        initiateCall: any;
        initiateEmail: any;
        navigateToActivityInsertView: any;
        enableGroups: any;
        getMetricsByResourceKind: any;
        enableHashTags: boolean;
        showMapForAddress: any;
        imageFileTypes: any;
        nonViewableFileTypes: any;
        logOut: any;
        getCredentials: any;
        authenticateUser: any;
        requestUserDetails: any;
        requestUserOptions: any;
        requestSystemOptions: any;
        navigateToInitialView: any;
        navigateToHomeView: any;
        hasMultiCurrency: any;
        getBaseExchangeRate: any;
        getMyExchangeRate: any;
        canLockOpportunityRate: any;
        canChangeOpportunityRate: any;
        isNavigationFromResourceKind: any;
        speedSearch: any;
        reload: any;
        loadingText: string;
    }
}


// Re-open the argos lib, since we extended App globally
declare module argos {
    interface Application extends crm.Application {
    }
}
