const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

console.log(clients.indexOf('Poly')); // 2
console.log(clients.indexOf('Monkong')); // -1
console.log(clients.indexOf('Aj')); // -1
console.log(clients.indexOf('Ajax')); // 1

const clientss = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

console.log(clientss.includes('Poly')); // true
console.log(clientss.includes('Monkong')); // false
