const { Cart, CartDetail, Menu } = require('../models');

class CartController
{
    static async getCart(req, res, next)
    {
        try
        {
            // get cart by id
            const { cartId } = req.params;
            const currentCart = await Cart.findByPk(cartId)
            if (!currentCart)
            {
                throw {
                    name: "CART_NOT_FOUND",
                    message: "No cart found, please insert item into cart!"
                }
            }
            else
            {
                res.status(200).json({
                    data: currentCart
                })
            }
        }
        catch (error)
        {
            next(error)
        }
    }

    static async addItemToCart(req, res, next)
    {
        try
        {
            const { cartId } = req.params;
            const { itemId, itemQuantity } = req.body;
            const menu = await Menu.findByPk(itemId)
            if (!menu)
            {
                console.log("there")
                throw {
                    name: "MENU_NOT_FOUND",
                    message: "Invalid menu item!"
                }
            }
            if (menu.availability === false)
            {
                throw {
                    name: "MENU_NOT_AVAILABLE",
                    message: "Menu is not available!"
                }
            }
            let currentCart = await Cart.findByPk(cartId)
            if (!currentCart)
            {
                currentCart = await Cart.create({
                    orderStatus: "Available"
                })
            }
            else if (currentCart.orderStatus === "Checkout")
            {
                throw {
                    name: "CART_CHECKED_OUT",
                    message: "This cart has already checked out!"
                }
            }
            const cartDetailExists = await CartDetail.findOne({
                where: {
                    CartId: currentCart.id,
                    ItemId: menu.id
                }
            })
            console.log(itemQuantity);
            if (!cartDetailExists)
            {
                await CartDetail.create({
                    CartId: currentCart.id,
                    ItemId: menu.id,
                    quantity: itemQuantity || 1
                })
            }
            else if (itemQuantity >= 1)
            {
                cartDetailExists.quantity += itemQuantity;
                await cartDetailExists.save()
            }
            res.status(200).json({
                message: `Item ${menu.name} successfully added to cart!`
            })
        } catch (error)
        {
            next(error)
        }
    }

    static async removeItemFromCart(req, res, next)
    {
        try
        {
            const { cartId } = req.params;
            const { itemId, itemQuantity } = req.body;
            const currentCart = await Cart.findOne({
                where: {
                    id: cartId
                }
            })
            if (!currentCart) // check if there is a cart available 
            {
                throw {
                    name: "CART_EMPTY",
                    message: "No cart found, please insert item into cart!"
                }
            }
            // now we check is there an item in our current cart that
            // matches the id that we want to remove
            const itemInCart = await CartDetail.findOne({
                where: {
                    CartId: currentCart.id,
                    ItemId: itemId
                }
            })
            if (!itemInCart)
            {
                throw {
                    name: "ITEM_NOT_IN_CART",
                    message: "Item is not in cart!"
                }
            }
            // if the quantity is zero, assume we want to remove the item
            if (!itemQuantity) 
            {
                await itemInCart.destroy();
            }
            else
            {
                itemInCart.quantity -= itemQuantity;
                // destroy the item if quantity is below 1
                if (itemInCart.quantity < 1)
                {
                    await itemInCart.destroy();
                }
                // else save
                else
                {
                    await itemInCart.save();
                }
            }
            res.status(200).json({
                message: "Item in cart edited!"
            })
        }
        catch (error)
        {
            next(error)
        }
    }

    static async checkoutCart(req, res, next)
    {
        try
        {
            const { cartId } = req.params;
            const cartToCheckout = await Cart.findByPk(cartId, {
                include: {
                    model: CartDetail,
                    include: {
                        model: Menu
                    }
                }
            });
            if (!cartToCheckout)
            {
                throw {
                    name: "CART_NOT_EXIST",
                    message: "Cart does not exist!"
                }
            }
            if (cartToCheckout.orderStatus === "Checkout")
            {
                throw {
                    name: "CART_CHECKED_OUT",
                    message: "This cart has already checked out!"
                }
            }
            else
            {
                cartToCheckout.orderStatus = "Checkout";
                await cartToCheckout.save();
                res.status(200).json({
                    message: "Cart checkout!",
                    contents: cartToCheckout
                })
            }
        } catch (error)
        {
            next(error)
        }
    }
}

module.exports = CartController;