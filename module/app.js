var Widget = require('app-widget');
var w = new Widget();

w.on('append', function (target) {
    console.log('appended to: ' + target.outerHTML);
});

w.appendTo('#container');
w.setName('widget');
w.setMessage('I live in node_modules/app-widget folder');

