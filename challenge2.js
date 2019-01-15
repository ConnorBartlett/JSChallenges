// ***********************
// Challenge Assessment 2
// ***********************

// Using JS only, take an array of numbers (i.e. an array that lists numbers between 1 and 10).  Create two arrays from this original one, where one array list all of the even numbers, and the second lists all of the odd.
// Example:
// Input:
// originalArray = [1,2,3,4];
// Output:
// evenArray = [2,4];
// oddArray = [1,3];



//Interation 3

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = [];
let odd = [];

for (i of list){
    if (i % 2 == 0){
        even.push(i)
    } else{
        odd.push(i)
    }
}

console.log(even)
console.log(odd)
