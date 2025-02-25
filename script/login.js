let loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let phone = document.getElementById("phone").value;
  let pin = document.getElementById("pin").value;

  if (phone.length === 11 && phone === "01884481000") {
    if (pin.length === 4 && pin === "1234") {
      window.location.href = "main.html"
    } else {
      alert("Enter valid pin");
    }
  } else {
    alert("input valid number");
  }
});
