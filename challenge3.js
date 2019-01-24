// ***********************
// Challenge Assessment 3
// ***********************

// Using only JS, take an object with various properties.  Then create a new object that switches the keys and values.
// Example:
// Input:
// originalObject = {
//  age: 19,
//  name: 'Luke Skywalker',
//  eyeColor: 'blue',
//  isJedi: true
// };
// Output:
// newObject = {
//  19: 'age',
//  'Luke Skywalker': 'name',
//  blue: 'eyeColor',
//  true: 'isJedi'
// };

originalObject = {
    age: 19,
    name: 'Luke Skywalker',
    eyeColor: 'blue',
    isJedi: true
};

let reverseObject = (originalObject) => {
    let reversed = {}
    Object.keys(originalObject).forEach((key) => {
        reversed [originalObject[key]] = reversed[originalObject[key]] || [];
        reversed [originalObject[key]].push(key);
    }); console.log(reversed)
}
    


// function swap(originalObject){
//     var ret = {};
//     for(var key in originalObject){
//       ret[originalObject[key]] = key;
//     }
//     console.log(ret);
//   }

// var invert = function(originalObject){
//     var newObject = {}
//     for (var prop in originalObject){
//         if(originalObject.hasOwnProperty(prop)){
//             newObject[originalObject[prop]] = prop;
//         }
//     } 
//     return newObject
// }

// invert(originalObject)
// console.log(originalObject)