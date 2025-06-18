//JS arrays are resizable and can have multiple types of data
/**
 SUMMARRY:

1. Array is written in brackets [  ].
2.Array data type is an object.
3.Array can contain different data types . i.e string,number,boolean,array etc.
4. Array is zero based indexing. It starts with zero.
5. Once changed its original value will also change beacause it is non primitive (refrence) type.
 */

// const array = [1,5,"DAVID",true]
// console.log(array[3]);

//another way to create array
// const arr=[1,2,3]
// const arr2=new Array(1,2,3)
// console.log(typeof(arr));
// console.log(typeof(arr2));

// const arr=[1,2,3]
// console.log(arr.length);


//++++++++++++++++++++++-------ARRAY_METHODS---------+++++++++++++++
const arr =[1,2,3,4,5]
// arr.push(6)
// console.log(arr);
// arr.pop()
// console.log(arr);
// arr.unshift(0)
// console.log(arr);
// arr.shift()
// console.log(arr);


// console.log(arr.includes(6));
// console.log(arr.includes(3));

// console.log(arr.indexOf(1));
// console.log(arr.indexOf(8)); // if any element is not present then -1 will be O/P

// const array = [1,2,3,4,5]
// const array2 = array.join()
// // console.log(array2);
// // console.log(typeof array2); //converts to string
// const array3 = array.join(" _ ")
// console.log(array3);

// const n1 = [0,1,2,3,4,5]
// console.log("A", n1);
// const n2 = n1.slice(1,3)
// console.log(n2);
// console.log("B", n1); //nothing changes in original array

const n1 = [0,1,2,3,4,5]
console.log("A", n1);
const n2 =n1.splice(1,3)
console.log(n2);
console.log("B", n1); //changes original array, also include end element in splice range






