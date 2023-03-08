// 1 importer mongoose (la librairie)
import mongoose from 'mongoose'
// se connecter à mongodb
mongoose.connect('mongodb://localhost:27017/commentaries');
// Importer notre model
import Commentary from "../../../models/commentary";
// Notre handler 
export default async function handler(req, res) {
    // On récupère les commentaires de la DB
    const commentaries = await Commentary.find().exec();
    // On envoie le résultat au client
    res.status(200).json(commentaries);
}