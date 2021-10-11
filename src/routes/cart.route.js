import {showCart, addProduct, deleteProduct, checkOut} from '../controllers/cart.controller.js'
import express from 'express';

const router = express.Router();

router.get('/cart', showCart);
router.post('/cart/add', addProduct);
router.delete('/cart/delete/:title', deleteProduct);
router.put('/cart/checkout', checkOut);


export default router;