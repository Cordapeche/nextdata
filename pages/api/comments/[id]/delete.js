// 1 importer mongoose (la librairie)
import mongoose from 'mongoose'
// se connecter à mongodb
mongoose.connect('mongodb://localhost:27017/commentaries');
// Importer notre model
import Commentary from "@/models/eshop";

const Delete = async (req, res) => {

    console.log(req.query.id);

    const deleted = await Commentary.deleteOne({ _id: req.query.id });
    console.log('deleted', deleted);

    const commentaries = await Commentary.find().exec();
    res.status(200).json(commentaries);
}

export default Delete;