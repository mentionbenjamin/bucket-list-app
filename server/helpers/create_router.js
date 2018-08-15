const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

  const router = express.Router();

  // INDEX
  router.get('/', (req, res) => {
    collection.find().toArray()
      .then((docs) => res.json(docs))
      .catch((error) => {
        console.error(error);
        res.status(500);
        res.json({status: 500, error: error});
      });
  });

  // CREATE

  // SHOW
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    collection.find({_id: ObjectID(id)})
      .toArray()
      .then((docs) => res.json(docs))
      .catch((error) => {
        console.error(error);
        res.status(500);
        res.json({status: 500, error: error});
      });
  });

  // DELETE

  return router;

};

module.exports = createRouter;
