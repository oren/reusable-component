var fs = require('fs');
var domify = require('domify');
var inherits = require('inherits');
var EventEmitter = require('events').EventEmitter;

var html = fs.readFileSync(__dirname + '/widget.html', 'utf8');

inherits(Widget, EventEmitter);
module.exports = Widget;

function Widget (opts) {
    if (!(this instanceof Widget)) return new Widget(opts);
    this.element = domify(html);
}

Widget.prototype.appendTo = function (target) {
    if (typeof target === 'string') target = document.querySelector(target);
    console.log('elem', this.element);
    target.appendChild(this.element);
    this.emit('append', target);
};

Widget.prototype.setName = function (name) {
      this.element.querySelector('.name').textContent = name;
}

Widget.prototype.setMessage = function (msg) {
      this.element.querySelector('.msg').textContent = msg;
}
