const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const BucketList = function (url) {
  this.url = 'http://localhost:3000/api/dreams';
  this.request = new Request(this.url);
};

BucketList.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:dream-submitted', (evt) => {

    this.postDream(evt.detail);
    console.log(evt.detail);
  });
};

BucketList.prototype.getData = function () {
  this.request.get()
    .then((dreams) => {
      console.log("Dreams", dreams);
      PubSub.publish('BucketList:dream-result', dreams);
    })
    .catch(console.error);
};

BucketList.prototype.postDream = function (dream) {
  this.request.post(dream)
    .then((dream) => {
      PubSub.publish('BucketList:dream-result', dream);
    })
    .catch(console.error);
};





module.exports = BucketList;
