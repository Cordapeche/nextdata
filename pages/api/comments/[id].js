import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/commentaries');

import Commentary from "@/models/commentary";

export default async function handler(req, res) {

  console.log(req.query.id);

  const id = req.query.id
  const comment = await Commentary.findOne({_id: id}).exec();

  // console.log(comment);
  res.status(200).json(comment)
}