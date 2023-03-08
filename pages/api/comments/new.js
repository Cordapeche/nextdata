import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/commentaries');

import Commentary from "@/models/commentary";

export default async function handler(req, res) {
  const addnew = new Commentary(req.body)

  await addnew.save()

  console.log(req.body);
  res.status(200).json({})
}