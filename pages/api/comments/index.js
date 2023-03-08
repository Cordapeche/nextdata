import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/commentaries');

import Commentary from "../../../models/commentary";


export default async function handler(req, res) {
    const commentaries = await Commentary.find().exec();

  

    res.status(200).json(commentaries);
}