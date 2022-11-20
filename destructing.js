let names = ["Kshitij","Aman","Raj","rahul"];

let [first,second ]= names;             // extracting 1st and 2nd names from the array
console.log([first, second]);



let [first1,second1, third, fourth ]= names;                // we can take the data out from an array whichever data we wnat
console.log([first1,second1, third, fourth ]);


let data = { "name": "kshitij" ,"age": 21, "addr": "kgp" } ;            // we can take any data out from the dictionary as well
let {name,age} = data;
console.log(name,age);

