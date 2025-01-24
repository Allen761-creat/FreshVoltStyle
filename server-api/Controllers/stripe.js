// // // import Stripe from 'stripe'
// // // import {  STRIPE_SECRET_KEY } from '../Configuration/config.js'
// // // const stripe = new Stripe(STRIPE_SECRET_KEY)    

// // // export const payment = async (req, res) => {
// // //     const { totalamount, items } = req.body;
// // //     const lineitems = items.map((product) => ({
// // //       price_data: {
// // //         currency: 'usd',
// // //         product_data: {
// // //           name: product.title,
// // //           images: [product.image[0]],
// // //         },
// // //         unit_amount: product.price * 100, // Convert price to cents
// // //       },
// // //       quantity: product.quantity,
// // //     }));
  
// // //     const session = await stripe.checkout.sessions.create({
// // //       payment_method_types: ['card'],
// // //       line_items: lineitems,
// // //       mode: 'payment',
// // //       success_url: 'http://localhost:3000/success',
// // //       cancel_url: 'http://localhost:3000/cancel',
// // //     });
  
// // //     res.json({ id: session.id });
// // //   };
  

// // import Stripe from 'stripe';
// // import { STRIPE_SECRET_KEY } from '../Configuration/config.js';

// // const stripe = new Stripe(STRIPE_SECRET_KEY);

// // export const payment = async (req, res) => {
// //   try {
// //     const { totalamount, items } = req.body;
    
// //     // Ensure the items are correctly formatted
// //     const lineitems = items.map((product) => {
// //       // Check if price is a valid number and convert to integer (cents)
// //       const priceInCents = Math.round(parseFloat(product.price) * 100); // Make sure it's in cents

// //       return {
// //         price_data: {
// //           currency: 'usd',
// //           product_data: {
// //             name: product.title,
// //             images: [product.image[0]], // Assuming this is a valid image URL
// //           },
// //           unit_amount: priceInCents,
// //         },
// //         quantity: product.quantity,
// //       };
// //     });

// //     // Create the Stripe Checkout session
// //     const session = await stripe.checkout.sessions.create({
// //       payment_method_types: ['card'],
// //       line_items: lineitems,
// //       mode: 'payment',
// //       success_url: 'http://localhost:3000/success',
// //       cancel_url: 'http://localhost:3000/cancel',
// //     });

// //     // Send the session ID back to the client
// //     res.json({ id: session.id });

// //   } catch (error) {
// //     console.error('Error creating Stripe session:', error);
// //     res.status(500).send({ error: 'Internal server error' });
// //   }
// // };
// const lineitems = items.map((product) => {
//     if (!product.quantity) {
//       throw new Error(`Product ${product.title} is missing quantity`);
//     }
  
//     return {
//       price_data: {
//         currency: 'usd',
//         product_data: {
//           name: product.title,
//           images: [product.image[0]],  // Assuming product.image is an array
//         },
//         unit_amount: product.price * 100, // Convert price to cents
//       },
//       quantity: product.quantity, // Ensure quantity is included
//     };
//   });
  