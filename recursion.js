var range = function (startPos, endPos) {
  var rangeArray = []
  if (endPos < startPos) {
    return [];
  };
  for (i = startPos; i <= endPos; i++) {
    rangeArray.push(i);
  };

  return rangeArray;
};


var recurRange = function(startPos, endPos) {
  var rangeArray = [startPos];
  if (startPos === endPos) {
    return rangeArray;
  } else {
    var shovelFunc = function(element) {
      rangeArray.push(element);
    };
    recurRange(startPos + 1, endPos).forEach(shovelFunc);
  };
  return rangeArray;
};

var expOne = function(base, power) {
  if (power === 0) {
    return 1;
  } else {
    return base * expOne(base, power - 1);
  };
};

var expTwo = function(base, power) {
  if (power === 0){
    return 1;
  } else if ( power === 1) {
    return base;
  } else {
    if (power % 2 === 0) {
      var result = expTwo(base, power/2);
      return result * result;
    } else {
      var result = expTwo(base, (power - 1) / 2);
      return base * result * result;
    };
  };
};

var fibonacci = function(n) {
  var baseCase = [1,1];
  if (n <= 2) {
    return baseCase.slice(0,n);
  };
  var preFib = fibonacci(n-1);
  preFib.push(preFib[preFib.length - 1] + preFib[preFib.length - 2]);
  return preFib;
};

var iterFib = function(n){
  var fibs = [1,1];
  if (n <= 2) {
    return fibs.slice(0,n);
  };
  for (var i = 3; i <= n; i++) {
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
  };
  return fibs;
};


var bsearch = function(array, target) {
  var pivot = Math.floor(array.length / 2);
  if (array.length < 1) { return null;};
  if (array[pivot] === target) {
      return pivot;
  } else if (array[pivot] > target) {
    return bsearch(array.slice(0, pivot), target);
  } else {
    return pivot + 1 + bsearch(array.slice(pivot + 1, array.length), target);
  };

};


var makeChange = function(amount, coinage) {
  //coinage = [ 10, 7, 1]
  var sortedCoins = coinage.bubbleSort().reverse()


    var bestCoins = null;

    for (var i = 0; i < sortedCoins.length; i++ ){
      console.log("i is " + i);
      console.log("amount is " + amount);
      console.log("sortedCoins[i] is " + sortedCoins[i]);
      var changeArray = [];
      if (amount >= sortedCoins[i]) {
        changeArray.push(sortedCoins[i]);
        if (amount - sortedCoins[i] > 0) {
          lowerCoins = makeChange(amount - sortedCoins[i], sortedCoins);
          changeArray = changeArray.concat(lowerCoins);
        } else {
          console.log("reaches else")
          break;
        };
      };
    };

    bestCoins = bestCoins || changeArray;
    console.log("bestCoins is " + bestCoins);
    console.log("changeArray is " + changeArray);
    console.log("testing sortedCoins as " + sortedCoins);
    if (changeArray.length < bestCoins.length) {
      bestCoins = changeArray;
    };

  return bestCoins;
};

var merge = function (left, right) {
  var merged = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      merged.push(left.shift());
    } else{
      merged.push(right.shift());
    };
  };
  merged = merged.concat(left, right);
  return merged;
};


var mergeSort = function(array) {
  if (array.length <= 1) {
    return array;
  };
  var pivot = Math.floor(array.length / 2);
  var left = mergeSort(array.slice(0, pivot));
  var right = mergeSort(array.slice(pivot));
  return merge(left, right);
};

var subsets = function(array) {
  if (array.length === 0) {
    return [[]];
  };
  var allSubsets = [];
  var lastEl = array.pop();
  var prevSubs = subsets(array);
  var doubleShovel = function (element) {
    element.push(lastEl);
    allSubsets.push(element.slice(0, element.length - 1));
    allSubsets.push(element);
  };

  prevSubs.forEach(doubleShovel);

  return allSubsets;
};
