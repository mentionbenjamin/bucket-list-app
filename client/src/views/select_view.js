const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (form) {
  this.form = form;
};

SelectView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    handleSubmit(evt);
  });
};

function handleSubmit(evt) {
  const newDream = evt.target["bucket-input"].value;
  PubSub.publish("SelectView:dream-submitted", newDream);
  evt.target.reset();
};


module.exports = SelectView;
