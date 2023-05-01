const fetch = require('node-fetch');
const Party = require('../models/partyModel');

console.log('in the controller');

async function callToAPI() {


    try {
        console.log('in the try block')
        const response = await fetch("https://data.cityofnewyork.us/resource/erm2-nwe9.json?descriptor='Loud Music/Party'&$limit=1000&$select=unique_key,created_date,incident_address,incident_zip,borough,descriptor,complaint_type,latitude,longitude&$$app_token=h1WcLxGB20iLGSrjy1z7bt3Kn");

        const data = await response.json();
        data.forEach((record) => {
            const date = new Date(record.created_date)
            const day = date.getDay()

            Party.create({
                uniqueKey: record.unique_key,
                createdDate: day,
                incidentAddress: record.incident_address,
                incidentZip: record.incident_zip,
                borough: record.borough,
                descriptor: record.descriptor,
                complaintType: record.complaint_type,
                latitude: record.latitude,
                longitude: record.longitude
            })
        })
    }
    catch {
        console.log('error in API call')
    }

}

callToAPI();


const DbController = {
  
  findByBoroughAndDay: (req, res, next) => {
    models.find({borough: req.body.borough, day: req.body.day}, (err, locations) => {
      if (err) {
        return next(console.log(err, "error in findByBurough controller"));
      }
      return next();
    })
  }
}

module.exports = DbController;

