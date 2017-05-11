/*
var aa =90;
var a1,a2;
for(i=1;i<=10;i++){
    a1=i*i;
    a2=(i+1)*(i+1);
    if(a1<=aa && a2>=aa)break;
    
}
console.log(i,i+1);
console.log(Math.sqrt(aa));



function m357(a,b){
    for(i=a;i<=b;i++){
        if(i%3==0 || i%5==0 || i%7 == 0)
            console.log(i);
    }
}
m357(10,100);

function score(s){
    if (s<=69)
        console.log('D');
    else if(s<80)
        console.log('C');
    else if(s<70)
        console.log('B');
    else
        console.log('A');
}
score(79);


function commonFactor(x,y){
    var common;
    for(i=1;i<=Math.max(x,y);i++){
        if(x%i == 0 && y%i == 0)
            common = i;
    }
    console.log(common);
}
commonFactor(12,15);



function toBinary(n){
    for(i=n;i>=1;i=Math.floor(i/2))
        console.log(i,Math.floor(i%2));
    }
toBinary(12);


//console.log(Math.round(12.3));
//console.log(Math.floor(12.6));
//console.log(Math.ceil(12.4));


function isPrime(x){
    for(i=2;i<x;i++){
        if(x%i==0){
            //console.log('not');
            //break;
            return false;
        }
        //console.log(x+ ' is Prime.');
        return true;
        
    }
    
    console.log(x);
}
isPrime(7);

function countPrime(x,y){
    var count=0;
    for(i=3;i<=7;i++){
        for(j=2;j<i;j++){
            if(i%j==0){
                console.log(i,j,'...--');
                count-=1;
                break;    
            }
        }
        count+=1;
        console.log(i,j, 'Yes+1');
        }    
    console.log(count);    
}
countPrime(3,7);

function getPrimes(max) {
    var sieve = [], i, j, primes = [];
  
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            console.log(3,i,j,sieve,primes);
            primes.push(i);
            console.log(4,i,j,sieve,primes);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
                console.log(5,i,j,sieve,primes);
            }
        }
    }
    console.log(primes);
      console.log(sieve[6]);
    return primes;

}
getPrimes(11);


var a=2;
console.log(a<<1);
var abc = [];
for(k=1;k<=10;++k){
    abc.push(k);
}
console.log(abc);


var a =[1,6,7,5,3,4,5,3,2,4,1];

for(i=0;i<a.length;i++){
    console.log('a[%d]=%d',i,a[i]);
}



var a=[[1,6,2],
       [3,62,44]];
console.log (a.length);
console.log (a[0].length);
for (var i=0;i<a.length; i++){
    var line = '';
    for (var j=0;j<a[i].length; j++){
        line = line + a[i][j]+ ' ';
    }
    console.log(line);
}



function max(x,y){
    if(x>y){
        return x;
    }
    else
        return y;
}

m= max (4,66);
console.log(m);




function sum(n){
    var sum=0;
    for(i=1;i<=n;i++){
        sum =sum + i;
    }
    return sum;
}
sum10 = sum(10);
console.log("1+...+10="+sum10);



function isPrime(n){
    for(i=2;i<n;i++){
        if(n%i==0)
            return false;
    }
    return true;
}

console.log(isPrime(17));
for (var p=1; p<=100; p++) {
  if (isPrime(p))
    console.log("isPrime("+p+")");
}



console.log(sub(99,1));

// 第一種寫法，直接宣告函數
function sub(a,b) {         
  return a-b;
}

// 第二種寫法，將匿名函數指定給變數。
var add = function(a,b) {     
  return a+b;
}
console.log("add(3,5)=", add(3,11), " sub(7,2)=", sub(7,2));


//參數的傳遞
function modify(num,array){
    num = num +1;
    array[0] = array[0] +1;
}

var n=3,a = [3,2,1];
 modify(n,a);

 console.log(n,a);


var a = [1,2,3,4,5,6,7,8,9,0,1]
for(var i in a){
   console.log(a[i]);
}

function each(a,f){
    for (var i in a){
        f(a[i]);
    }
}


function sinPrint(x){
    console.log('sin(%d) = %d', x , Math.sin(x));
}
each([3,4,5,6], sinPrint);

//=======================
var c= console;

function map(f,a){
    var ma = [];
    for (var i in a){
        ma.push(f(a[i]));
    }
    return ma;
}

function square(x){
    return x*x;
}
c.log('map(x^2, [3,1,5,4,2])='+ map(square, [3,1,5,4,2]));


//第三張第一題
function insert(a,b){
    var array = a;
    array.push(b);   
    array.sort(function (a, b) {
        return a - b
    });     
    return array;   
}

function insert(a,b){
    var array = [];
    var count =1;
    console.log(a);
    for(i=0;i<a.length;i++){
        if (a[i]>=b && count==1){
            array.push(b);
            count= 0;
        }
        array.push(a[i]);
    }
    if(count==1)
        array.push(b);
    return array;
}

console.log(insert([3,4,5,6,9,10,33,44,66,88,99],177));
*/
 //find([ 1, 4, 5, 8, 9], 5) => 2 , 找不到時傳回 -1。


// sd([1,2,3,4,5]) = sqrt((2^2+1^2+0^2+1^2+2^2)/5) = sqrt(2)=1.414。

function sd(a){
    var sd=0;
    for(var i in a){
        sd += Math.pow((Math.abs(a[i]-mean(a))),2);
    }
    return sqrt(sd/a.length);
}

function sqrt(n){
    var i =1;
    var answer=1;
    while(i<n){
        //console.log('i= '+ i + ' answer= '+answer);
        if(i*i<=n && (i+0.0001)*(i+0.0001)>n){            
            answer= Math.round(i*100)/100;
            return answer;   
        }
        i=i+0.0001;
    }
    return 1;
}

function mean(a){
    var total = 0;
    for (var i in a){
        total += a[i];
    }
    return total/a.length;
}

//minGap([1,3,6,7,10]) = 1
function minGap(ab){
    var min = 10;
    for (var i=0;i<ab.length;i++){
        if(ab[i+1]-ab[i]<min){
            min = ab[i+1]-ab[i];
        }
    }
    return min;
}
//console.log(minGap([1,3,6,8,10]));
//factor(45) => [3, 3, 5]
function factor(a){
    var array=[];
    var i =2;
    while(a>1){
        if(a%i ==0){
            array.push(i);
            a=a/i;
            continue;
        }
        i++;
    }
    return array;
}
//console.log(factor(45));


//請寫一個函數判斷某方陣是否每行每列的加總都是一樣的？
//範例： isMagic([[1,2,3], [2,3,1], [3,1,2]]) = true
//範例： isMagic([[1,2,3], [2,3,1], [3,2,1]]) = false
// 2 2 2 
// 2 2 2 
// 2 2 1 
function isMagic(a) {
    var sum = 0;
    var prevSum = null;
    for (var i in a) {
        for (var j in a[i]) {
            sum += a[i][j];
        }
        if (prevSum && sum !== prevSum) {
            return false;
        } else {
            prevSum = sum;
            sum = 0;
        }
    }
    return true;
}


const res = isMagic([
    [1, 2, 3],
    [2, 3, 1],
    [3, 1, 2]
]);

const res2 = isMagic([
    [2, 3, 1],
    [1, 2, 3],
    [3, 1, 2]
]);
const res3 = isMagic([
    [2, 3, 1],
    [1, 1, 3],
    [3, 1, 2]
]);

console.warn('name, result');
console.warn(`isMagic, ${res}`);
console.warn(`isMagic2, ${res2}`);
console.warn(`isMagic3, ${res3}`);
/*
var result = [];
var count = 3;
function a(name){
    result.push(name);
    next();
}
function b(age){
    result.push(age);
    next();
}
function c(job){
    result.push(job);
    next();
}
function next(){
    count--;
    if (count===0)d();
}
function d() {
    console.log(result);
}
b(18);
a("Emily");
c('student');


function wait(fn,cl){
    var count = fn.length;
    var result =[];
    fn.forEach(function(f){
        f(next);
    });
    function next(r){
        result.push(r);
        count--;
        if(count===0)cl(result);
    }
}
wait([
    function (next) {
        $.get('url1', function (data) {
            next(data);
        });
    },
    function (next) {
        $.get('url2', function (data) {
            next(data);
        });
    },
    function (next) {
        $.get('url3', function (data) {
            next(data);
        });
    }
],
    function (result) {
        //處理result
        console.log(result);
    });
*/


var request = require('request');


/* version 1: Normal,
function google(next = () => { }) {
  
  request('https://www.google.com').on('response', function (err, body) {
    console.warn('google arrive');
    next();
  })
}

function yahoo(next = () => { }) {
  request.get('https://www.yahoo.com').on('response', function (err, body) {
    console.warn('yahoo arrive');
    next();
  })
}

/*
Version 2: Promise,
function google(next=()=>{}) {
  return new Promise(function(resolve, reject){
    request('https://www.google.com').on('response', function (err, body) {
      console.warn('google arrive');
      next();
      resolve();
    })
  });
}

function yahoo(next=()=>{}) {
  return new Promise(function(resolve, reject){
    request.get('https://www.yahoo.com').on('response', function (err, body) {
      console.warn('yahoo arrive');
      next();
      resolve();
    })
  });
}*/


/*google(()=>{
  yahoo(()=>{
    google();
  })
})*/


/*google()
.then(()=>{
  return yahoo();
}).then(()=>{
  return google();
})*/

function google(next = () => { }) {
    return new Promise(function (resolve, reject) {
        request('https://www.google.com').on('response', function (err, body) {
            console.warn('google arrive');
            next();
            resolve();
        })
    });
}

function yahoo(next = () => { }) {
    return new Promise(function (resolve, reject) {
        request.get('https://www.yahoo.com').on('response', function (err, body) {
            console.warn('yahoo arrive');
            next();
            resolve();
        })
    });
}

async function seq() {
    await google();
    await google();
    await yahoo();
    
}

seq();
