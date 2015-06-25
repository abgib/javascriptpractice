"use strict";
Array.prototype.uniq = function () {
  //this === array
  var uniqArray = []
  for (var i = 0 ; i<this.length ; i++) {
    if (!uniqArray.includes(this[i])){
      uniqArray.push(this[i]);
    };
  };
  return uniqArray
};
