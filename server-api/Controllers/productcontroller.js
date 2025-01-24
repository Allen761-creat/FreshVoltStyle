
import productmodel from "../Models/productmodel.js";

export const fetchproducts=async (req,res)=>{
    let page =    parseInt(req.params.page) // page=1
    let perPage = parseInt(req.params.perPage)  // 10
try {

    let products =await productmodel.find({});
    if(products.length > 0){
        res.send(products)
    }


    else{
        res.json("No products found");
    }
} catch (error) {
    res.json({
        MESSAGE:"SOMETHING WENT WRONG",
        ERROR: error.message
    });
}

};

export const fetchproductBYID = async (req,res)=>{
try {
    const id =req.params.id;
const product = await productmodel.findById(id);
if(product){
    res.send(product)
}
    else{
        res.json({
            status: "error",
            message: "Product not found"
        });
        
    }
} catch (error) {
    res.json({
         status: "error",
        message: "Something went wrong",
        error: error,
    });
}
};


// products.slice(startIndex, endIndex): Yeh line products array ko slice kar rahi hai, matlab wo products return kar rahi hai jo start aur end index ke beech aate hain.
// endIndex ko calculate karte hain, jo bata raha hai ki products array ka kitna portion dikhana hai. Agar page 1 ho aur perPage 10 ho, to endIndex 10 hoga (start se lekar 9 tak ke products).
// Yeh line start index calculate karti hai. Jaise agar page 1 ho, to startIndex 0 hoga, agar page 2 ho to startIndex 10 hoga. Yeh index bata raha hai ki products array se kis position se products ko dikhana start karna hai.
    // if(page && perPage){
    //     const totalPages = Math.ceil(products.length / perPage)
    //     const startIndex = (page - 1) * perPage;
    //     const endIndex = startIndex + perPage;
    //     const paginatedProducts = products.slice(startIndex, endIndex);    
    //       res.json({
    //         products: paginatedProducts,
    //         pagination: {
    //           currentPage: page,
    //           totalPages,
    //           perPage,
    //           startIndex,
    //           endIndex
    //         },
    // })
// }