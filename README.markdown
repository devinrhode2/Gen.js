Gen.js
=================

As of now just a two helpful javascript tidbits: String.has and Array.each.

String.has
----------

Does a given string have a substring in it?

`var url = 'http://TheScoutApp.com';`
`if (url.has('https')) alert('This is a secure url!');`


Array.each
-----------

Call a function on each item of an array, passing to it the index of the item it's being called on.

`var arr = [1, 2, 3];`
`arr.each(function(someArrayIndex){`
`  arr[someArrayIndex]++;`
`});`

Creator
---------------

Is Devin Rhode. He's OCD about stuff, and is started his career in Silicon Valley at age 19, follow him on twitter here: http://Twitter.com/DevinRhode2 and subscribe to his public posts on facebook at: http://Facebook.com/Devin.Rhode404

Throughout most of the internet, he is DevinRhode2 (here, StackOverflow, gmail, .. EVERYWHERE)