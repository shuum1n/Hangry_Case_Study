const { Locations } = require('../models');

class LocationsController 
{
    static async getLocations(req, res, next)
    {
        try
        {
            const locations = await Locations.findAll()
            res.status(200).json({
                data: locations
            })
        }
        catch (error)
        {
            next(error)
        }
    }
}

module.exports = LocationsController