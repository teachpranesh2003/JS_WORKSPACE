//variables
const  life =100;
var name =null;
console.log("\tVariables ");
console.log("i love u amma");
console.log(life);
console.log(name);

// string concatenation
let i=10;
let nam ="pranesh";
console.log("\tString Concatenation");
console.log(`i ma ${nam} my love ${name}`)
//typeof
const n="pranesh";
let b =10;
console.log("\ttypeof ");
console.log(typeof (b));
console.log(typeof(n));
console.log(typeof((n+b)));

//if else
let nm =10;
console.log("\tif else");
if(nm==0){
    console.log("great");
}else if(nm===10){
    console.log("equals")
}
else{
    console.log("love");
}
//functions
console.log("\tfunctions");
function add(n1,n2){
    console.log(n1+n2);
}
add(1,2);
//arrays
console.log("\tarrays");
const array = ["pranesh","mom","dad"];
console.log(array);
array.push("push");//pushed the element at last
console.log(array);
array.pop();//remove the last element
console.log(array);
array.shift();//remove the first element
console.log(array);
array.unshift("unshift");//add the elemnt at first
console.log(array);
console.log(array.indexOf("mom"));

//Objects and Keywords

const obj ={
    name:"pranesh",
    age:20,
    place:"trichy",
    mom:"kavitha",
    awards:["gold","silver","bronze"],
    saynames :function (){
        console.log(this.name);
    }
}
console.log("\tobjects and functions");
console.log(obj.awards[1]);
// using this

obj.saynames();
 
//this
function call(){
    console.log("this call fun");
}
window.call();
console.log(this);
//loops
const arr = ["i","love","you","amma"];
for(i of arr){
    console.log(i);
    if(i==="i")
    console.log(`hello ${i}`);break;
}

let k=0;
while(k<10){
    console.log(k++);
}  

console.log("\tOperators");

console.log(" Comparison Operators");
//Comparison operator

 //string comparison
 console.log("anbu" > "arivu");// gives boolean value based on dictionary 
 console.log("1">0);// javasript take "1" as number
 console.log(true>0);//in this case true =1 and false =0
// equality operator
 console.log(3==3);
 console.log(10!=10);
 console.log(9<=10);
 console.log("1"==1);
 console.log(true==1);//consider as true =1
 //strict equality operator
 console.log("1"===1);
 console.log(true===1);//did not consider as true =1 it consider as true =true
 console.log(" true"===" true");
 console.log("true"===" true");
 //Arithmatic operators
console.log("Arthmatic operators");
 console.log(1+1);
 console.log(1*10);
 console.log(1/1);
 console.log(1-1);
 console.log(2**5);//2 power of 5 (exponential)
 //terinary opearator
 let age =19;
 console.log(age>18?"adult":"not adult");
 //logical operator 
 console.log(true && true);
 console.log(true || false);
 console.log(!true);
 console.log((10 || 245));//first element
 console.log(10 && 245);//second element
 console.log("g"&&"l");