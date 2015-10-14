var BinaryClock = function() {

};

BinaryClock.prototype.tick = function(callback) {
  var date = this._tick();
  callback(date);
  setInterval((function() {
    var date = this._tick();
    callback(date);
  }).bind(this), 1000);
};

BinaryClock.prototype._tick = function() {
  var date = new Date();
  date = this._date2binary(date);
  for(var i in date) {
    date[i] = this._pad(date[i], 4);
  }
  return date;
};

BinaryClock.prototype._pad = function(str) {
  if (typeof(len) == "undefined") { var len = 4; }
  if (typeof(pad) == "undefined") { var pad = '0'; }

  if (len + 1 >= str.length) {
    str = Array(len + 1 - str.length).join(pad) + str;
  }

  return str;
};

BinaryClock.prototype._padNumber = function(number) {
  number = number.toString();
  if(number.length == 1) {
    return '0' + number;
  }
  return number.toString();
};

BinaryClock.prototype._date2binary = function(date) {
  var bin = [];

  var hours = date.getHours();
  hours = this._padNumber(hours);
  hours = hours.split('');
  bin.push((hours[0] >>> 0).toString(2))
  bin.push((hours[1] >>> 0).toString(2))

  var minutes = date.getMinutes();
  minutes = this._padNumber(minutes);
  minutes = minutes.split('');
  bin.push((minutes[0] >>> 0).toString(2))
  bin.push((minutes[1] >>> 0).toString(2))

  var seconds = date.getSeconds();
  seconds = this._padNumber(seconds);
  seconds = seconds.split('');
  bin.push((seconds[0] >>> 0).toString(2))
  bin.push((seconds[1] >>> 0).toString(2))

  console.log(bin);

  return bin;
};
