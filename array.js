//array can be homogeneous and heterogeneous

let arr=[1,2,3,4,5,6,7,8,9,10];
let s=0;
for(i=0;i<arr.length;i++)
{
    s=s+arr[i];
}
console.log(s);
console.log()



let sum= arr.reduce((prev, next)=> prev+=next);
console.log(sum);


let square_array= arr.map(i => i ** 2 );
console.log(square_array);



let square_array_sum = arr.map(i=>i ** 2).reduce((p,n)=> p+=n);
console.log(square_array_sum);
