var Widget = require('./widget.js');
var w = new Widget();

w.on('append', function (target) {
    console.log('appended to: ' + target.outerHTML);
});

w.appendTo('#container');
