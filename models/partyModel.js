
const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://rhaasti:5qSk4tdRcwnZAOq4@partyanimals.1gzhkiq.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to Mongo DB.'))
    .catch(err => console.log(err));


// const Schema = mongoose.Schema;

const Party = mongoose.model('Party', mongoose.Schema({

// const partySchema = new Schema({
    uniqueKey: { type: String, unique: true },
    createdDate: { type: String },
    incidentAddress: { type: String },
    incidentZip: { type: String },
    borough: { type: String },
    descriptor: { type: String },
    complaintType: { type: String },
    latitude: { type: String },
    longitude: { type: String }
}))

module.exports = Party



