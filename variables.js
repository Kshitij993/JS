// variables in js
// there are three ways to decelare variables in js
        // 1->  var     --- golbal scope
        // 2-> let      --- local scope
        // 3-> const    --- constant variable

var a=10;
if(true)
{
    var a=40;
    console.log(a);
}
console.log(a);

// the output will Be

// 40
// 40

// this is because var represents a global variable and when it it decleared in the if the it just updates the previous value

let b=10;
if(true)
{
    let b=35;
    console.log(b);
}
console.log(b);

// the output will be

// 35
// 10


const pi=3.14;
if(true)
{
    const pi=4.1;
    // pi=pi+1;                if this is done it will show error because constant cannot be modified later after declaration
    console.log(pi);
}
console.log(pi);

//the output will be

// 4.1
// 3.14

let x=10;
let y="10";
console.log(x===y);


console.log(4**3+"Kuldeep");

let r=Math.random();
console.log(r);