/*
 * Copyright (c) 1997-2013, SalesLogix, NA., LLC. All rights reserved.
 */
define('configuration/development', ['Mobile/SalesLogix/ApplicationModule'], function(ApplicationModule) {

    return {
        modules: [
            new ApplicationModule()
        ],
        connections: {
            'crm': {
                isDefault: true,
                offline: true,
                url: 'http://localhost:3334/sdata_81hf/slx/dynamic/-/',
                json: true
            }
        },
        enableUpdateNotification: true,
        multiCurrency: false,
        enableGroups: true,
        enableHashTags: true,
        maxUploadFileSize: 40000000,
        enableConcurrencyCheck: false
    };

});
