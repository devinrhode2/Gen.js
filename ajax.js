/**
 * Gen.js: some stupid simple javascript functions
 * Assumes you aren't using jQuery
 * By Devin Rhode @DevinRhode2 */

/**
 * GET Example Call:
 * GET('http://thescouapp.com/X/genjs.json', function(response){
 *   console.error(response);
 * });
 *
 * Notes:
 * A third options param would be nice to handle this and other things. We could also mimic the jQuery api...
 */
function GET(url, callback) {
  var xmlhttp = new XMLHttpRequest();
  
  //prevent caching
  if (url.indexOf('?') > -1) {
    xmlhttp.open("GET",url + '&nocache='+Date.now() ,true);
  } else {
    xmlhttp.open("GET",url + '?nocache='+Date.now() ,true);
  }
  
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4) {
      if (xmlhttp.status === 200) {
        var resp = xmlhttp.responseText;
        if (typeof callback !== 'undefined') {
          try {
            if (resp.indexOf('{') === 0) {
              callback(JSON.parse(xmlhttp.responseText));
            } else {
              callback(xmlhttp.responseText);
            }
          } catch(e) { console.error(e); }
        } else {
          console.error(xmlhttp.responseText);
        }
      } else {
        console.error('GET error for: ' + url);
        console.error('xhr:');
        console.error(xmlhttp);
      }
    }
  }
  xmlhttp.send();
}

/* Simpler version
function GET(url, callback) {
  var xmlhttp = new XMLHttpRequest();
  
  //prevent caching
  if (url.indexOf('?') > -1) {
    xmlhttp.open("GET",url + '&nocache='+Date.now() ,true);
  } else {
    xmlhttp.open("GET",url + '?nocache='+Date.now() ,true);
  }
  
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4) {
      if (xmlhttp.status === 200) {
        var resp = xmlhttp.responseText;
        if (typeof callback !== 'undefined') {
          callback(xmlhttp.responseText);
        } else {
          console.error(xmlhttp.responseText);
        }
      } else {
        console.error('GET error for: ' + url);
        console.error('xhr:');
        console.error(xmlhttp);
      }
    }
  }
  xmlhttp.send();
}*/


/**
 * Example: 
 * POST('example.php', 'key=val&note=yeah'); 
 * -- data may also work as a javascript object, haven't tried this
 */
function POST(url, data, callback) {
  var xmlhttp = new XMLHttpRequest();
  
  //prevent caching
  if (url.indexOf('?') > -1) {
    xmlhttp.open("POST",url + '&nocache='+Date.now() ,true);
  } else {
    xmlhttp.open("POST",url + '?nocache='+Date.now() ,true);
  }
  
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4) {
      if (xmlhttp.status === 200) {
        var resp = xmlhttp.responseText;
        if (typeof callback !== 'undefined') {
          try {
            if (resp.indexOf('{') === 0) {
              callback(JSON.parse(xmlhttp.responseText));
            } else {
              callback(xmlhttp.responseText);
            }
          } catch(e) { console.error('caught:'); console.error(e); }
        } else {
          console.error(xmlhttp.responseText);
        }
      } else {
        console.error('POST error for: ' + url);
        console.error('xhr:');
        console.error(xmlhttp);
      }
    }
  }
  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xmlhttp.send(data);
}

/**
 * ajaxCore:
 * A private method, GET and POST are both essentially this with the GET and POST specific parts changed.
 */
function ajaxCore(method, url, second, third) {
  //data vs. callback
  if (typeof third === 'function' && typeof second === 'string') {
    var data = second;
    var callback = third;
  } else if (typeof third === 'undefined' && typeof second === 'function') {
    var callback = third;
  } else {
    alert('You, the developer, fucked up.');
  }
  
  var xmlhttp = new XMLHttpRequest();
  
  //prevent caching
  if (url.indexOf('?') > -1) {
    xmlhttp.open(method,url + '&nocache='+Date.now() ,true);
  } else {
    xmlhttp.open(method,url + '?nocache='+Date.now() ,true);
  }
    
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4) {
      if (xmlhttp.status === 200) {
        var resp = xmlhttp.responseText;
        if (typeof callback !== 'undefined') {
          try {
            if (resp.indexOf('{') === 0) {
              callback(JSON.parse(xmlhttp.responseText));
            } else {
              callback(xmlhttp.responseText);
            }
          } catch(e) { console.error('caught:'); console.error(e); }
        } else {
          console.error(xmlhttp.responseText);
        }
      } else {
        console.error(method +' error for: ' + url);
        console.error('xhr:');
        console.error(xmlhttp);
      }
    }
  }
  if (method === 'POST') {
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send(data);
  } else {
    xmlhttp.send();
  }
}

/**
 * each: Call action() on each item in an array
 * Example:
 * var arr = [1, 2, 3];
 * each(arr, console.error);
 */ 
function each(darnArray, action) {
  var numItems = darnArray.length;
  for (var i = 0; i < numItems; i++) {
    action(darnArray[i]);
  }
}

/**
 * has: Does a url have a certain substring inside it?
 * Example:
 * if (url.has('https://')) {
 *   console.error('This is a normal secure page!');
 * }
 */
window.String.prototype.has = function(string) {
  if (this.indexOf(string) > -1) {
      return true;
  } else {
      return false;
  }
};


