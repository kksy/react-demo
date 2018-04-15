(function(root, factory) {
  root.ButtonDemo = factory();
}(this, function() {
  var ButtonDemo;

  var button = document.getElementById('click');
  console.log('WHICH BUTTON', button);
  var demoContainer = document.getElementById('click-demo');
  console.log('WHERE TO DISPLAY TEXT', demoContainer);

  var renderText = function() {
    var p = document.createElement('p');
    p.innerText = 'YAAAAAASSSS';
    demoContainer.append(p);
  };

  var addClickListener = function() {
    button.addEventListener('click', renderText);
  }

  ButtonDemo = {
    initialize: addClickListener,
  };

  return ButtonDemo;
}));
