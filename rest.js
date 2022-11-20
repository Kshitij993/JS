let data = { "name": "kshitij" ,"age": 21, "addr": "kgp" } ;            
let {name, ...other} = data;       // ... is the rest operator. except the attributes mentioned rest of the attributes will be stored in the variable named other
console.log(name);
console.log(other);

