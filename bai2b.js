const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

Array.prototype.myCustomFilter = function (fn) {
  const filtered = []; 
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      filtered.push(this[i]);
    }
  }

  return filtered;
};

const filteredData = array.myCustomFilter(function (value) {
    if (value % 2 == 0) return value;
  });

  console.log(filteredData); 
//output [ 2, 4, 6, 8 ]