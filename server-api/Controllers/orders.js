import Order from '../Models/ordersmodels.js';


const fetchUserOrders =async (req, res) => {

    const orders = await Order.find({ user: req.params.id });
	if (orders) {
		res.json(orders);
	} else {
		res.json({ error: 'No orders could be found.' });
	}

};

const fetchdeliverdOrders = async (req, res) => {
	const orders = await Order.find({isdeliverd:true});
	res.send(orders);
};
const fetchalldOrders = async (req, res) => {
	const orders = await Order.find({isdeliverd:false});
	res.send(orders);
};

const deleteOrder = async (req, res) => {
	const order = await Order.findByIdAndDelete(req.params.id);
	if (order) {
		res.send(order);
	} else {
		res.send('Order not found.');
	}
};

const setDelivered = async (req, res) => {
	const { id } = req.body;
	const order = await Order.findById(id);

	if (order) {
		console.log(order)
		order.isdeliverd = true;
		const updatedOrder = await order.save();
		res.send(updatedOrder);
	} else {
		res.send('Order could not be uploaded.');
	}
};
const fetchorderBYId = async (req, res) => {
	const order = await Order.findById(req.params.id);
    if (order) {
        res.send(order);
    } else {
        res.send('Order not found.');
    }
    };


export { 
    fetchUserOrders,
	fetchdeliverdOrders,
	deleteOrder,
	setDelivered,
	fetchorderBYId,
	fetchalldOrders
};
