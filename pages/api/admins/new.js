import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/eshop');

import Eshop from "@/models/eshop";

export default async function handler(req, res) {
  const addnew = new Eshop(req.body)

  await addnew.save()

  console.log(req.body);
  res.status(200).json({})
}