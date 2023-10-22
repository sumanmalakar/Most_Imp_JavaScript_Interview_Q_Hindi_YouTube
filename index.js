// console.log("Hello console")

// var = block level scope and global scope
// let = block level scope
// const = block level scope

// var Name = 'suman'

// const print = () =>{
//     var Name = 'ram';
//     console.log(Name);
// }
// print();
// var Name = 'mohan'
// console.log(Name)


// let Name = 'suman'

// const print = () =>{
//     let Name = 'ram';
//     console.log(Name);
// }
// print();
// Name = 'mohan'
// console.log(Name)

// const Name = 'suman'

// const print = () =>{
//     let Name = 'ram';
//     console.log(Name);
// }
// print();
// // Name = 'mohan'
// console.log(Name)

//typeof operator
// defenition :- Typeof in JavaScript is an operator used for type checking and returns the data type of the operand passed to it. The operand can be any variable, function, or object whose type you want to find out using the typeof operator.

// const suman = true;

// console.log(typeof(suman))

// const number1 = 10;
// const number2 = 10;


// == and ===
// defenition :- Both are comparison operators. The difference between both the operators is that “==” is used to compare values whereas, “ === “ is used to compare both values and types.

// // console.log(number1 == number2) // == only check the values

// console.log(number1 === number2) // ===check the values and type as well

// Spread Operator
// defenition :- The JavaScript spread operator ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.

// const person1 = {
//     Name : 'suman',
//     age: 23,
//     gmail:'suman@gmal.com',
//     address:'indore',
//     country:'india'
// }

// const person2 = {...person1, Name:'ram',age:200}


// console.log("this is person 2 = ",person2)


// const arr1 = [10,20,30];

// const arr2 = [...arr1,40,50,60];
// console.log(arr1)
// console.log(arr2)

//call by value
// const number = (x,y) =>{
//     x = 100;
//     y = 200;
// }

// const a = 10;
// const b = 20;
// console.log("Before calling function "+a+" "+b);
// number(a,b);
// console.log("After calling function "+a+" "+b);


//call by reference
// const callByReference = (obj) =>{
//     obj.name = 'suman';
//     obj.age = 500
// }

// const obj = {
// name : 'ram',
// age:23
// }

// console.log("Before calling a function ",obj.name,obj.age)
// callByReference(obj)
// console.log("After calling a function ",obj.name,obj.age)

// selfInvoking function
// defenition :- A self-invoking function is a JavaScript function that executes immediately after it has been defined. This is done by wrapping the function in parentheses and then immediately calling it.

// (function(){
//     console.log("This is self Invoking function");
// })();


//callbacks
// defenition :- A JavaScript callback is a function which is to be executed after another function has finished execution. A more formal definition would be - Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function.

// function greet(name,callback){
//     console.log("Hello Mr "+name);
//     callback();
// }

// function hello(){
//     console.log("This is callback function 1");
// }
// function hello2(){
//     console.log("This is callback function 2");
// }

// greet('ram',hello)

// app = 100
// friend = 100 (udhar diya)

// paisa lauta dega
// paisa nhi dega


//Promises
//defenition :- A promise in JavaScript is an object that represents the eventual completion of an asynchronous operation and its resulting value. It is used to handle asynchronous operations in a more predictable way.

// promise has three stage

// 1.) Pending
// 2.) Fulfilled -> .then  [resolve]
// 3.) Reject   -> .catch  [reject]

// let p = new Promise((resolve,reject)=>{

//     let number = "30"
//     if(number === 30){
//       resolve('This is a number')
//     }else{
//         reject('This is not a number');
//     }
// })
// p.then((msg)=>console.log(msg)).catch((err)=>console.log(err))


//callback hell
// const userLeft = false;
// const watchingAdd = true;

// function watchTutorial(callback,callbackerror){
//     if(userLeft){
//         callbackerror({
//             satus:'user has been left'
//         })
//     }else if(watchingAdd){
//         callbackerror({
//             satus:'Watching add right now'
//         })
//     }else{
//         callback('Subscribe to Web Dev Mastery..')
//     }
// }
// watchTutorial((msg)=>console.log(msg),(err)=>console.log(err))

// callback change to promises
// const userLeft = true;
// const watchingAdd = false;

// function watchTutorial(){
// return new Promise((resolve,reject)=>{
//     if(userLeft){
//         reject({
//             satus:'user has been left'
//         })
//     }else if(watchingAdd){
//         reject({
//             satus:'Watching add right now'
//         })
//     }else{
//         resolve('Subscribe to Web Dev Mastery..')
//     }
// })


// }
// // watchTutorial().then((msg)=>console.log(msg)).catch((err)=>console.log(err))

// const fetchDataAPIOne = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve('Fetching Data from API 1')
//     },4000);
// })
// const fetchDataAPITwo = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve('Fetching Data from API 2')
//     },3000);
// })
// const fetchDataAPIThree = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve('Fetching Data from API 3')
//     },2000);
// })

// Promise.all([
//     fetchDataAPIOne,
//     fetchDataAPITwo,
//     fetchDataAPIThree,
// ]).then((suman)=>console.log(suman))

// Promise.race([
//     fetchDataAPIOne,
//     fetchDataAPITwo,
//     fetchDataAPIThree,
// ]).then((suman)=>console.log(suman))


// async await
// defenition :- Use of async and await enables the use of ordinary try / catch blocks around asynchronous code. Note: The await keyword is only valid inside async functions within regular JavaScript code. If you use it outside of an async function's body, you will get a SyntaxError .

// function otpVarify(otp) {
//     return new Promise((resolve, reject) => {
//         console.log('varifying otp...')
//         if (otp === 1234) {
//             resolve('Welcome to Our Website')
//         } else {
//             reject('otp is not vailid')
//         }
//     })
// }

// function processRequest(respose) {
//     return new Promise((resolve, reject) => {
//         console.log('Processing Response')
//         resolve(respose)
//     })
// }
// // const otp = 12345
// // otpVarify(otp).then(msg => {
// //     console.log("OTP received");
// //     return processRequest(msg)
// // }).then(msg => console.log(msg)).catch(err => console.log(err))

// const otp = 12345
// const otpVarificationFunction = async () =>{
//     try {
//         const respose =  await otpVarify(otp)
//         console.log("OTP received");
//         const processrespose =  await processRequest(respose)
//         console.log(processrespose)
//     } catch (error) {
//         console.log(error)
//     }
 
// }

// otpVarificationFunction();

//Hoisting in javascript.
// defenition :- Hoisting is the default behaviour of javascript where all the variable and function declarations are moved on top.

// hoistedVar = 3;
// console.log(hoistedVar)

// var hoistedVar;

// hoistedFun();

// function hoistedFun(){
//     x = 34;
//     console.log(x)
//     // var x;
// }

//Coercion in javascript.
// defeniton :-  Implicit type coercion in javascript is the automatic conversion of value from one data type to another. It takes place when the operands of an expression are of different data types.

// string coercion
// let x = 3;
// let y = "5";


// // console.log(x+y) // string coercion
// console.log(x-y) // number coercion

//NaN property in JavaScript?
// defenition :- isNaN() property represents the “Not-a-Number” value. It indicates a value that is not a legal number.

//typeof of NaN will return a Number.

// isNaN() // Not a Number

// console.log(isNaN('10'));
// console.log(isNaN(10));
// console.log(isNaN(undefined));
// console.log(isNaN(true));

// Higher Order Functions in javascript.
// defenition :- Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

// function higherOrderFun(suman){
//     console.log("Higher order Function")
//     suman();
// }

// const print = () =>console.log("Subscribe to Web Dev Mastrey")

// higherOrderFun(print)

// const higherOrderFun = ()=>{
//     return function(){
//         console.log("Returning a brand new Function")
//     }
// }

// const respose = higherOrderFun()

// respose();

// this keyword
// defenition :- In JavaScript, the this keyword always refers to an object. The thing about it is that the object it refers to will vary depending on how and where this is being called.

// const person = {
//     empName : 'ram',
//         deg : 'react developer',
//         age : 200,
//        salary:100, 
//     getThis : function(){
//         return this.empName
//     }
// }

// console.log("This is object ",person.getThis())

// call()
// const person1 = {
//     name:'ram',
//     age:200,
//     sayName:function(city,country){
//         return this.name + " "+ this.age+" "+this.salary+" "+city+" "+country
//     }}
// const person2 ={
//     name:'mohan',
//     age:500,
//     salary:1000000
// }
// console.log(person1.sayName.call(person2,'indore','India'))

//apply()
// const person1 = {
//     name:'ram',
//     age:200,
//     sayName:function(city,country){
//         return this.name + " "+ this.age+" "+this.salary+" "+city+" "+country
//     }}
// const person2 ={
//     name:'mohan',
//     age:500,
//     salary:1000000
// }
// console.log(person1.sayName.apply(person2,['indore','India']))


// bind()
// const person1 = {
//     name:'ram',
//     age:200,
//     sayName:function(){
//         return this.name + " "+ this.age+" "+this.salary
//     }}
// const person2 ={
//     name:'mohan',
//     age:500,
//     salary:1000000
// }
// const response = person1.sayName.bind(person2)

// console.log(response())

// currying
// defenition :- Currying is an advanced technique to transform a function of arguments n, to n functions of one or fewer arguments.

// function calculate(a){
//     return function(b){
//         return function(c){
//             return a+b*c;
//         }
//     }
// }

// console.log(calculate(10)(20)(30))

//Closures in JavaScript.
// defenition :- Closures are an ability of a function to remember the variables and functions that are declared in its outer scope.

// function random(){
//     let obj = {
//         name:'suman',
//         age:23
//     }
//     return function(){
//         console.log(obj.name)
//     }
// }

// const response = random()
// response();

// "use strict"

// let empname = 'suman'

// console.log(empname)

// setTimeout

// const print = ()=>console.log('suman')

// setTimeout(print, 4000);

// setInterval(print,2000)

// setInterval(() => {
//     const time = new Date();
//     console.log(time)
// }, 1000);


//Anonymous Functions
// defenition :- It is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name.

let show = function(){
    console.log('Anoymous function')
}

show();