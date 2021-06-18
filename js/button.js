const btnAdd = document.querySelector('button');
const valueInput = document.querySelector('input[data-value]')


console.dir(btnAdd);

btnAdd.textContent = 'goIt';
btnAdd.addEventListener('click', function () {
    console.log('click hehehehe');
    console.log(valueInput.value);
})
console.dir(valueInput);

valueInput.addEventListener('input', function () {
    console.log('you have value');
})
