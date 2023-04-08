import { Schema, model } from "mongoose"

export interface IBrewery {
    name: String,
    street: String,
    address2: String,
    city: String,
    state: String,
    zip: String,
    country: String,
    longitude: String,
    latitude: String,
    phone: String,
    website: String,
    logoUrl: String,
}

const Brewery = new Schema({
    name: { type: String },
    street: { type: String },
    address2: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    country: { type: String },
    longitude: { type: String },
    latitude: { type: String },
    phone: { type: String },
    website: { type: String },
    logoUrl: { type: String },
})

export const BreweryModel = model<IBrewery>('breweries', Brewery)