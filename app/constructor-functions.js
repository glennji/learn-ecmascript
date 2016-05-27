/**
 * Created by glenn.mason on 27/05/2016.
 */
function ExampleConstructor() {

  // This double-checks that the constructor was called with 'new'
  // If not, it constructs a new object (with 'new') and returns it (i.e. rest of the function not called
  // by THIS invocation, but IS run for "child" invocation
  if (!(this instanceof ExampleConstructor)) {
    return new ExampleConstructor();
  }

  // Grab the 'this' that is the new object at construction time, and assign it to a private variable
  // Then use self.whatever for everything within this factory.
  var self = this;


  self.beep = function() {
    return self.beepLoudly('beep ' + boop());
  };

  self.beepLoudly = function(s) {
    return s.toUpperCase();
  }

  var boop = function() {
    return 'muthafucker';
  }
}

// 'new' creates an empty object and assigns it to 'this' ... which is then available to ExampleConstructor()
var myTest = new ExampleConstructor();

var myTest2 = ExampleConstructor();

console.log(myTest);
// console.log(myTest2.beep());
console.log(myTest.beep());


function log_and_do(fn, args) {
  console.log('Function and args ' + fn.name + ' ' + args);
  fn.apply(this, args);
}


function meep() { for (i of arguments) { console.log("woooooooot, " + i)} }
log_and_do(meep, [1, 2, 3]);

function log_wrapper(fn) {
  return function() {
    console.log("woohoo!" + arguments);
    return fn.apply(fn, arguments);
  }
}

wrapper = log_wrapper(meep);
wrapper(1, 2, 3)