// 1 importer mongoose (la librairie)
import mongoose from 'mongoose'
// se connecter à mongodb
mongoose.connect('mongodb://localhost:27017/eshop');
// Importer notre model
import Eshp from "../../../models/eshop";
// Notre handler 
export default async function handler(req, res) {
    // On récupère les commentaires de la DB
    const eshop = await Eshp.find().exec();
    // On envoie le résultat au client
    res.status(200).json(eshop);
}