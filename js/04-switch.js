const flip = 9;
let price;

//можно через функцию if -else но код тогда плохо читаемый
switch (flip) {
    case 1: price = 10;
    console.log(price);
    break;
    
    case 5:
    price = 50;
    break;
    
    case 9:
    price = 100;
    break;

    default: console.log('no result');
}

console.log(price);

const stars = 5;
let price2;

//можно группировать case
switch (stars) {
    case 1:
    case 8:
    case 5:
    price2 = 10;
    console.log(price2);
    break;
    
    case 9:
    price2 = 100;
    break;

    default: console.log('no result');
}

console.log(price2);