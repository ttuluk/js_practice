const min = 6;
const max = 15;
let total = 0;

/* for (let i = min; i <= max; i += 1) {
    console.log(i);
    if (i % 2 === 0) {
        console.log('четное', i);
        total += 1;
    }
    else {
        console.log('нечетное', i);
    }
} */
for (let i = min; i <= max; i += 1) {
    console.log(i);
    
    if (i % 2 !== 0) {

        continue
    }
    console.log('четное', i);

    total += i;
    
}
console.log('total', total);