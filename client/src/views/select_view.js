const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (form) {
  this.form = form;
};

SelectView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    handleSubmit(evt);
  });
};

function handleSubmit(evt) {
  console.log("Banana");
};

module.exports = SelectView;
