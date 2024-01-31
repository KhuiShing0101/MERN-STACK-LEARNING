const users =[
    {name:"aung", age:2},
    {name:"mg", age:3},
    {name:"ky", age:4},
    {name:"kee", age:5}
];

// let totalAge = users.filter( users => users.age === 5);
// let totalAge = users.map(()=>users.age === 5 )
let totalAge = users.filter((users)=>{
    users.age === 5
})