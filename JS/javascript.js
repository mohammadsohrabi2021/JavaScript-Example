// //سوال اول

// let number = prompt("Please enter a number...!");
// let out = number ** 0.5;
// let out_2 = number ** 2;
// console.log(out); //خروجی به صورت رادیکالی
// console.log(out_2); //خروجی به توان 2

// //سوال دوم
// let a = prompt("Please enter the value of the first side of the triangle...!");
// let b = prompt("Please enter the value of the second side of the triangle...!");
// let c = prompt("Please enter the value of the third side of the triangle...!");

// let s , h = (1.7 / 2) * a;
// if ( a == 0 && b == 0 && c == 0) {
//     console.log("!!!!خطا لطفا عددی غیر صفر وارد کنید");

// }

// else if (a === b && b === c && a !== 0) {

//   console.log("مثلث متساوی الاضلاع است");
//   s = (h * c) / 2;
//   console.log(s,": مساحت شکل ");
// }

// else if (a === b && b > c && a !== 0) {
//   console.log(" مثلث متساوی ‌الساقین");
//   s =(h * c) / 2;
//   console.log(s,": مساحت شکل ");
// }

// else if (a ** 2 + b ** 2 == c ** 2 && c !== 0) {
//   console.log("  مثلث قائم الزاویه");
//   s =(h *c) / 2;
//   console.log(s,": مساحت شکل ");
// }
// else{
//     console.log("مقادیر نادرست وارد کردید ");
// }

// //سوال چهارم
// let km =prompt("یه مقداری را وارد کنید بر حسب کیلومتر.");
// let m = km * 0.62137;
// console.log('کیلومتر معادل',km,m,'مایل است');

// //سوال پنجم
// document.getElementById("random").innerHTML=Math.floor(Math.random()*10000);

// // //سوال ششم

// let Number =prompt(" لطفا یک عدد وارد کنید..... ");
// if (Number % 2 == 0) {
//     console.log("این عدد زوج است");
// } else {
//     console.log("این عدد فرد است");
// }

// //سوال هفتم
// let a = prompt("لطفا عدد اول رو وارد کنید ...");
// let b = prompt("لطفا عدد دوم رو وارد کنید ...");
// let c = prompt("لطفا عدد سوم رو وارد کنید ...");
// if (a===b && b===c) {
//     console.log("اعداد مساوی وارد کرده اید");
// }
// else if (a > b &&  a > c) {
//     console.log(a,"این عدد بزرگ است");
// }
// else if (b > a && b > c) {
//     console.log(b,"این عدد بزرگ است");
// }
// else{
//     console.log(c,"این عدد بزرگ است");
// }

// //سوال هشتم
// let number =prompt("لطفا یک عدد وارد کنید..!");

// let isprime = true;

// let i = 2;
// while (i<number) {
//     if (number %  i== 0) {
//         isprime =false
//         break;
//     }
//     i++;
// }
// console.log(number ,isprime);

// // سوال نهم

// function isPrime(x) {
//   for (let i = 2; i <= x / 2; i++) {
//     if (x % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function findPrimes(x) {
//   for (let i = 2; i <= x; i++) {
//     if (isPrime(i)) {
//       console.log(i, "isPrime");
//     }
//   }
// }

// findPrimes(10);

// //سوال دهم
// let n = prompt("لطفا یک عدد وارد کنید..!");
// let s =1;
// while (n > 0) {
//  s *= n--;
// }
// console.log(s);

// //سوال یازدهم
// const number =parseInt(prompt("لطفا یک عدد وارد کنید.."));
 
//  for (let i = 1; i <= 10; i++) {
//     const result = i * number;
//     console.log(`${number} * ${i} = ${result}`);
//  }

// // سوال دوازدهم
// const number = parseInt(prompt("لطفا یک عدد رو وارد کنید.."));
// let n1 = 0 , n2 = 1 , next;


// for (let i = 0; i <= number; i++) {
//    console.log(n1);
//    next =n1+ n2;
//    n1 = n2;
//    n2 = next ;
// }


// //سوال سیزدهم

// let a = parseInt(prompt("لطفا یک عدد رو وارد کنید.."));
// let b = parseInt(prompt("لطفا یک عدد رو وارد کنید.."));
// let c ;
// let operator =("+","-","/","*") ;
// if (operator == "+") {
//     console.log( c = a + b);
// }
// //سوال15
// var str =" mohammad sohrabi this in";
// var word =str.split(' ');
// console.log(word);
// word.sort()
// for(let x of word)  console.log(x);
// for(let x in word)  console.log(x);



