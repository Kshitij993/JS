// 1st way

function sumfun(a,b)
{
    return a+b;
}
let s=sumfun(12,13);
console.log(s);


// 2nd way 

// different representation of the above function


let sum_anonymus_fun = function(x,y){             //this is an anonymus function as it has no name
    return x+y;
}
console.log(sum_anonymus_fun(12,13));



// 3rd way

// another representation of the same function

let sum_arrow_function = (m,n) => {             // here neither the function name nor the function keyword is used it only has an arrow
    return m+n;
}

console.log(sum_arrow_function(12,13));



// 4th way

let sum_arrow_function_no_return= (p,q) => p+q;         // there is no return type but still it will return the sum 

console.log(sum_arrow_function_no_return(12,13));



//5th way

let square= a => a*a;              // we can ommit the paranthesis also if only one paramater is there (a)=>a*a
console.log(square(6));


console.log([1,2,3].reduce((f,n)=>f+n));