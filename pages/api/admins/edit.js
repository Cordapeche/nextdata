import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/eshop');

import Eshop from "@/models/eshop";

export default async function handler(req, res) {
    // creation des parametres
    const filter = { _id: req.body.id }
    const update = { title: req.body.title, price: req.body.price, description: req.body.description }
    // trouver et mettre à jour
    const reponse = await Eshop.findOneAndUpdate(filter, update);
    // renvoyer une reponse 
    if (reponse)
        res.status(200).json({ error: 0, message: "Eveything is ok" })
    else
        res.status(200).json({ error: 1, message: "Eveything is NOT ok" })
}