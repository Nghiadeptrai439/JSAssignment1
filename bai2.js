const array = [2,7,33,64,4];

Array.prototype.myCustomFilter = function (fn) {
  const filtered = []; // it will receive all values that match to condition passed in fn callback.

  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      filtered.push(this[i]);
    }
  }

  return filtered;
};

const filteredData = array.myCustomFilter(function (el) {
    if (el > 5) return el;
  });

  console.log(filteredData); 
