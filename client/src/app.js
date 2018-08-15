const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form.input-form');
  const selectView = new SelectView(form);
  selectView.bindEvents();
});
