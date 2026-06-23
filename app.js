let balance = 100;

function updateBalance() {
  document.getElementById("balance").innerText = "$" + balance;
}

function deposit() {
  let amount = prompt("Enter amount");

  if (!amount || isNaN(amount)) return;

  balance += parseFloat(amount);
  updateBalance();
}

updateBalance();
