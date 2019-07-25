function range (start, end, step) {
  let array = [];

  for (start; start <= end; start += step) {

    array.push(start);

    if ((start === undefined) || (end === undefined ) || (step === undefined)) {
      return [];
    }
    if (start > end) {
      return [];
    }
    if(step <= 0) {
      return [];
    }
  }
  
  return array;

}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
