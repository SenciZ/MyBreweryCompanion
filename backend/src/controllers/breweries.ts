import axios from "axios";
import { BreweryModel } from "../models/brewery";

export const SearchBrewery = async (req, res) =>{
    try {
        const searchName = req.query.name;
        if (!searchName) {
            return res.status(500).json({message: "Please provide a search query"})
          } 
        const searchRegex = new RegExp(`${searchName}`, 'i')
        const searchResultFromName = await BreweryModel.find( { name: searchRegex });
        const searchResultFromCity = await BreweryModel.find( { city: searchRegex });
        const searchResultCombined = searchResultFromName.concat(searchResultFromCity);
        if (searchResultCombined.length > 0) {
            res.send(searchResultCombined);
        } else {
            return res.status(500).json({message: "No results found"})
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message})
        res.send(error)
    }
}


// used to read all breweries in United States from OpenBrewery and put them into MongoDB
export const polulateDB = async (req, res ) => {
    for(let i = 0; i <= 409; i++){
        setTimeout( async () => {
            try {
                const breweriesList = await axios({
                    url: `https://api.openbrewerydb.org/breweries?page=${i}&per_page=20`,
                    method: 'GET',
                }).then( response => {
                    response.data.forEach(async brewery => {
                        if ( brewery.country !== "United States") {
                            console.log(brewery.country)
                            return;
    
                        }
                        await new BreweryModel({
                            name: brewery.name,
                            street: brewery.street,
                            address2: brewery.address2,
                            city: brewery.city,
                            state: brewery.state,
                            zip: brewery.postal_code,
                            country: brewery.country,
                            longitude: brewery.longitude,
                            latitude: brewery.latitude,
                            phone: brewery.phone,
                            website: brewery.website_url,
                        }).save();
                    });
                })
            } catch (error) {
                console.log(error)
            }
        }, 2000)
    }
}