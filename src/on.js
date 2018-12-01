Element.prototype.on = function(eventNames, listener) {
  const events = eventNames.split(' ');
  for (var i=0, iLen = events.length; i<iLen; i++) {
    this.addEventListener(events[i], listener, false);
  }
};
