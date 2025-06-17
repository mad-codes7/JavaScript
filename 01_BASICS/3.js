//data-types_conversion
let age ="33"
let a = 1100
let age2 = Number(age)
let age3 = Boolean(a)
let age4 = String(a)
// console.log(typeof age);
// console.log(typeof age2);
// console.log(age3);
// console.log(typeof age4);

let sh = "44abc"
let sh2 = Number(sh)
console.log(typeof sh2);
console.log( sh2); // =>NaN{Not a Number}
/*
"33"=>33
"33abc"=>NaN
null=>0
undefined=>NaN
*/

/*
1 =>true
0 =>false
-0 =>false
NaN =>false
any num =>true
"" => false
"bcew" =>true
"0" =>true

*/