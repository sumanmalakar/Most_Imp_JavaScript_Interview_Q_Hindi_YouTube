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

//typeof

// const suman = true;

// console.log(typeof(suman))

// const number1 = 10;
// const number2 = 10;

// // console.log(number1 == number2) // == only check the values

// console.log(number1 === number2) // ===check the values and type as well


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

// (function(){
//     console.log("This is self Invoking function");
// })();


//callbacks

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


// hoistedVar = 3;
// console.log(hoistedVar)

// var hoistedVar;

// hoistedFun();

// function hoistedFun(){
//     x = 34;
//     console.log(x)
//     // var x;
// }


// string coercion
// let x = 3;
// let y = "5";


// // console.log(x+y) // stirng coercion
// console.log(x-y) // number coercion

// isNaN() // Not a Number

// console.log(isNaN('10'));
// console.log(isNaN(10));
// console.log(isNaN(undefined));
// console.log(isNaN(true));

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

//apply
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

// function calculate(a){
//     return function(b){
//         return function(c){
//             return a+b*c;
//         }
//     }
// }

// console.log(calculate(10)(20)(30))

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

let show = function(){
    console.log('Anoymous function')
}

show();