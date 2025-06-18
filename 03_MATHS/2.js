//date&time in js
let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toJSON())

// let myDate1=new Date(2006,7,15)
// console.log(myDate1.toDateString());

// let myDate1=new Date(2006,7,15,5,10,48)
// console.log(myDate1.toLocaleString());

// let date = new Date("2006-08-15")
// let date1 = new Date("15-08-2006") ==>invalid date
// console.log(date.toLocaleDateString());
// console.log(date1.toLocaleDateString());

//mm-dd-yyyy format
let date = new Date("08-15-2006")
// console.log(date.toLocaleDateString());
// console.log(date.getTime());


//TimeStamp
let currentDate = Date.now()
// console.log(currentDate);

//Time in second, currently time is visible in miliseconds
// console.log(Math.floor(Date.now()/1000));

let myDat = new Date()
console.log(myDat.getDate());
console.log(myDat.getDay());
console.log(myDat.getMonth()+1);






