const DetailView = function (container) {
  this.container = container;
};

DetailView.prototype.render = function (data) {
  const dreamText = document.createElement('p');
  dreamText.classList.add('dream-child');
  dreamText.textContent = data.text;
  this.container.appendChild(dreamText);
};


module.exports = DetailView;
