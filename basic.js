
//variables
const name = "pranesh";
const dob = "25.02.2003";
let mes = "hi i am "+name+ " started js and born on "+dob;
// alert(mes);
console.log(mes);

//datatypes
 let firstname ="pranesh";//string
 let age= 20;//integer
 let isyoung = true;//boolean
 let lastname = undefined;//undefined
 let trophy = null;//null
//typeof
console.log(typeof age);

//object declaration 
let person ={
    urname : "pranesh",
    urage : 20,
    urnative : "trichy tamilnadu",
    siblings:{
        brother:"prithiv"
    }
     
}
person.urmark = 100;
person['urresult']='pass';
console.log(person);
console.log(person.urresult);
console.log(person.urname);
console.log(person['urage']);
console.log(person.siblings.brother);

let num = 5;
let sum=0;
for(i=0;i<5;i++){
    sum=sum+i;
}
console.log(sum);
//typeof
const n="pranesh";
let b =10;
console.log("\ttypeof ");
console.log(typeof (b));
console.log(typeof(n));
console.log(typeof((n+b)));
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
let arrays = ["i","am","pranesh",2003];
console.log(arrays);
arrays[6]="amma";
console.log[arrays[5]];
 //functions
 function groot(stname,laname){
    
    console.log("i am "+stname+ " my lastname "+laname);
 }
 groot("pranesh","thangamani");

 // operators

//Assignment operators : =+,=* ,=/ ,=-
let ass=+54;
console.log(ass);


 //Comparison operator

 //string comparison
 console.log("anbu" > "arivu");// gives boolean value based on dictionary 
 console.log("1">=0);// javasript take "1" as number
 console.log(true>0);//in this case true =1 and false =0
// equality operator
 console.log(3=='3');//Javascript validate '3' as 3 in ==
 console.log(3==='3');//Javascript validate '3' as '3' in ===
 console.log(10!==19);
 console.log(9<=10);

 //Arithmatic operators : /,*,-,+,**,++,--

 console.log(1+1);
console.log(++ass);

//Terinary operator
let ter = 10;
console.log(ter>3 ? "terinary" : "success");

//logical operator

   //  &&(and) ||(or) !(not)
   console.log(true && false);
   console.log(true || false);
   console.log(!true);
    //non boolean logical
    // false || 8; returns 8
    // based on truth and falsy method  
    // Falsy means they are false in ans 
        // undefined
        // null
        // 0
        // false
        // '' -> ""
        // NaN - undefined for any mathematical issues ,not a number ex : fale || 8 here 8 not comes under the falsy conditions so it returns true
    //Truthy means they are true 
        // Anything that is not falsy  is truthy
    //examples
        // false && 8
        // ans : false
        // 7 && 8
        // ans : 8
        // 9 && 8
        // ans : 8
        // 7 || 8
        // ans : 7
        // 9 || 8
        // ans : 9   
        //true || 0
        //ans : true shows that it AND takes the last element also for truthy validatiom
        //OR takes 1st element when its true if 1st false then it takes second 
    //example
    // let colr = "red";
    // let precolr = "blur"
    // let selcolr=colr||precolr;
    // console.log(selcolr);
    let colr = "red";
    let precolr = "blur"
    let selcolr=colr&&precolr;
    console.log(selcolr);
    // let colr = undefined;//undefined is false
    // let precolr = "blur"
    // let selcolr=colr||precolr;
    // let selcolr = colr && precolr;
    // console.log(selcolr);

//Bitwise opeartor (1 or 0)
//1-00000001
//2-00000010
//3-00000100
// 1 - 00000001
// 2 - 00000010
// or- 00000011 0r gate
// and-00000000 and gate
console.log(1|2);
console.log(1&2);

let myper = 0;
const wrper =2;
const redper =4;
const exeper=1;

myper = myper | wrper | redper;//or gate
console.log(myper);
console.log(myper & redper);// and gate
let mess = (myper & redper)?'yes':'no';
console.log(mess);
// just do the or  & and gate operations u will understand
myper = myper | wrper;//or gate
console.log(myper);
console.log(myper & redper);// and gate
mess = (myper & redper)?'yes':'no';
console.log(mess);

// ORDER OF PERCEDENCE : LINK :: https://www.dummies.com/article/technology/programming-web-design/general-programming-web-design/javascript-operator-precedence-254119/

// if else

let date = new Date();// get system current date  and time
console.log(date);
let hrs = date.getHours();
console.log(hrs);

//for loop 
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
for(let key of col){//in array it shows the value
    console.log(key)//key  determines the value itself it's the difference between in and of
}
for(let key of bio){//but in object it is different
    console.log(key);
}
//