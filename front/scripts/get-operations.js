const operations = [
    {
        "operation_id": 1,
        "operation_desc": "Proyecto para cliente",
        "operatcion_amount": 150.99,
        "operation_date": "15/3/2021",
        "operation_type": "income"
    },
    {
        "operation_id": 2,
        "operation_desc": "Compras del Supermercado",
        "operatcion_amount": 550.00,
        "operation_date": "12/3/2021",
        "operation_type": "expense"
    },
    {
        "operation_id": 3,
        "operation_desc": "Arreglo del auto",
        "operatcion_amount": 15.99,
        "operation_date": "10/3/2021",
        "operation_type": "expense"
    },
    {
        "operation_id": 4,
        "operation_desc": "Transferencia Bancaria",
        "operatcion_amount": 12.99,
        "operation_date": "9/3/2021",
        "operation_type": "income"
    },
]

const operationsContainer = document.getElementById('operations-container');

for (let i = 0; i < operations.length; i++) {
    operationsContainer.innerHTML += 
    `
        <article class="operation-card">
            ${operations[i].operation_type === 'expense' ? 
                `<img class="opertation-type-icon" src="../assets/expense-icon.svg" alt="Expense icon">` :
                `<img class="opertation-type-icon" src="../assets/income-icon.svg" alt="Expense icon">`}
            <div class="operation-info">
                <h2>${operations[i].operation_type === 'expense' ? `-` : `+`} $ ${operations[i].operatcion_amount}</h2>
                <h3>${operations[i].operation_date}</p>
                <p>${operations[i].operation_desc}</p>
            </div>
            <div class="action-buttons-container">
                <img src="../assets/edit-button.svg" alt="Edit button icon">
                <img src="../assets/delete-button.svg" alt="Edit button icon">
            </div>
        </article>
    `
}