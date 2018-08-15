const PubSub = require('../helpers/pub_sub.js');
const DetailView = require('./detail_view.js');

const ListView = function (container) {
  this.container = container;
};

ListView.prototype.bindEvents = function () {
  PubSub.subscribe('BucketList:dream-result', (evt) => {
    const newDream = evt.detail;
    render(newDream, this.container);
  });
};

function render(data, container) {
  // console.log("container", container);
  const detailView = new DetailView(container);
  detailView.render(data);
};

module.exports = ListView;
