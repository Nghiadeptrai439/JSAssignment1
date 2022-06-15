
let array = [4, 7, 32, 6, 3, 6, 22, 44];

function customCalc(...args){
    const max = Math.max.apply(Math,array);  
    
    const min = Math.min.apply(Math,array);

    const average = array.reduce((a, b) => a + b, 0) / array.length;
   
    const sum = array.reduce((partialSum, a) => partialSum + a, 0);

    return {max, min, average, sum} ;

}




console.log(customCalc())

// output { max: 44, min: 3, avg: 15.5, sum: 124 }

