"use strict";
Array.prototype.uniq = function () {
  var uniqArray = [];
  for (var i = 0 ; i<this.length ; i++) {
    if (uniqArray.indexOf(this[i]) === -1) {
      uniqArray.push(this[i]);
    };
  };
  return uniqArray
};


Array.prototype.twoSum = function() {
  var resultArray = [];
  for (var i = 0 ; i<this.length ; i++) {
    for (var j = i + 1; j < this.length; j++) {
      if ((this[i] + this[j]) === 0) {
        resultArray.push([i,j]);
      };
    };
  };
  return resultArray;
};

Array.prototype.transpose = function() {
  var transposeArray = []
  for (var i = 0 ; i<this.length ; i++) {
    var row = [];
    for (var j = 0 ; j < this.length; j++) {
      row.push(this[j][i]);
    };
    transposeArray.push(row);
  };
  return transposeArray;
};
