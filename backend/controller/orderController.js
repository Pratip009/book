const asyncWrapper = require("../middleWare/asyncWrapper");
const orderModel = require("../model/orderModel");
const productModel = require("../model/ProductModel");
const ErrorHandler = require("../utils/errorHandler");

//>>>>>>>>>>>>>>>  create a order    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
exports.newOrder = asyncWrapper(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  // create order :
  const order = await orderModel.create({  
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    user: req.user._id, // from authenticated user
    paidtAt: Date.now(),
  });

  res.status(201).json({
    success: true,
    order,
  });
});
//>>>>>>>cancel order>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// In controller/orderController.js

exports.cancelOrder = async (req, res, next) => {
  try {
      const order = await Order.findById(req.params.id);

      if (!order) {
          return res.status(404).json({ success: false, message: "Order not found" });
      }

      // Check if the order belongs to the user or if the user is an admin
      if (order.user.toString() !== req.user._id.toString() && req.user.role !== "admin") {
          return res.status(403).json({ success: false, message: "Not authorized to cancel this order" });
      }

      order.status = "Cancelled"; // Assuming "Cancelled" is a valid status in your order model
      await order.save();

      res.status(200).json({ success: true, message: "Order cancelled successfully" });
  } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
  }
};



//>>>>>>>>>>>> getSingleOrder >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
exports.getSingleOrder = asyncWrapper(async (req, res, next) => {
  const order = await orderModel
    .findById(req.params.id)
    .populate({ path: "user", select: "name email" });
  if (!order) {
    return next(new ErrorHandler("Order not found with this Id", 404));
  }

  res.status(200).json({
    success: true,
    order,
  });
});

// >>>>>>>>>>>>>>>> getUsers all orders >>>>>>>>>>>>>>>>>>>>>>>>>>>>>

exports.myOrders = asyncWrapper(async (req, res) => {
  const userOrders = await orderModel.find({ user: req.user._id }); // this id from authentictaion user.req

  res.status(200).json({
    success: true,
    userOrders,
  });
});

//>>>>>>>>>>>>>>>>>>>>>>>>>>> get all Orders -- Admin>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

exports.getAllOrders = asyncWrapper(async (req, res, next) => {
  const orders = await orderModel.find();

  let totalAmount = 0;
  // count total price of all order for dashbord
  orders.forEach((order) => {
    totalAmount += order.totalPrice;
  });

  res.status(200).json({
    success: true,
    totalAmount,
    orders,
  });
});

// update Order Status -- Admin
exports.updateOrder = asyncWrapper(async (req, res, next) => {
   
  const order = await orderModel.findById(req.params.id);

    
  if (!order) {
    return next(new ErrorHandler("Order not found with this id", 400));
  }
  if (order.orderStatus === "Delivered") {
    return next(new ErrorHandler("You have already delivered this order", 400));
  }

  // when orderd is shipped and need to update order status to deliverd then. pass order id updateStock function and also pass quantity of the product
  // orderItems is the array of object in orderSchema with {name , productId , quantity , phoneNo .. so on}propoerty
    if (req.body.status === "Shipped"){
 order.orderItems.forEach(async (orderItem) => {
   await updateStock(orderItem.productId, orderItem.quantity);
 });
    }
 

  // once order quantity is reduced in productModel then update status as oredrStatus well
  order.orderStatus = req.body.status;
 
  // now also set delivery time once order Delivered:
  if (order.orderStatus === "Delivered") {
    order.deliveredAt = Date.now();
  }

  // save to DataBase
  await order.save({ validateBeforeSave: false });
  res.status(200).json({
    success: true,
  });
});

// update status function with. productId and quantity params
async function updateStock(id, quantity) {
  try {
    const product = await productModel.findById(id);
    if (!product) {
      throw new ErrorHandler("Product not found", 404); 
    }

    // Update the stock of the product using the order quantity
    product.Stock -= quantity;

    await product.save({ validateBeforeSave: false });
  } catch (error) {
    throw new ErrorHandler("Product not found", 404); 
  }
}

//>>>>>>>>>>>>>>>>>>>>> delete Order -- Admin >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
exports.deleteOrder = asyncWrapper(async (req, res, next) => {
  const order = await orderModel.findById(req.params.id);

  if (!order) {
    return next(new ErrorHandler("Order not found with given Id", 400));
  }

  await order.remove();

  res.status(200).json({
    success: true,
    message: "Order deleted successfully",
  });
});
