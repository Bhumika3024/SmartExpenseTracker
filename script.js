function addTransaction() {

    let input = document.getElementById("transactionInput");
    let value = input.value;

    if (value === "") {
        alert("Please enter a transaction");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = value;

    document.getElementById("transactionList")
        .appendChild(li);

    input.value = "";
}

function addExpense() {
    const amount = Number(document.getElementById("amount").value);
    const category = document.getElementById("category").value;

    if (amount > 0 && category) {
        console.log("Expense Added:", amount, category);
    }
}