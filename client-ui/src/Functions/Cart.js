
export const subtotalCalc = (cart) => {
    let total = 0;
    cart.forEach((item) => {
        total += item.price * item.qty;  
    });
    return total; 
};
export const updatelocalstorage = (cart) =>{
    localStorage.setItem("cart",JSON.stringify(cart));
    localStorage.setItem('subtotal',JSON.stringify (subtotalCalc(cart)));
}