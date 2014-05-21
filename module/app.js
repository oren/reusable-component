var Widget = require('app-widget');
var w = new Widget();

// app-widget can emit events
w.on('append', function (target) {
    console.log('appended to: ' + target.outerHTML);
});

// calling some functions on app-widget
w.appendTo('#container');
w.setName('widget');
w.setMessage('I live in node_modules/app-widget folder');

