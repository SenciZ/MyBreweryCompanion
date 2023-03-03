// import axios from "axios";
// import { BreweryModel } from "../models/brewery";

// // used to read all breweries in United States from OpenBrewery and put them into MongoDB
// export const polulateDB = async (req, res ) => {
//     for(let i = 0; i <= 409; i++){
//         setTimeout( async () => {
//             try {
//                 const breweriesList = await axios({
//                     url: `https://api.openbrewerydb.org/breweries?page=${i}&per_page=20`,
//                     method: 'GET',
//                 }).then( response => {
//                     response.data.forEach(async brewery => {
//                         if ( brewery.country !== "United States") {
//                             console.log(brewery.country)
//                             return;
    
//                         }
//                         await new BreweryModel({
//                             name: brewery.name,
//                             street: brewery.street,
//                             address2: brewery.address2,
//                             city: brewery.city,
//                             state: brewery.state,
//                             zip: brewery.postal_code,
//                             country: brewery.country,
//                             longitude: brewery.longitude,
//                             latitude: brewery.latitude,
//                             phone: brewery.phone,
//                             website: brewery.website_url,
//                         }).save();
//                     });
//                 })
//             } catch (error) {
//                 console.log(error)
//             }
//         }, 2000)
//     }
// }