/* let numberValue = 0;
console.log('тип данных let numberValue:', typeof numberValue);
console.log('значение переменной let numberValue:', numberValue);

numberValue = NaN;
console.log('тип данных let numberValue:', typeof numberValue);
console.log('значение переменной let numberValue:', numberValue);

numberValue = Infinity;
console.log('тип данных let numberValue:', typeof numberValue);
console.log('значение переменной let numberValue:', numberValue);

numberValue = 500;
console.log('тип данных let numberValue:', typeof numberValue);
console.log('значение переменной let numberValue:', numberValue);

numberValue = true;
console.log('тип данных let numberValue:', typeof numberValue);
console.log('значение переменной let numberValue:', numberValue);

const result = 3 + numberValue;
console.log('тип данных let result:', typeof result);
console.log('значение переменной let result:', result); */

 const num1 ='2';
const num2 = 2;
/*
let num = num2 % num1;
console.log('%', num);

num = num2 >= num1;
console.log(num);
 */
let num = num2 === num1;
console.log(num);

num = num2 == num1;
console.log(num);


/* for (let i = 0; i < 10; i += 1) {
    if (i === 5) {
      console.log('Дошли до 5-й итерации, прерываем цикл!');
      break;
    }
  }
 const  blacklistedWord1 = '2';
 
 const  blacklistedWord2 = 'распродажа';

 const  string1 = 'привет, Я принц Абдул  22 спам мое второе я';
 const  string2 = 'привет,  РАСПРОДАЖА на все';
 const  string3 = 'привет, как дела?';
 
 console.log(string1.includes(blacklistedWord1));
 console.log(string1.includes(blacklistedWord2));

 const result = string2.toLowerCase();
 console.log(result.includes(blacklistedWord2)); */

 console.log(62&&3&&4&&5&&55);
 console.log(62||5||78||978);
 console.log(!true);


 const x1 = 10;
 const x2 = 30;
 const y = 50;

 console.log(`попадает ли ${y} в промежуток от ${x1} до ${x2}`, (y >= x1)&&(y <= x2));
 console.log(`попадает ли ${y} в промежуток от ${x1} до ${x2}`, (y <= x1)||(y >= x2));

 const isOnline = true;
 const isDnd = false;
 const isFriend = true;
 const canOpenChat = isOnline && isFriend && !isDnd;
 console.log('Можно открыть чат?', canOpenChat);

 const p = 'pro';
 const f = 'free';
 const v = 'vip';
const subscription = 0;
 if (subscription === p || subscription === v)
{
  const canAccessContent = true;
  console.log('есть доступ к подписке?', canAccessContent);
 }
 else if (subscription === f){
  const canAccessContent = false;
  console.log('есть доступ к подписке?', canAccessContent);
 }
 else {
  const canAccessContent = null;
  console.log('есть доступ к подписке?', canAccessContent);
 }; 
/*  const canAccessContent = subscription === v || subscription === p;
 console.log('есть доступ к подписке?', canAccessContent); */

console.log("ToToWe".slice(-2));


/*const ballance = 1000;

if ( ballance > 0){
 const message = ' позитивный баланс'
 console.log(message)
}
else {
 const message = 'отрицательный баланс'
 console.log(message)
}
;*/
//правильное обЪявление переменной, иначе вывод нужно давать в каждую строку, смотри выше код
/* 
const ballance = 1000;
let message;

if ( ballance > 0){
  message = ' позитивный баланс'
}
else {
  message = 'отрицательный баланс'
}
console.log(message);
 */
/* const valueA = '5';
console.log(typeof valueA);
console.log(Number(valueA)); // 5
console.log(typeof Number(valueA)); // 'number'

const valueB = 'random string';
console.log(Number(valueB)); // NaN
console.log(typeof Number(valueB)); // 'number'
 */

//округление и приведение к числу
console.log(Number.parseInt('dd5.54px'));
console.log(Number.parseFloat('5.54452552x37774'));


let sum = 0.1 + 0.2;
sum = (0.1 * 10 + 0.2 * 10) / 10;
/* sum = Math.floor(sum); */
console.log(sum);
sum = (0.1 + 0.2).toFixed(2);
console.log(sum);

// метод Math
let numberCeil = 3.1458658;
numberCeil = Math.ceil(numberCeil);
console.log(numberCeil);

let numberFloor = 3.999999999;
numberFloor = Math.floor(numberFloor);
console.log(numberFloor);

let numberRound = 3.599999999;
numberRound = Math.round(numberRound);
console.log(numberRound);

//max и min
console.log(Math.min(23, 34, 12, 17, 56, 67));
console.log(Math.max(23, 34, 12, 17, 56, 67));

console.log(Math.pow(2, 4)); //возведение в степень, иначе 2**4
 //random
 console.log(Math.ceil(Math.random() * (10 - 1) +1));