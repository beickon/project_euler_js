const DESCEIPTION = '\nIf we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.'
+'The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000. \n';

const main = (size) => {
    console.time('p1');
    let sum = 0;
    for(let i = 1; i < size ; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    console.timeEnd('p1');
    return sum;
};
// PRINTS PROJECT DESCRIPTION
console.log(DESCEIPTION);
console.log('RESULT: ', main(1000));