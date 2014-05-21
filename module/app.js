var Widget = require('./widget.js');
var w = new Widget();

w.on('append', function (target) {
    console.log('appended to: ' + target.outerHTML);
});

w.appendTo('#container');
w.setName('widget');
w.setMessage('I am a widget with it\'s own html file. I was built with brfs and domify and i emit events');

