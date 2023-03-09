import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/commentaries');

import Commentary from "@/models/commentary";

export default async function handler(req, res) {
    // creation des parametres
    const filter = {_id: req.body.id}
    const update = {name: req.body.name, text: req.body.text}
    // trouver et mettre à jour
    const reponse = await Commentary.findOneAndUpdate(filter, update);
    // renvoyer une reponse 
    if(reponse)
        res.status(200).json({error: 0, message: "Eveything is ok"})
    else
        res.status(200).json({error: 1, message: "Eveything is NOT ok"})
}