const PubSub = require('../helpers/pub_sub.js');

const BucketList = function () {};

BucketList.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:dream-submitted', (evt) => {
    const inputtedText = evt.detail;
    // TODO: sent this to the database
    PubSub.publish('BucketList:dream-result', inputtedText);
  });
};

module.exports = BucketList;
