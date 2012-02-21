/**
 * has: Does a url have a certain substring inside it?
 * Example:
 * if (url.has('https://')) {
 *   console.error('This is a normal secure page!');
 * }
 */
String.prototype.has = function(string) {
  if (this.indexOf(string) > -1) {
      return true;
  } else {
      return false;
  }
};

/**
 * each as a method on Array - Call .action() on each item in an array
 * Example:
 * var arr = [1, 2, 3];
 * arr.each(console.error);
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
  var numItems = this.length;
  var start = 0;
  for (; start < numItems ;start++) {
    functionObject(this[start]);
  }
};