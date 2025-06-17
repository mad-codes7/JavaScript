const balance =400 //automatic detection of data type as a number

const newBalance = new Number(400)//Number object

// console.log( balance);
// console.log( newBalance); // =>Object
// console.log(typeof balance);
// console.log(typeof newBalance);


// console.log(newBalance.toString()); //converted to string
// console.log(newBalance.toFixed(2)); //format float

// const num =23.789
// console.log(num.toPrecision(2));
// console.log(num.toPrecision(3));
// console.log(num.toPrecision(4));//toPrecision return a string



//+++++++++++++++++++++++---------MATHS----------------+++++++++++++++++++++

// console.log(Math.PI.toFixed(2));
// console.log(Math.abs(-8));
// console.log(Math.abs(22));

// console.log(Math.round(4.3));
// console.log(Math.round(4.49));
// console.log(Math.round(4.5));
// console.log(Math.round(4.55));
// console.log(Math.round(4.7));


// console.log(Math.floor(4.2));
// console.log(Math.ceil(4.2));// just opposite of GIF fun

// console.log(Math.min(2,4,6,5,1));
// console.log(Math.max(2,4,6,5,1));

// console.log(Math.floor(Math.random().toFixed(5)*10000));


//values b/w 10 &20

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1)+min));






