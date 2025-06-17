//primitive string
// let str1 = "madhur"
// const str2 = "hello"
// let empty_str =""

// //creating a Sttring Object

// let str3 = new String("HEllo")
// console.log(typeof str1); //string
// console.log(typeof str3); //object


// let str="madhur"
// let str1 ="MADHUR"
// let str2="mAdhUr"
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str1.toLowerCase());
// console.log(str2.toLowerCase());
// console.log(str2.toUpperCase());


// console.log(str.charAt(3)); //indexind from 0
// console.log(str.charAt(5));


// console.log(str.indexOf("M")); //for any other value js returns -1
// console.log(str.indexOf("s"));
// console.log(str.indexOf("m"));
// console.log(str.indexOf("h"));



// let str = "madhurbiradar"
// let substring = str.substring(0,6)
// console.log(substring);

//substring & slice methods

let str= "JavaScript"
//substring can not accept negative values
// console.log(str.substring(4,10));
// console.log(str.substring(10,4)); //swaps value if start>end
// console.log(str.substring(-6,4));// automatically take 0 if start or end is zero
// console.log(str.substring(0,-6));// automatically take 0 if start or end is zero,
// here it returns emmpty str "" (0,0)

// console.log(str.slice(4)); //Script (4,10)
// console.log(str.slice(0,4)); 
// console.log(str.slice(10,4)); //"" =>empty str
// console.log(str.slice(-6,-1)); //Scrip
// console.log(str.slice(-6)); //Script
// console.log(str.slice(-6,str.length)); //Script

// let newStr ="    madhur   "
// console.log(newStr);
// console.log(newStr.trim()); //to remove unwanted spacing in a string

// let url ="https://madhur.com/madhur%20biradar"
// console.log(url.replace("%20","-"));//to replace any part of string with other substring
// console.log(url.includes("mad"));//returns a boolean

let userName ="madhur_biradar_20"
console.log(userName.split("_"));//converts string into an array based on splitting arg








