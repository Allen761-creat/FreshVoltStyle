

export const addcomma = (amount) => {
    // Ensure the amount is a number
    const numericAmount = parseFloat(amount);

    // If it's a valid number and greater than or equal to 10,000, apply commas
    if (!isNaN(numericAmount)) {
        return numericAmount >= 10000
            ? numericAmount.toLocaleString('en-US')  // Adds commas for numbers >= 10,000
            : numericAmount.toString();  // Returns the number as a string without commas
    } else {
        return amount;  // In case of invalid amount, return it as is
    }
};




export const salecalculator= ( onsale,price,discount)=>{
    if(onsale){
        const discountedPrice= price-(price * discount) /100
        return discountedPrice.toFixed(0)
    }
    else{
        return price
           
    }
}
