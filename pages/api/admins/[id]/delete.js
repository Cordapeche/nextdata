// 1 importer mongoose (la librairie)
import mongoose from 'mongoose'
// se connecter à mongodb
mongoose.connect('mongodb://localhost:27017/eshop');
// Importer notre model
import Eshop from "@/models/eshop";

const Delete = async (req, res) => {

    console.log(req.query.id);

    const deleted = await Eshop.deleteOne({ _id: req.query.id });
    console.log('deleted', deleted);

    const articles = await Eshop.find().exec();
    res.status(200).json(articles);
}

export default Delete;