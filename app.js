let balance = 100;

function updateBalance() {
  document.getElementById("balance").innerText =
    "$" + balance.toFixed(2);
}

function deposit() {
  let amount = prompt("Enter deposit amount");

  if (!amount || isNaN(amount)) return;

  balance += parseFloat(amount);
  updateBalance();
}

function withdraw() {
  let amount = prompt("Enter withdrawal amount");

  if (!amount || isNaN(amount)) return;

  if (amount > balance) {
    alert("Insufficient balance");
    return;
  }

  balance -= parseFloat(amount);
  updateBalance();
}

updateBalance();
