(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{284:function(module,exports){module.exports='<!DOCTYPE html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\r\n    \r\n    <title>Document</title>\r\n   \r\n</head>\r\n<body>\r\n\r\n\r\n<form action="/action_page.php">\r\n\x3c!-- Unchecked --\x3e\r\n<input class="ps-checkbox" type="checkbox" name="checkbox1" value="Primarycheckbox"> <label>Checkbox</label><br>\r\n\r\n\r\n</form>\r\n    <script>\r\n// Make the checkbox indeterminate via JavaScript\r\nvar checkbox = document.getElementById("Indeterminate");\r\ncheckbox.indeterminate = true;\r\n<\/script>\r\n</body>\r\n</html>'},285:function(module,exports,__webpack_require__){__webpack_require__(286),__webpack_require__(390),module.exports=__webpack_require__(391)},391:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(11),__webpack_require__(22),__webpack_require__(19),__webpack_require__(12),__webpack_require__(30);var _storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(283),_storybook_html__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(42);__webpack_require__(542),__webpack_require__(562);Object(_storybook_html__WEBPACK_IMPORTED_MODULE_6__.addDecorator)(_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_5__.withA11y);var req=__webpack_require__(618);Object(_storybook_html__WEBPACK_IMPORTED_MODULE_6__.configure)(function loadStories(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(97)(module))},618:function(module,exports,__webpack_require__){var map={"./Form/button.stories.js":619,"./Form/checkbox.stories.js":621,"./index.stories.js":638};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=618},619:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"withStorySource",function(){return withStorySource}),__webpack_require__.d(__webpack_exports__,"__STORY__",function(){return __STORY__}),__webpack_require__.d(__webpack_exports__,"__ADDS_MAP__",function(){return __ADDS_MAP__});var _storybook_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(42),withStorySource=__webpack_require__(183).withStorySource,__STORY__="import { storiesOf } from '@storybook/html';\r\n\r\nstoriesOf('Button', module)\r\n  .addParameters({\r\n    backgrounds: [\r\n      { name: 'twitter', value: '#00aced', default: true },\r\n      { name: 'facebook', value: '#3b5998' },\r\n    ],\r\n  })\r\n  .add('with text', () => '<button>Click me</button>')\r\n  .add('with text2', () => '<button>Click me</button>')\r\n  .add('with text3', () => '<button>Click me</button>')\r\n  .add('with text4', () => '<button>Click me</button>')\r\n  .add('with text7', () => '<button>Click me</button>');\r\n",__ADDS_MAP__={"button--with-text7":{startLoc:{col:7,line:14},endLoc:{col:54,line:14}},"button--with-text4":{startLoc:{col:7,line:13},endLoc:{col:54,line:13}},"button--with-text3":{startLoc:{col:7,line:12},endLoc:{col:54,line:12}},"button--with-text2":{startLoc:{col:7,line:11},endLoc:{col:54,line:11}},"button--with-text":{startLoc:{col:7,line:10},endLoc:{col:53,line:10}}};Object(_storybook_html__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Button",module).addDecorator(withStorySource("import { storiesOf } from '@storybook/html';\r\n\r\nstoriesOf('Button', module)\r\n  .addParameters({\r\n    backgrounds: [\r\n      { name: 'twitter', value: '#00aced', default: true },\r\n      { name: 'facebook', value: '#3b5998' },\r\n    ],\r\n  })\r\n  .add('with text', () => '<button>Click me</button>')\r\n  .add('with text2', () => '<button>Click me</button>')\r\n  .add('with text3', () => '<button>Click me</button>')\r\n  .add('with text4', () => '<button>Click me</button>')\r\n  .add('with text7', () => '<button>Click me</button>');\r\n",__ADDS_MAP__)).addParameters({backgrounds:[{name:"twitter",value:"#00aced",default:!0},{name:"facebook",value:"#3b5998"}]}).add("with text",function(){return"<button>Click me</button>"}).add("with text2",function(){return"<button>Click me</button>"}).add("with text3",function(){return"<button>Click me</button>"}).add("with text4",function(){return"<button>Click me</button>"}).add("with text7",function(){return"<button>Click me</button>"})}.call(this,__webpack_require__(97)(module))},621:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"withStorySource",function(){return withStorySource}),__webpack_require__.d(__webpack_exports__,"__STORY__",function(){return __STORY__}),__webpack_require__.d(__webpack_exports__,"__ADDS_MAP__",function(){return __ADDS_MAP__});var _storybook_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(42),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(186),_Components_HTML_checkbox_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(284),_Components_HTML_checkbox_html__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_Components_HTML_checkbox_html__WEBPACK_IMPORTED_MODULE_2__),withStorySource=(__webpack_require__(633),__webpack_require__(183).withStorySource),__STORY__="import { storiesOf } from '@storybook/html';\r\n\r\nimport { withKnobs, text, boolean, number } from '@storybook/addon-knobs';\r\n\r\nimport checkbox from '../../Components/HTML/checkbox.html';\r\nimport '../style.css';\r\n\r\nconst storiesb = storiesOf('Form |checkbox', module);\r\nstoriesb.addDecorator(withKnobs);\r\n\r\n//storiesOf('Form |checkbox', module)\r\nstoriesb\r\n  .add('Unchecked', () => checkbox)\r\n  .add('Checked', () => {\r\n    const ch = document.createElement('input');\r\n    const checked = boolean('checked', 'true');\r\n\r\n    ch.setAttribute('type', 'checkbox');\r\n    ch.checked = checked;\r\n\r\n    return ch;\r\n  })\r\n\r\n  .add('Skeleton', () => {\r\n    const ch = document.createElement('input');\r\n    ch.setAttribute('type', 'checkbox');\r\n    return ch;\r\n  })\r\n  .add('Checkbox with Label', () => {\r\n    const ch = document.createElement('input');\r\n    ch.setAttribute('type', 'checkbox');\r\n    //ch.setAttribute('id', 'id')\r\n    // var label = document.createElement('label');\r\n    //label.setAttribute('htmlFor' , 'id');\r\n    //label.appendChild(document.createTextNode('This is the label for checkbox.'));\r\n    //label.appendChild('This is the label for checkbox.');\r\n    return ch;\r\n  });\r\n",__ADDS_MAP__={},storiesb=Object(_storybook_html__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Form |checkbox",module).addDecorator(withStorySource("import { storiesOf } from '@storybook/html';\r\n\r\nimport { withKnobs, text, boolean, number } from '@storybook/addon-knobs';\r\n\r\nimport checkbox from '../../Components/HTML/checkbox.html';\r\nimport '../style.css';\r\n\r\nconst storiesb = storiesOf('Form |checkbox', module);\r\nstoriesb.addDecorator(withKnobs);\r\n\r\n//storiesOf('Form |checkbox', module)\r\nstoriesb\r\n  .add('Unchecked', () => checkbox)\r\n  .add('Checked', () => {\r\n    const ch = document.createElement('input');\r\n    const checked = boolean('checked', 'true');\r\n\r\n    ch.setAttribute('type', 'checkbox');\r\n    ch.checked = checked;\r\n\r\n    return ch;\r\n  })\r\n\r\n  .add('Skeleton', () => {\r\n    const ch = document.createElement('input');\r\n    ch.setAttribute('type', 'checkbox');\r\n    return ch;\r\n  })\r\n  .add('Checkbox with Label', () => {\r\n    const ch = document.createElement('input');\r\n    ch.setAttribute('type', 'checkbox');\r\n    //ch.setAttribute('id', 'id')\r\n    // var label = document.createElement('label');\r\n    //label.setAttribute('htmlFor' , 'id');\r\n    //label.appendChild(document.createTextNode('This is the label for checkbox.'));\r\n    //label.appendChild('This is the label for checkbox.');\r\n    return ch;\r\n  });\r\n",__ADDS_MAP__));storiesb.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),storiesb.add("Unchecked",function(){return _Components_HTML_checkbox_html__WEBPACK_IMPORTED_MODULE_2___default.a}).add("Checked",function(){var ch=document.createElement("input"),checked=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("checked","true");return ch.setAttribute("type","checkbox"),ch.checked=checked,ch}).add("Skeleton",function(){var ch=document.createElement("input");return ch.setAttribute("type","checkbox"),ch}).add("Checkbox with Label",function(){var ch=document.createElement("input");return ch.setAttribute("type","checkbox"),ch})}.call(this,__webpack_require__(97)(module))},633:function(module,exports,__webpack_require__){var content=__webpack_require__(634);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(636)(content,options);content.locals&&(module.exports=content.locals)},634:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(635)(!1)).push([module.i,"input[type=checkbox] { \r\n    display: inline-block;\r\n    width: 20px;\r\n    height: 20px;\r\n    padding-left: 40px;\r\n    background-position: 0 0;\r\n    background-repeat: no-repeat;\r\n    line-height: 32px; }",""])},638:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"withStorySource",function(){return withStorySource}),__webpack_require__.d(__webpack_exports__,"__STORY__",function(){return __STORY__}),__webpack_require__.d(__webpack_exports__,"__ADDS_MAP__",function(){return __ADDS_MAP__});var global__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(9),_storybook_html__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(42),withStorySource=__webpack_require__(183).withStorySource,__STORY__="import { document, console } from 'global';\nimport { storiesOf } from '@storybook/html';\n\nstoriesOf('Welcome| Demo', module)\n  .add('heading', () => '<h1>Hello World</h1>')\n  .add('button', () => {\n    const button = document.createElement('button');\n    button.type = 'button';\n    button.innerText = 'Hello Button';\n    button.addEventListener('click', e => console.log(e));\n    return button;\n  })\n  .add('anotherbutton', () => '<button>hi</button>');\n",__ADDS_MAP__={"welcome-demo--anotherbutton":{startLoc:{col:7,line:13},endLoc:{col:51,line:13}},"welcome-demo--button":{startLoc:{col:7,line:6},endLoc:{col:3,line:12}},"welcome-demo--heading":{startLoc:{col:7,line:5},endLoc:{col:46,line:5}}};Object(_storybook_html__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Welcome| Demo",module).addDecorator(withStorySource("import { document, console } from 'global';\nimport { storiesOf } from '@storybook/html';\n\nstoriesOf('Welcome| Demo', module)\n  .add('heading', () => '<h1>Hello World</h1>')\n  .add('button', () => {\n    const button = document.createElement('button');\n    button.type = 'button';\n    button.innerText = 'Hello Button';\n    button.addEventListener('click', e => console.log(e));\n    return button;\n  })\n  .add('anotherbutton', () => '<button>hi</button>');\n",__ADDS_MAP__)).add("heading",function(){return"<h1>Hello World</h1>"}).add("button",function(){var button=global__WEBPACK_IMPORTED_MODULE_0__.document.createElement("button");return button.type="button",button.innerText="Hello Button",button.addEventListener("click",function(e){return global__WEBPACK_IMPORTED_MODULE_0__.console.log(e)}),button}).add("anotherbutton",function(){return"<button>hi</button>"})}.call(this,__webpack_require__(97)(module))}},[[285,1,2]]]);
//# sourceMappingURL=main.e3bfc9d1ebe11dde1712.bundle.js.map