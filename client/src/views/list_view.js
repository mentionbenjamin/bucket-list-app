const PubSub = require('../helpers/pub_sub.js');
const DetailView = require('./detail_view.js');

const ListView = function (container) {
  this.container = container;
};

ListView.prototype.bindEvents = function () {
  PubSub.subscribe('BucketList:dream-result', (evt) => {
    this.render(evt.detail);
  });
};

ListView.prototype.render = function (dreams) {
  this.container.innerHTML = '';
  const detailView = new DetailView(this.container);
  dreams.forEach((dream) => detailView.render(dream));
};

module.exports = ListView;
