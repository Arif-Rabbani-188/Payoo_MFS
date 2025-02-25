let users = [
  { phone: "01884481000", pin: "1234" },
  {
    phone: "01772389389",
    pin: "1212",
  },
];

document.getElementById("signUp-btn").addEventListener("click", function () {
  let newPhone = document.getElementById("phone").value;
  let newPin = document.getElementById("pin").value;

  let newObject = {
    phone: newPhone,
    pin: newPin,
  };
  users.push(newObject);
  saveData();

  for (let user of users) {
    console.log(user.pin);
  }
});

function saveData() {
  localStorage.setItem("data", users);
}

function loadData() {
  users = localStorage.getItem("data");
}

