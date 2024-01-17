const errorHandler = (err, req, res, next) =>
{
    const { name } = err;
    if (name)
    {
        if (Array.isArray(err.errors))
        {
            err.message = err.errors.map(x => x.message)
        }
        else
        {
            err.message = [err.message]
        }
        switch (name)
        {
            case "CART_EMPTY": {
                res.status(400).json({ message: err.message[0] });
                break;
            }
            case "CART_NOT_EXIST": {
                res.status(404).json({ message: err.message[0] });
                break;
            }
            case "CART_CHECKED_OUT": {
                res.status(400).json({ message: err.message[0] });
                break;
            }
            case "ITEM_NOT_IN_CART": {
                res.status(404).json({ message: err.message[0] });
                break;
            }
            case "MENU_NOT_FOUND": {
                res.status(404).json({ message: err.message[0] });
                break;
            }
            case "MENU_NOT_AVAILABLE": {
                res.status(400).json({ message: err.message[0] });
                break;
            }
            case "CART_NOT_FOUND": {
                res.status(404).json({ message: err.message[0] });
                break;
            }
            default: {
                res.status(500).json({ message: err.message[0] });
                // res.status(500).json({ message: "Internal Server Error" });
                break;
            }
        }
    }
}

module.exports = errorHandler;