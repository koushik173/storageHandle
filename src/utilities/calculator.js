
const add=(first, second)=>{
    return first+second;
}
const multiply =(first,second)=>{
    return first*second;
}

const getTotalPrice=(cosmetric)=>{
    return cosmetric.reduce((preb,curr)=>preb+curr.price,0)
}

export {
    add,
    multiply,
    getTotalPrice as getTotal
}