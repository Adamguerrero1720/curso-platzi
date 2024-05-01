const transactions = [
    {id: 1, description: 'Payment Burguer King', amount: -50},
    {id: 2, description: 'McDonalds', amount: -100},
    {id: 3, description: 'Grocery Store', amount: -50},
    {id: 4, description: 'Income Project', amount: 1000},
    {id: 5, description: 'House Payment', amount: -700},
    {id: 6, description: 'Online Purchase', amount: -800},
    {id: 7, description: 'Super Pola', amount: -400},
    {id: 8, description: 'Platzi Bill', amount: -100},
    {id: 9, description: 'Salary Deposit', amount: 2000}
]
//Balance Total

const totalBalance = transactions.reduce((acumulator, transaction) => acumulator + transaction.amount, 0)
console.log('Total Balance:', totalBalance)

//Largest Transaction

const largestTransaction = transactions.reduce((maxTransaction, transaction) => {
    return Math.abs(transaction.amount) > Math.abs(maxTransaction.amount) ? transaction : maxTransaction
}, transactions[0] )
console.log('Maximum Transaction is:', largestTransaction.amount)

// Purchase Transaction

const purchaseTransactions = transactions.filter(transactions => transactions.amount < -1)
const amounts = purchaseTransactions.map(transaction => transaction.amount)
console.log('Purchase Transactions:', amounts);

// Find a Transaction by Description

const specificTransaction = transactions.find(transaction => transaction.description === 'McDonalds')
console.log('Specific Transactions:', specificTransaction)

// Find the idex of a Transaction by Amount

const indexbyAmount = transactions.findIndex(transaction => transaction.amount === -100)
console.log('The index of this transactions is:',indexbyAmount)

// Update Transaction Descriptions
transactions.forEach(transaction => {
    if (transaction.amount < 0) {
        transaction.description = `Gasto: ${transaction.description}`
    } else {
        transaction.description = `Ingreso: ${transaction.description}`
    }
});

console.log('Transacciones actualizadas:')
transactions.forEach(transaction => console.log(transaction))

