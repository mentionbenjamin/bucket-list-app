const SelectView = require('./views/select_view.js');
const BucketList = require('./models/bucket_list.js');
const ListView = require('./views/list_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form.input-form');
  const selectView = new SelectView(form);
  selectView.bindEvents();

  const dreamContainer = document.querySelector('div#bucket-list-results');
  const listView = new ListView(dreamContainer);
  listView.bindEvents();

  const bucketList = new BucketList();
  bucketList.getData();
  bucketList.bindEvents();
});
