var Renderer = function(canvas_id, config) {
  this.config  = config;
  this.element = document.getElementById(canvas_id);
  this.ctx     = this.element.getContext('2d');
  if(!this.ctx) {
    console.error('Renderer could not get 2d context of canvas with id ' + canvas_id);
  }

  var margin_top = (window.innerHeight - this.element.height) / 2;
  this.element.style.cssText = 'margin-top: ' + margin_top + 'px;';
};

Renderer.prototype.render = function(hours, minutes, seconds) {

  this.renderStack(hours[0], '#3D8CDA', 0);
  this.renderStack(hours[1], '#3D8CDA', 100);

  this.renderStack(minutes[0], '#3DDA73', 200);
  this.renderStack(minutes[1], '#3DDA73', 300);

  this.renderStack(seconds[0], '#CF4A4A', 400);
  this.renderStack(seconds[1], '#CF4A4A', 500);
};

Renderer.prototype.renderStack = function(values, color, startposition) {
  values = values.split('');

  for(var i in values) {
    if(values[i] == '0') {
      this.ctx.fillStyle = '#343637';
    } else {
      this.ctx.fillStyle = color;
    }
    this.ctx.fillRect(startposition, 0 + (30 * i), 80, 20);
  }
};
