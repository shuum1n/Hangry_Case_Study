const { Menu } = require('../models');

class MenuController
{
    static async getMenuData(req, res, next)
    {
        try
        {
            const menuDatas = await Menu.findAll();
            res.status(200).json({
                data: menuDatas
            });
        }
        catch (error)
        {
            next(error);
        }
    }
    static async getOneMenu(req, res, next)
    {
        try
        {
            const { menuId } = req.params;
            const menu = await Menu.findByPk(menuId);
            if (!menu)
            {
                throw {
                    name: "MENU_NOT_FOUND",
                    message: "Invalid menu item!"
                }
            }
            else
            {
                res.status(200).json({
                    data: menu
                })
            }
        } catch (error)
        {
            next(error)
        }
    }
}

module.exports = MenuController;