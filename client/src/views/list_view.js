const PubSub = require('../helpers/pub_sub.js');

const ListView = function (container) {
  this.container = container;
};

ListView.prototype.bindEvents = function () {
  PubSub.subscribe('BucketList:dream-result', (evt) => {
    const newDream = evt.detail;
    console.log(newDream);
  });
};

module.exports = ListView;
