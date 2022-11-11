// use local storage to manage cart data
const addtoDb =id=>{
    
    //const quantity = Number(localStorage.getItem(id,1))
    let shoppingCart = {};
    // console.log(shoppingCart);
    const storeCart = localStorage.getItem('shopping-cart');
    if (storeCart) {
        shoppingCart = JSON.parse(storeCart);
    }

    const quantity = shoppingCart[id];
    if(quantity){
        // console.log("already exits");
        const newQuantity = quantity+1;
        shoppingCart[id] = newQuantity;
        // localStorage.setItem(id,newQuantity);

    }
    else{
        // console.log("New items");
        // localStorage.setItem(id,1);
        shoppingCart[id] =1;
    }
    localStorage.setItem("shopping-cart",JSON.stringify(shoppingCart))
}

const removeFromDb=id=>{
    const storeCart = localStorage.getItem('shopping-cart')
    if(storeCart){
        const shoppingCart = JSON.parse(storeCart)
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem("shopping-cart",JSON.stringify(shoppingCart))
        }
    }
}

export {
    addtoDb,
    removeFromDb
}