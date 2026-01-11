/*const a = null;
console.log( typeof a);
 
c = "25";
console.log(typeof c); 


 a = "20";
 b = 25 ;
 c = true;

 console.log(a , b, c);
 
 let a ;
 console.log(a);

 const aa = [1,2,3,4];
 for(var i=1; i<51;i++){

console.log(i);
 


 let a = 10;
 while (a < 12){
    console.log (a);
    a++; 
 }



let a = 1;
let sum = 0;
while (a< 12){
 
sum = sum + a;

   a++;

}
console.log(sum);



let str = "placement";
for (let string of str  ){

    console.log(string);

}
    

 for (var i =1; i<21; i++   ) {

   if (i%2 ===0){}
   else {
    console.log(i);
   }}

   for (var i; i<1; i++){

    if(i!== 0){

    console.log(i);  
    }
   }


let a = 5;

do {

 console.log(a);

a--;
}

while(a>=0){
  
}

let fact = 1;
for (var i =5; i>0; i--){

fact = fact*i;


}
console.log(fact);


var hold = 1;
 for (var i=1; i<4; i++){
  var str = "";
  for (var j =1; j<4; j++){
    str += `${hold}`;
    hold++;
  }
  console.log(str);

}
  
var arr = [1,2,3,4,5];
for (var i =0; i< Math.floor(arr.length/2); i++){
var temp = arr[i];
arr[i] = arr[arr.length-1-i];
arr[arr.length-1-i] = temp;
     
}

 console.log (arr);
 

let num =1;
while(num<101){
    if(num % 5 === 0)
    console.log(num);
   num++; 
}

var obj =  {
name: "Prateek",
age :  21,
gender: "male"

}

for (let key in obj){
    console.log(key);
}

var arr = ["movie1","movie2", "movie3", "movie4", "movie5"];

arr.forEach(function(value){
console.log(value);

});


function check (num){
    if (num%2==0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}

check(0);



function area(r){

    return Math.round(Math.PI *r *r);
}
console.log(area (12.5));



 function sumofarr(arr){
    var sum = 0;
  arr.forEach(function(v) {
    sum = sum+v;
 })a 
    return sum;
 }

 sumofarr(1,2,3,4,5,6,7,8,9,10);


function strcheck(str, char){

    return str.toLowerCase().startsWith(char.toLowerCase());
} 
console.log(strcheck("Prateek", 'p'));


function abcd(value){
    return value.split('').reverse().join('');
}


function isAnagram(str1, str2){


const cleanstr1 = str1.replace (/[W_]/g,'').toLowerCase();
const cleanstr2 = str1.replace(/[W_]/g,'')


 if (cleanstr1.length != cleanstr2.length){
    return false;
 }



}

function findBiggest(arr){


if (arr.length ===0 )return null;
let biggest = arr[0];
for (let i =0; i<arr.length; i++){
if (arr[i]> biggest){



    biggest = arr[i];
}
}
return biggest;
}
console.log(findBiggestNumber(numbers));
  

let sum = 0;
for (let i =0; i<10000000000000; i++){
    sum = + i;
}

console.log(sum);


for (var i =0; i<=30; i++){
    console.log(i);
}





setTimeout (function check(a){

    console.log("timeout", "25");
},2000
);
  check();


function check(a){
var a = 20
console.log (a, "outer called");}



counter = 0;
function caltime() {
    let i = 0;
    const timer = setInterval(function() {
        console.log(i);
        i++;
        if (i > 60) {
            clearInterval(timer);
        }
    }, 1000);
}

caltime();


function showClock(){
    setInterval(() => {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    console.clear();
    console.log(timeString);
    },1000);
}

showClock();




setInterval(()=>{
console.log(new Date().toLocaleTimeString());
},1000);


function getlength(str){
 
    console.log("Original String:", str);
    console.log("Get length", str.length);
    console.log("first index of:", str.indexOf("O"));
    console.log("After slice", str.sli  ce(0,5));
    console.log(str.split(","));
};  
 
getlength("Hello,World");

class Animal{ 
    constructor(name,legCount, speaks){
   this.name = name;
   this.legCount = legCount;
   this.speaks = speaks;

}
speak(){
    console.log("Hi there " + this.speaks);
}
}
let dog = new Animal("dog", 4, "bhow");
let cat = new Animal("cat", 3, "meow");
cat.speak();



function calculateSum(n){
    let a =0;
    for(let i =0; i<n; i++){
        a = a+i
    }
    return a;
}
const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();

calculateSum(10000000000);

const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();

console.log(afterTimeInMs - beforeTimeInMs)


const user = {
    name: "harkirat",
    gender: "male"
}
user ["name"]
const finalString = JSON. stringify(user)
console.log(finalString["name"]);


const sampleObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
};






function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if ("aeiouAEIOU".includes(str[i])) {
            count++;
        }
    }
    console.log("Number of vowels:", count);
}
countVowels("Prateek");




function isPalindrome(str){

for (let i =0; i<str.length;i++){
    if (str.reverse ===str){
        console.log("Palindrome");
    }

}



}



function isPalindrome(str){
    const reversed = str.split('').reverse().join('');
    if(str === reversed){
        console.log("palindrome");
    }
    else{
        console.log("not a palindrome")
    }
}
isPalindrome("madam");
isPalindrome("hello");



function calculateTime(n) {
        const start = new Date();
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += i;
        }
        const end = new Date();
        const timeInSeconds = (end - start) / 1000;
        return timeInSeconds;
    }

    console.log('Time for 1-100:', calculateTime(100), 'seconds');
    console.log('Time for 1-100000:', calculateTime(100000), 'seconds');
    console.log('Time for 1-1000000000:', calculateTime(1000000000), 'seconds');


    
   function square(n){
     return n*n

   }
   function cube(n){
     return n*n*n
   }

    function sumOfSomething(a, b, fn){ 
        const val1 = fn(a);
        const val2 = fn(b);
        return val1+val2;

    }

   const ans = sumOfSomething (2 , 3, cube )
   console.log(ans);
   

   const fs = require('fs');


   function kiratsReadFile(){
    return new Promise(function(resolve){
     fs.readFile("a.txt", "utf-8", function(err, data){
        resolve(data);
   });
   })
   }

   function onDone(data){
    console.log(data)
   }
   kiratsReadFile().then(onDone);
   

   var d = new Promise(function(resolve){
   resolve("foo");
   });
   function callback(){
  console.log(d);
   }
   d.then(callback);
   */

   let p = new Promise(function(resolve){
    resolve("Hi there");
   });

   p.then(function(){
    console.log(p);
   })