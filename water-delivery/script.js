document.getElementById("orderForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const area = document.getElementById("area").value;
  const quantity = document.getElementById("quantity").value;
  const mpesa = document.getElementById("mpesa").value;

  const order = { name, area, quantity, mpesa };
  localStorage.setItem("order", JSON.stringify(order));

  // Simulate M-Pesa prompt here or integrate API in future
  alert("Prompt sent to M-Pesa. Please complete payment.");
  window.location.href = "receipt.html";
});
