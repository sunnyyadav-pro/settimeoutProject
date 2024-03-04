//setInterval(code)
//setInterval(code,delay)
//setInterval(function)
//setInterval(function,delay,arg1,arg2,arg3)

//***************setinterval in arrow function 
// setInterval(((a,b) => {
//   console.log(a+b);
// }),2000,2,4);

//*****no-2*******
// setInterval(function(a,b){console.log(a+b);},8000,2,3);

//*****no-3*******

// function fun(a,b){
//   console.log(` output: ${a+b}`);
// }
// setInterval(fun,3000,2,2);






//********setInterval with clearInterval */

// var setresult;
// function add(a,b) {
//     console.log(` add: ${a + b}`);
//     setresult= setInterval(mul,1000,5,6);
// }
// add(6,6);

// function mul(a,b) {
//     console.log(` mul: ${a*b}`);
//  sub(4,3); 
// }

// function sub(a,b)
// {
//     clearInterval(setresult);
//     console.log(` sub: ${a-b}`);
// }



//**********  setTimeout  ********* */
//**********  setTimeout  ********* */
//**********  setTimeout  ********* */
//**********  setTimeout  ********* */
//**********  setTimeout  ********* */
//**********  setTimeout  ********* */
//**********  setTimeout  ********* */

// let result;
// function add(a,b){
//     result=setTimeout(sub,2000,4,3);
//     return a+b;
// }
// console.log(add(5,5));

// function sub(a,b){
//    console.log(a-b); 
// };




//************settimeout with normal function 
// function add(a,b){
//     console.log(a+b);    
// }
// setTimeout(add,8000,2,3)

//************settimeout with arrow function 
// setTimeout(((a,b)=>{
//     console.log(a+b);
// }),5000,6,6);



//pizza -> dough -> cheese
// function getcheese(callback) {
//     setTimeout(() => {
//       let cheese = "🧀";
//       console.log("Here is My Cheese:", cheese);
//       callback(cheese);
//     }, 2000);
//   }
  
//   function makedough(cheese, callback) {
//     setTimeout(() => {
//       const dough = "🍞";
//       console.log("here is  the dough", dough);
//       callback(dough);
//     }, 3000);
//   }
//   function makepizza(cheese, dough, callback) {
//     setTimeout(() => {
//       let pizza = "🍕";
//       console.log("here is my all ingredients :", cheese, dough, pizza);
//       callback(pizza);
//     }, 4000);
//   } 
  
//   getcheese((cheese) => {
//     makedough(cheese,(dough) => {
//       makepizza(cheese,dough,(pizza) => {
//         console.log("Got my pizza",pizza);
//       });
//     });
//   });
  



//***** settimeOut with return keyword */


// let sub=((a,b)=>{
//     console.log(a-b); 
// });

// function add(a,b){
// setTimeout(sub,3000,12,9);
//   return a+b;
// }

setTimeout(()=>{
    console.log((add(8,8)))
},6000);




//*****************************cleartimeout()

// let result=function (a,b){
//     console.log(a+b);  
// }
// let resultsettimeout= setTimeout(result,3000,4,5)
// clearTimeout(resultsettimeout);





// const myTimeout = setTimeout( myGreeting , 3000);

// function myGreeting(){
// console.log( "Hello World!" );
// }

// function myStopFunction() {
//   clearTimeout(myTimeout);
// }




// let result=setTimeout((function() {
//     alert("hello i am settimeout");
// }),8000);
// let a=prompt(" yes or no ")
// if (a==no) {
//     clearTimeout(result);
// }
// else{
//     console.log(" not going to settimeout");
// }




// console.log("1");
// setTimeout(() => {
//     console.log("2");
// },0);

// console.log("3");











 