
export const updatelocalstorage = (wishlist)=>{
    localStorage.setItem('wishlist',JSON.stringify(wishlist));
}