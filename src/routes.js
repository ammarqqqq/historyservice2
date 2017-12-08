const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('./config');
const logger = require('./logger.js')
const HistoryModel = require('./models/history.js');
/**
 * @api {get} /info Greeting from server
 * @apiVersion 1.0.0
 * @apiName GetInfo
 * @apiGroup Authenticationservice
 *
 * @apiSuccess {String} Greeting from server.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "Welcome to the user service"
 *     }
 */
router.get('/info', function (req, res) {
  res.send("Welcome to the history service");
});

router.post('/savehistory', function (req, res) {

    logger.info("savehistory");
    var history = req.body.historystring;
    var owner_id = req.body.owner_id;
    console.log(history);
    console.log(owner_id);
    var history = new HistoryModel({
      owner_id: owner_id,
      history: history
    });
    history.save(function(err, savedHistory) {
      if (err) return res.status(500).json({success: false, msg:"Could not save history"});
      logger.info("saved " + savedHistory);
      return res.json({success: true, msg:"history recorded"});
    });
});

router.get('/getallhistory', function (req, res) {
    logger.info("getallhistory");
    HistoryModel.find({}, function(err, historyEntries) {
      if (err) console.log(err);
      // object of all the users
      console.log(historyEntries);
      res.json({success: true, history:historyEntries});
    });
});

router.get('/getallhistoryforobject', function (req, res) {
    logger.info("getallhistoryforobject");
    var owner_id = req.body.owner_id;
    HistoryModel.find({owner_id : owner_id}, function(err, historyEntries) {
        return res.json({success: true, history:historyEntries});
    });
});

module.exports = router;
