import { selectCart } from '../queries/select.js'
import { insertCart } from '../queries/insert.js'
import { deleteCart } from '../queries/delete.js'
import { updateCart } from '../queries/update.js'




export const showCart = (req, res) => {
    selectCart(req, res, 'cart')
}

export const addProduct = (req, res) => {
    insertCart(req, res)
}

export const deleteProduct = (req, res) => {
    deleteCart(req, res)
}

export const checkOut = (req, res) => {
    updateCart(req,res)
}
