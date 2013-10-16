# inline-template

> Preprocessor to spit templates into your code on the fly. If you have this in your app's .js files:
```js
{ template: '<%= inlineTemplate("templates/myTemplate.html") %>' }
```
You can turn it into this:
```js
{ template: '<div>My Template!</div>' }
```

Use with [grunt-inline-template](http://github.com/ajoslin/grunt-inline-template) and [karma-inline-template-preprocessor](http://github.com/ajoslin/karma-inline-template-preprocessor) to use this in your apps.


### Usage (if you don't want to use the grunt or karma plugins)

```js
var inlineTemplate = require('inline-template');
var compiled = inlineTemplate.process("hello, <%= inlineTemplate('hello.html') %>!");
console.log(compiled);
// -> 'hello, <div>My Hello.html</div>'
```

### Options

```js
var inlineTemplate = require('inline-temlpate');
inlineTemplate.options = {
  base: '.', // base folder to read templates from, defaults to '.'
  doubleQuote: false // whether to escape double quotes. Defaults to escaping single quotes.
};
```
