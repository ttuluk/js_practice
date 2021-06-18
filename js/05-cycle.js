const min = 500;
const max = 5000;
const employees = 4;
let total = 0;

//перебор
for (let i = 0; i <= employees; i += 1) {
    const salary = Math.round(Math.random() * (max - min) + min);

    console.log(`Зп работника номер ${i} - ${salary}`);

total += salary;
    
}
    console.log('total', total);
/*генерим случайное число
const number = Math.round(Math.random() * (max - min) + min);*/

//вывод фразы по одной букве в консоль
const string = 'i do it';
for (let i = 0; i <= string.length; i += 1) {
    console.log(string[i]);
}