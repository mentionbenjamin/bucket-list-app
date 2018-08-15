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
  // const newDream = evt.target["bucket-input"].value;
  const newDream = createDream(evt.target);
  PubSub.publish('SelectView:dream-submitted', newDream);
  evt.target.reset();
};

function createDream (details) {
  return {text: details["bucket-input"].value};
};



module.exports = SelectView;
