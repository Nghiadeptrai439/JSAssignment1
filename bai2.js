const array = [2,7,33,64,4];

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
    if (value > 5) return value;
  });

  console.log(filteredData); 
 //output [ 7, 33, 64 ]