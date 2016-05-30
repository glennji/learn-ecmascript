/**
 * Created by glenn.mason on 27/05/2016.
 */

/* jshint globalstrict: true */
'use strict';

var instrument = function (obj, cb) {
  var self = this;
  console.log();
  var names = Object.getOwnPropertyNames(obj);
  console.log('property names are ' + names);
  
  function add_property_proxy(obj, p) {
    if (!p.startsWith("_")) {
      obj["_" + p] = obj[p];
      Object.defineProperty(obj, p, {
        get: function() {
          console.log("you want?");
          return obj['_' + p];
        },
        set: function(v) {
          console.log("setting " + p);
          cb(obj, p, obj['_' + p], v);
          obj['_' + p] = v;
        },
        enumerable: true,
        configurable: true
      });
    }
  }

  // another exercise
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)){
      add_property_proxy(obj, prop);
    }
  }
};



/////////////////////////////////////
////// TEST CODE BELOW IGNORE ///////
/////////////////////////////////////

var runTest = function () {

  var aok = false;
  var bok = false;

  var myCB = function (ob, prop, oldValue, newValue) {
    console.log('callback ' + prop + ' ' + oldValue + ' ' + newValue);
    if (prop === 'a' && oldValue === 'rudi' && newValue === 'fred') {
      aok = true;
    }
    if (prop === 'b' && oldValue === 123 && newValue == 456) {
      bok = true;
    }

  };

  var testOb = {
    a: 'rudi',
    b: 123
  };

  console.log(testOb.a);

  instrument(testOb, myCB);
  console.log(testOb.a);

  testOb.a = 'fred';
  testOb.b = 456;

  if (aok && bok) {
    console.log('CORRECT');
  }
  else {
    console.error('ERROR');
  }
};

runTest();