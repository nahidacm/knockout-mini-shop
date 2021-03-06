// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app',
        knockout: 'knockout-3.4.2',
        json: 'json'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
require(['knockout','app/model'], function(ko,model) {
    ko.applyBindings(new model())
});