import usermodel from "../Models/authenticationmodel.js";
import productmodel from "../Models/productmodel.js";

export const fetchusers = async (req, res) => {
  try {
    const user = await usermodel.find({});
    res.send(user);
  } catch (error) {
    res.json({
      MESSAGE: "SOMETHING WENT WRONG",
      ERROR: error,
    });
  }
};

export const blockandunblock = async (req, res) => {
  try {
    const { id } = req.body;
    // console.log(id)
    const user = await usermodel.findById(id);
    user.isBlocked = !user.isBlocked;
    await user.save();
    res.send(user);
  } catch (error) {
    res.json({
      MESSAGE: "SOMETHING WENT WRONG",
      ERROR: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    // Get the user ID from the request body
    const { id } = req.body;
    console.log(id);

    // Find and delete the user by their ID
    const user = await usermodel.findByIdAndDelete(id);

    // If no user found, send a message
    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    // Send a success response if user is deleted
    res.json({
      success: true,
      message: "User deleted successfully",
      user: user,
    });
  } catch (error) {
    // Error handling if something goes wrong
    res.json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
export const fetchuserbyid = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await usermodel.findById(id);
    res.send(user);
  } catch (error) {
    res.json({
      MESSAGE: "SOMETHING WENT WRONG",
      ERROR: error,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.body;
    const product = await productmodel.findByIdAndDelete(id);
    if (!product) {
      return res.json({
        success: false,
        message: "Product not found",
      });
    }
    res.json({
      success: true,
      message: "Product deleted successfully",
      product: product,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const addproducts = async (req, res) => {
  try {
    const {
      title,
      subtitle,
      brand,
      description,
      price,
      category,
      rating,
      stock,
      onsale,
      discount,
      isproductnew,
    } = req.body;

    const images = req.files.map(
      (file) => "http://localhost:8080/uploads/" + file.filename
    );
    const newProduct = new productmodel({
      title,
      subtitle,
      brand,
      description,
      image: images,
      price,
      category,
      rating,
      stock,
      onsale,
      discount,
    });

    // Save the product to the database
    await newProduct.save();

    // Respond with success
    res.json({
      status: "success",
      message: "Product added successfully",
      product: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
