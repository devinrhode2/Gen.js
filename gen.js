/**
 * has: Does a string have a certain substring inside it?
 * Example:
 * if ('http://google.com'.has('https://')) {
 *   secure = true;
 * }
 */
String.prototype.has = function(string) {
  if (tyepof string !== 'String') {
    throw '.has only takes a string object as a parameter, and received an item of type ' + typeof string + 
      'Check the console to see what was received.';
    return false;
  }
  if (this.indexOf(string) > -1) {
      return true;
  } else {
      return false;
  } //could just return the boolean > expression, but this is more readible.
};

/**
 * each as a method of an Array - Call some function on each item in an array
 * Example:
 * [1, 2, 3].each(function(index){
 *   //this code blocked will be called 3 times, one time index equals 1, 2, and then 3
 * });
 */ 
Array.prototype.each = function(functionObject) {
  //validation
  if (this.length === 0) {
    console.error('Array is empty, doing nothing.');
    return 'Array is empty, doing nothing.';
  }
  if (typeof functionObject !== 'function') {
    throw '.each was called with a non-function object to call on each array item. Failing.';
    return false;
  }
  var numItems = this.length,
      start = 0;
  for (; start < numItems ;start++) {
    functionObject(this[start]);
  }
};
