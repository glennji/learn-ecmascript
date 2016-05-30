/**
 * Created by glenn.mason on 27/05/2016.
 */

'use strict';

//people - array of people objects
//propName - the property name to search for prefix match
//prefix - string prefix to search for
//check String object prototype functions for useful utilities to help
var searchFunc1 = function (people, propName, prefix)  {
  let r = new Array();
  console.log(r);
  for (const p of people) {
    console.log(p[propName]);
    if(p[propName].toUpperCase().startsWith(prefix.toUpperCase())) {
      console.log("Person " + propName + " is " + p[propName]);
      r.push(p);
    }
  }
  return r;
};

// or

var searchFunc = function(people, propName, prefix) {
  return people.filter(function(p) { return p[propName].toUpperCase().startsWith(prefix.toUpperCase())});
}


/////////////////////////////////////
////// TEST CODE BELOW IGNORE ///////
/////////////////////////////////////

console.log('----- starting test-----');
var runTest = function () {
  var people = [
    { id: 1, fname: 'rudi', lname: 'simic', title: 'trainer' },
    { id: 2, fname: 'william', lname: 'keller', title: 'developer' },
    { id: 3, fname: 'ashwin', lname: 'shekar', title: 'partner' },
    { id: 4, fname: 'andrew', lname: 'debruijn', title: 'partner' },
    { id: 5, fname: 'con', lname: 'zeritis', title: 'CEO' },
    { id: 6, fname: 'mark', lname: 'brown', title: 'project manager' },
    { id: 7, fname: 'sang', lname: 'nguyen', title: 'partner' },
    { id: 8, fname: 'william', lname: 'feng', title: 'project manager' },
    { id: 10, fname: 'dennis', lname: 'lo', title: 'developer' },
    { id: 11, fname: 'dhileep', lname: 'paski', title: 'developer' },
    { id: 12, fname: 'raki', lname: 'suman', title: 'developer' }
  ];

  var ok = true;
  ok = ok && searchFunc(people, 'lname', 'S')!=undefined && searchFunc(people, 'lname', 'S').length == 3;
  console.log("1 " + ok);
  ok = ok && searchFunc(people, 'lname', 'sI').length == 1;
  console.log("2 " + ok);
  ok = ok && searchFunc(people, 'lname', 'KeLLe').length == 1;
  console.log("3 " + ok);

  if (ok) {
    console.error('CORRECT');
  }
  else {
    console.error('ERROR');
  }
};

runTest();

