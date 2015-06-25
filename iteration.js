Array.prototype.bubbleSort = function () {
  var madeSort = true;
  while (madeSort === true) {
    madeSort = false;
    for (var i = 0; i < this.length; i++) {
      if (this[i] > this[i+1]) {
        madeSort = true;
        var temp = this[i];
        this[i] = this[i+1];
        this[i+1] = temp;
      };
    };
  };
  return this;
};


var substrings = function(text) {
  var subArray = [];
  for (var i = 0; i < text.length; i++) {
    for (var j = i + 1; j <= text.length; j++) {
      subArray.push(text.slice(i,j));
    };
  };

  return subArray;
};
