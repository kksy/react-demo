(function(root, factory) {
  root.ButtonDemo = factory();
}(this, function() {
  var ButtonDemo;

  var button = document.getElementById('click');
  console.log('WHICH BUTTON', button);
  var demoContainer = document.getElementById('click-demo');
  console.log('WHERE TO DISPLAY TEXT', demoContainer);

  var renderParrots = function() {
    var image = document.createElement('img');
    image.src = 'img/party_parrot.gif';
    demoContainer.append(image);
  };

  var addClickListener = function() {
    button.addEventListener('click', renderParrots);
  }

  ButtonDemo = {
    initialize: addClickListener,
  };

  return ButtonDemo;
}));
