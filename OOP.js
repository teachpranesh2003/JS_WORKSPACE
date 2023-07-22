// Object Oriented programming

let person ={
    name :"pranesh",
    age : 20,
    native : "trichy",
    interest : ["full stack","cricket","front-end"],
    address :{
        city : 'Trichy',
        place : 'kattuputhur',
    },
    greetings : function(){
        let mes = `hi i am ${this.name} from ${this.native} and my interest is ${this.interest} and address ${this.address.city}`;//this is used inside a object to get the key value;
        console.log(mes)
    }
}
person.greetings();
console.log(person.name);
// **************************************************************Functions***********************************************
 
//Functions types : 1. Factory 2.Constructor
//Factory Functions

//Dynamic way 

function  createPerson(name){//camel case -> myFirstName
    return {
        name:name,
        greet(){
            console.log(`hi i am ${this.name}`);
        },
        greets: function(){
         console.log(`hi i ${this.name}`);
        }
        
    }
}
let anbu = createPerson("anbu");
console.log(anbu)
anbu.greet();
createPerson("pranesh").greets();
createPerson("pranesh").greet();

function persons(myname){
    let myself={
         urname : myname,
         fun(){
            console.log(`hi urname ${this.urname}`);
         },

    };
    return myself;
}
let re = persons("new");
console.log(re);
let obj = new persons("pranesh")
obj.fun();
console.log(obj.urname);

//Constructor uses : pascal case ->  MyFirstNmae

function Constr(cname){
    this.nameC = cname;
    this.greet=function(){
        console.log(`my name ${this.nameC}`);
    }
}
let objC = new Constr("pranesh_Constructor");
objC.greet();//object creations


// *******************************************Dynamic Objects**************************

const dynobj = {// here let may change the dynobj value but const not 
    dyname : "dynamic_Object"
}

console.log(dynobj);
dynobj.age=24;
console.log(dynobj);
dynobj.greetdyn = function(){
    console.log("hi dynamic objects");
}
console.log(dynobj);

delete dynobj.age;
console.log(dynobj);
// let or const


let dynobj1 = {// here let may change the dynobj value but const not 
    dyname : "dynamic_Object"
}
dynobj1 =90;
console.log(dynobj1);
dynobj1.age=24;
console.log(dynobj1);
dynobj1.greetdyn = function(){
    console.log("hi dynamic objects");
}
console.log(dynobj1);

delete dynobj1.age;
console.log(dynobj1);

var o = 2;
function f(){
    console.log(o);   
}
f();

// ***********************************************Functions as Objects**************************************************************************
function funobj(name){
    this.funame = name;
    this.fun = function(){
        console.log(`functions as objects ${this.funame}`);
    }
}
let fo = new funobj("functionsobject");
fo.fun();
const ji = funobj.call({},"call fun");
console.log(ji);
funobj.apply({},["ji"]);



//arrays functions
const arrs =[10,20,30];

// ****************************************************Primitve vs Reference************************************ 
// Primitive - number , string, boolean , symbol , undefined ,null 
// Reference   - object , array , function 
// primitve example
let x =10;
let y =x;
 x=20; //here it wont change the y value because y = 10 the value of x 
console.log(x+""+y)
//another example
let cart = 5;
function updateCart(cart){
    cart++;
}
updateCart(cart);
console.log(cart);
//reference example
let x1 = {
    value:10
}
let y1 = x1;
x1.value=20;
console.log(x1,y1);//here y1 get the reference memory address of x1 and store it so it changes 
let cart1 = {
    value:5};
function updateCart(cart1){
    cart1.value++;
}
updateCart(cart1);
console.log(cart1);


//*********************************************************for loop******************************************* 
for(let i =0 ;i<8;i++){//inline variable
    console.log(i);
}
//ouline variable in for loop
let ol = 10;
for(;ol<2;){
    console.log(ol);
    ol--;
}
 
//for in loop
const bio ={
    name:"pranesh",
    age: 78,
    place:'namakal'
}
for(let key in bio){
    console.log(key+":"+bio[key]); // key - type ;bio[key]-values of the key
}

let col = ['red','yellow','blue'];


for(let key in col){
    console.log(key+":"+col[key])//key - array num ;bio[key]- value of array num
}

// for of loop 
for(let key of col){//in array it shows the value because "Arrays , maps are iterable"
    console.log(key)//key  determines the value itself it's the difference between in and of
}
for(let key of Object.entries(bio)){//but in object it is not iterable
    console.log(key);
}
//
let ibj = {};
console.log(ibj);