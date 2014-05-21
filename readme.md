# Reusable Components using Browserify

index.html
```
<html>
  <body>
    <div id='container'></div>
    <script src="bundle.js"></script>
  </body>
</html>
```

app.js
```
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
```

```
browserify app.js > bundle.js
```

outputs this html
```
<html>
  <head></head>
  <body>
      <div id="container">
        <div class="widget">
          <h1 class="name">widget</h1>
          <div class="msg">I live in node_modules/app-widget folder</div>
        </div>
      </div>

      <script src="bundle.js"></script>
  </body>
</html>
```
