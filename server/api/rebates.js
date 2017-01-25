import { Router } from 'express'
const router = new Router()

// Remove this
import rebates from '../fakeDB/rebates.js'

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://rsuser:Asdf1234@ds019976.mlab.com:19976/redeemstar_demo';

router.get('/', (req, res) => {
  // setTimeout(() => {
  //   res.status(200).json(rebates)
  // }, 300)
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    // Get the documents collection
    var collection = db.collection('rebates');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      res.status(200).json(docs)
    });
  });
})

router.get('/:slug', (req, res) => {
  
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    // Get the documents collection
    var collection = db.collection('rebates');
    // Find some documents
    collection.find({'slug': req.params.slug}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs);
      res.status(200).json(docs[0])
    });      
  });

  /*
  const index = rebates.findIndex(el => el.slug === req.params.slug)
  // console.log("=========== rebates /:slug ===========")
  // console.log(req.params)
  // console.log(index)
  // console.log(rebates)
  if (index < 0) {
    res.status(404).json({
      error: 'Rebate does not exist in db'
    })
  }

  setTimeout(() => {
    // console.log(rebates[index])
    res.status(200).json(rebates[index])
  }, 300)
  */
})

module.exports = router
