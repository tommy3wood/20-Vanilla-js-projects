const balance = document.getElementById('balance');
const moneyPlus = document.getElementById('money-plus');
const moneyMinus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const dummyTransactions = [
    { id: 1, text: 'flowers', amount: -20},
    { id: 2, text: 'hooker bj', amount: -200},
    { id: 3, text: 'gig', amount: 320},
    { id: 4, text: 'video lights', amount: -120}
];

let transactions = dummyTransactions;

// Add transactions to DOM list
function addTransactionDOM(transaction) {
    //get sign
    const sign = transaction.amount < 0 ? '-' : '+';

    const item = document.createElement('li');

    //add class based on value
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

    item.innerHTML = `
    ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span>
    <button class="delete-btn">X</button>
    `;

    list.appendChild(item);
}

//init app
function init() {
    list.innerHTML = '';
    transactions.forEach(addTransactionDOM);
}

init();