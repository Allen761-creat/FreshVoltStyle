

//   username: "Bob Smith",
//   email: "bobsmith@example.com",
//   phone:"12345",
//   orderitems: [
//     {
//       title: "Product 4",
//       price: 150,
//       image: "https://m.media-amazon.com/images/I/81ItG4mkmHS._AC_SX522_.jpg",
//       qty: 3,
//     },
//     {
//         title: "orderitemsorderitemsorderitemsorderitemsorderitems",
//         price: 150,
//         image: "https://m.media-amazon.com/images/I/81ItG4mkmHS._AC_SX522_.jpg",
//         qty: 3,
//       },
//       {
//         title: "Product 4",
//         price: 150,
//         image: "https://m.media-amazon.com/images/I/81ItG4mkmHS._AC_SX522_.jpg",
//         qty: 3,
//       },
//   ],
//   shippingadress: {
//     adress: "789 Pine Street",
//     city: "San Francisco",
//     postalCode: "94101",
//     country: "USA",
//   },
//   shippingprice: 15,
//   totalprice: 465,
//   subtotal: 450,
//   isdeliverd: true,
//   deliveryAt: "2025-01-05T17:38:12.682Z",
// };
const SingleOrderDetail = ({order}) => {
    console.log(order + "ma yah hu")
  return (
    <div className="max-w-[500px] mt-3 mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-2">Order Details</h1>
<div className='flex justify-between text-[13px]'>
      <div className="mb-2">
        <h3 className="text-lg font-medium">Customer Info:</h3>
        <p><strong>Name:</strong> {order.username}</p>
        <p><strong>Email:</strong> {order.email}</p>
        {/* <p><strong>Phone#:</strong> {order.phone}</p> */}
      </div>

      <div className="mb-2">
        <h3 className="text-lg font-medium">Shipping Address:</h3>
        <p><strong>Address:</strong> {order.shippingadress.adress}</p>
        <p><strong>City:</strong> {order.shippingadress.city}</p>
        <p><strong>Postal Code:</strong> {order.shippingadress.postalCode}</p>
        <p><strong>Country:</strong> {order.shippingadress.country}</p>
      </div>
</div>
      <div className="mb-2">
        <h3 className="text-lg font-medium">Order {order.oderitems.length} {order.oderitems.length==1?"product":" products"}</h3>
        {order.oderitems.map((item, index) => (
          <div key={index} className=" flex  items-center   py-2 border-b border-gray-300">
            <div className="">
              <img src={item.image} alt={item.title} className="w-[40px] h-[40px] rounded-lg" />
            </div>
            <div className="ml-4 flex gap-4 text-[15px]  ">
              <p className="w-[170px] text-ellipsis text-center overflow-hidden whitespace-normal ">{item.title}</p>
              <p><strong>Price:</strong>&nbsp;{item.price}<p className='inline text-[10px]'>(pkr)</p></p>
              <p><strong>Qty:</strong> {item.qty}</p>
            </div>
          </div>
        ))}
      </div>
<div className='flex text-[13px] justify-evenly'>
      <div className="mb-2">
        <p><strong>Subtotal:</strong>&nbsp;{order.subtotal}<p className='inline text-[10px]'>(pkr)</p></p>
        <p><strong>Total Price:</strong>&nbsp;{order.totalprice}<p className='inline text-[10px]'>(pkr)</p></p>
      </div>

      <div>
      <p><strong>Shipping:</strong>&nbsp;{order.shippingprice}<p className='inline text-[10px]'>(pkr)</p></p>
        <p><strong>Delivered:</strong> {order.isdeliverd ? 'Yes' : 'No'}</p>
      
      </div>
</div>
    </div>

);
};

export default SingleOrderDetail;