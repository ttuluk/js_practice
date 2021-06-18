const btnAdd = document.querySelector('button');
const valueInput = document.querySelector('input')
const outputEl = document.querySelector('.js-output span');
let total = 0;

console.dir(btnAdd);

btnAdd.textContent = 'goIt';
btnAdd.addEventListener('click', function () {
    console.log('click hehehehe');

    const value = Number(valueInput.value);
    console.log(value);
    total += value;
    console.log(typeof total);
    outputEl.textContent = total;
    valueInput.value = '';
    console.log(total);
})

/* console.dir(valueInput);
valueInput.addEventListener('input', function () {
    console.log('you have value');
}) */
