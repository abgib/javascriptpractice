"use strict";

Array.prototype.myEach = function (func) {
  for (var i = 0; i < this.length; i++) {
    func(this[i]);
  };

  return this;
};

Array.prototype.myMap = function (func) {
  var mappedArray = [];
  var shovelFunc = function (obj) {
    mappedArray.push(func(obj));
  };
  this.myEach(shovelFunc);
  return mappedArray;
};

Array.prototype.myInject = function (func) {
  var accum = this[0];
  var injectFunc = function (obj) {
    accum = func(accum, obj);
  };
  this.slice(1,this.length).myEach(injectFunc);
  return accum;
};
