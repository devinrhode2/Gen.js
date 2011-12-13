/* Gen.js: some stupid simple javascript functions
 * Assumes you aren't using jQuery
 * By Devin Rhode @DevinRhode2 */

/* GET Example Call:
 * GET('http://thescouapp.com/X/genjs.json', function(response){
 *   console.error(response);
 * });
 *
 * Notes:
 * May run into issues with ajax call being cached.
 * A third options param would be nice to handle this and other things.
 * Alternatively, storing settings for GET within itself, like GET.cache = false would be great too */
function GET(url, callback) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET",url + '?nocache='+Date.now() ,true);
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


/* Example: 
 * POST('example.php', 'key=val&note=yeah'); 
 * -- data may also work as a javascript object, haven't tried this */
function POST(url, data, callback) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST",url + '?nocache='+Date.now() ,true);
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

/* each: Call action() on each item in an array
 * Example:
 * var arr = [1, 2, 3];
 * each(arr, console.error); */ 
function each(darnArray, action) {
  var numItems = darnArray.length;
  for (var i = 0; i < numItems; i++) {
    action(darnArray[i]);
  }
}

/* has: Does a url have a certain substring inside it?
 * Example:
 * has.url = location.href;
 * if (has('https://')) {
 *   console.error('This is a normal secure page!');
 * } */
function has(string) {
  if (typeof has.url === 'undefined') {
    alert('you need to set has.url to a url.');
  } else {
    if (has.url.indexOf(string) > -1) {
      return true;
    } else {
      return false;
    }
  }
}


