/* By Devin Rhode (devinrhode2@gmail.com)
 * General library-esque functions!
 *
 * $.class is a wrapper on document.getElementsByClassName
 * $.id is a wrapper on getElementById
 * log('things like', console.log);
 * fail('When some bad shit occured.');
 *
 * has: Does a string have a certain substring inside it?
 * Example:
 * if ('http://google.com'.has('https://')) {
 *   console.log('This is a secure page!');
 * } 
 */

(function includeJSStrict(){
'use strict';

window.$ = window.$ || {};
$.class = function getElementsByClassNameWrapper(elements){
  return document.getElementsByClassName(elements);
};
$.id = function getElementById(elements){
  return document.getElementById(elements);
};
HTMLElement.prototype.class = HTMLElement.prototype.getElementsByClassName;
HTMLElement.prototype.id = HTMLElement.prototype.getElementById;
HTMLElement.prototype.tag = HTMLElement.prototype.getElementsByTagName;

//from HTML5 boilerplate. Paul Irish. Is. A. God.
window.log = function f() {
  log.history = log.history || [];
  log.history.push(arguments);
  if (console) { // with if (this.console) I was getting "Uncaught TypeError: Cannot read property 'console' of undefined"
    var args = arguments;
    var newarr;

    try {
        args.callee = f.caller;
    } catch(e) {

    }

    newarr = [].slice.call(args);

    if (typeof console.log === 'object') {
        log.apply.call(console.log, console, newarr);
    } else {
        console.log.apply(console, newarr);
    }
  }
};

//pretty specific

window.appName = 'thred';
window.fail = function failFunc(message){
  fail.history = fail.history || [];
  fail.history.push(arguments);
  alert(appName + ': ' + message);
  throw appName + ': ' + message;
};

String.prototype.has = function StringPrototypeHas(string) {
  return this.indexOf(string) > -1;
};


var ajax = {};
ajax.x = function() {
  return new XMLHttpRequest;
};
ajax.send = function(u, f, m, a) {
  var x = ajax.x();
  x.open(m, u, true);
  x.onreadystatechange = function() {
    if(x.readyState == 4) {
      f(x.responseText, x);
    }
  };
  if(m === "POST") {
    x.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
  }
  x.send(a)
};
window.POST = function POST(url, func, args) {
  ajax.send(url, func, "POST", args);
};

window.GET = function GET(url, callback){
  ajax.send(url,callback,'GET');
};

window.GETXml = function GETXml(u, f){
  var x = new XMLHttpRequest();
  x.open('GET', u, true);
  x.onreadystatechange = function() {
    if(x.readyState == 4) {
      f(x.responseXML);
    }
  };
  x.send()
};



//totally extension specific
window.style = function style(cssString){
  var s = document.createElement('style');
  s.innerHTML = cssString;
  s.setAttribute('from', 'an extension');
  document.documentElement.appendChild(s);
};

$.createElement = function createElement(element, attributes){
  var element = document.createElement(element);
  for (var attr in attributes) {
    if (attr === 'style') { //only due to a chrome bug
      element.setAttribute('style', attributes[attr]);
    } else {
      element[attr] = attributes[attr];
    }
  }
  return element;
};



}());