//MDN WEBSITE : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//Splice
var arr = [1,2,3,4];
arr.push(5,6,7,8,9,10);//push the elements  at the back
console.log(arr);
var a = arr.splice(0,4);//0 - index , 2 - total Node.of numbers
console.log(a);
console.log(arr);//splice remove the particular numbers from index

// string concatination
var first = "thangamani";
var last = "pranesh";
console.log(first + " "+last);

//Math libraries ,link : https://www.w3schools.com/js/js_math.asp
var ran = Math.random(0,1)*100;
console.log(ran);
ran = Math.round(ran);
console.log(ran);

//switch

var sw = 'private';
sw = 'sergeant';
switch(sw){
    case "sergeant":
        console.log(sw);
    case "sergeant"://here two cases are in || format 
    case "private":
        console.log(sw+" hi")
}

// objects
var person={
    name :"pranesh",
    marks:{
        math:100,
        tamil : 90

    }
}
var sub = 'math';
console.log(`${person.name}'s \"Maths mark\" is ${person.marks.math}`);//double quotes
console.log(`${person.name}'s Maths mark is ${person.marks[sub]}`);//using dynamic values mark['maths']

// arrays 
var diffarr = [1,"amma",9.8,{myname:"pranesh"},[1,2,3]];
console.log(typeof diffarr[1]);
console.log(diffarr);
console.log(diffarr[3]);
console.log(diffarr[3].myname);
console.log(diffarr[4]);
console.log(diffarr[4][0]);

//functions
function add (a,b){
    return a+b;
}
var sub = function(a,b){
    return a-b;
}
console.log(add(1,2));
var ad = add(1,2);
console.log(ad);
console.log(sub(1,2));

function odd(a){
    //using if 
    // if(a%2!=0)
    // return true;
    // return false;

    //using terinary
    return a%2===0 ? "even":"odd";
}

console.log(odd(9));
//Popup Boxes 
//alert , link  : https://www.w3schools.com/jsref/met_win_alert.asp
// confimed  ,link : https://www.w3schools.com/jsref/met_win_confirm.asp
//prompt , lin : https://www.w3schools.com/jsref/met_win_prompt.asp


// Callbacks : SetTimeout
var callback = function(){
    console.log("call back done!");
}
setTimeout(callback,00);
console.log("min");
//Synchoronous -  wait for the previous line to execute and complete its task
//Asynchoronous - cant wait for the previous line to execute and complete its task

//anameous function
setInterval(function(){
    console.log("setInterval done!");
},600000000);

// clear interval for breaking the setInterval
var i =1;
var set = function(){
    console.log(i++);
    if(i>5){
        clearInterval(setint);
    }
}
var set =()=>{//in arrow functions
    console.log(i++);
    if(i>5){
        clearInterval(setint);
    }
}
const setint = setInterval(set,00);//in millisecond


//Arrow function
var greet = (name) =>{
    return "hello"+name+"welcim";
}
var greet = name => "hello"+name+"welcome";

console.log(greet("sanjeev"));

//array functions
let num = [1,2,3,4];
for(k=0;k<num.length;k++){
    num[k]=num[k]*2;
}
console.log(num);
//map function

let newarrs = num.map(np=>np*2);
// let news = num.map(o)={
//     return o*10
// }
let newarr = num.map(multiply);
function multiply(num1){
    return num1*2;
}
console.log(newarr);
console.log(newarrs);

// find , filter , map ,for each functions
let age = [10,20,30,33];
let k1 = age.map(num=>num>30);
let g = age.map((p)=>{return p*10});
console.log(g);
let k2 = age.find(num=>num>20);
let k3 = age.filter(num=>num>20);
console.log(k1);
console.log(k2);
console.log(k3);
let arr1=[1,2,3,4]
arr1.forEach(element=>console.log(element));


//objects
var obj1 = {
    name:'pranesh'
}
var obj2 = {
    name:'pranesh'
}
console.log(obj1==obj2);

var dyn = function(side =9){
    side = side || 8;
    return side*side;
}
console.log(dyn(10));

//array map 
let fruits = ['apple','banana','mango'];
let [a2,b2]=fruits;
let[a3,...rest]=fruits;
console.log(a2+" "+b2);
console.log(rest);
console.log(a3);
//concat 
let a4 = [1,2,3];
let b3 = [4,5,6];
console.log(a4.concat(b3));
let c1 = [...a4,"mid",...b3];//concat using a ESP method
console.log(c1);

//object equalization
let obje ={
    obname:"pranesh"
}
let {obname}=obje;//obname should be same
console.log(obname);
let {obname:n}=obje;//obname should be same
console.log(n);
let obnames = "raja";
let ages = 78;
let onbj={
    obnames,
    ages
}
console.log(onbj);

//Promises

const myPromise =
    new Promise((resolve,reject)=>{
        //resolve("foo");
        reject("reject foo");
        // setTimeout(()=>{
        //     resolve("foo");
        // },300);
        });
myPromise.then((res)=>{//then -> resolve
    console.log(res)
;}).catch((err)=>{//catch -> reject
 console.log("error: "+err);
}).finally(()=>{
    console.log("final");
})
console.log("end");

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response=>response.json())
    .then(json=>console.log(json))
    .catch(err=>console.log(err))
 
const networkCall = async ()=>{//async will be in try and catch
//synchronize process inside async
try{
    const res= await fetch('https://jsonplaceholder.typicode.com/todos/1')// await waits only for the async function
    const jso = await res.json()
    console.log(jso);
    console.log(1);
}
catch(err){
    console.log(err);
}
    
}
networkCall()
console.log("7");