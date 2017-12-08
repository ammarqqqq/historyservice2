const mongoose = require('mongoose');
const Config = require('./config'),
      config = new Config();


const serviceLookupHandler = require("./consulLookup.js");
//We need to work with "MongoClient" interface in order to connect to a mongodb server.
module.exports.listen = function(url){
  //serviceLookupHandler.serviceLookup("historymongodb", '').then(serverAddress => {
    var url = config.database;
    //var url = "mongodb://" + serverAddress.address + ":" + serverAddress.port + "/historytable";
    try {
      mongoose.connect(url);
      console.log("Connected to " + url)
    } catch(error) {
      console.log("Could not connect to " + url + ". " + error);
    }

    return mongoose;
  //});
}