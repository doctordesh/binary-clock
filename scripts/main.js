window.onload = function() {
  var renderer = new Renderer('canvas');
  var clock = new BinaryClock();
  clock.tick(function(date) {
    renderer.render(
      [date[0], date[1]],
      [date[2], date[3]],
      [date[4], date[5]]
    );
  });
};
