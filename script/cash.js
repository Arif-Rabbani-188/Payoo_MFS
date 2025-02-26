let addMoneyBtn = document.getElementById("addMoneyBtn");
let mainBalance = document.getElementById("main-balance");
let sum = parseInt(mainBalance.innerText);

addMoneyBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let addNumber = document.getElementById("addPhoneNumber").value;

  if(validPhoneCheck(addNumber)){
    if(pinCheck(getValueById("addPin"))){
      setInnerText("main-balance", "addMoneyAmount")
    }else{
      alert("Enter Valid Pin");
    }
  }else{
    alert("Enter Valid Number");
  }
});

let cashOutBtn = document.getElementById("cashOutBtn");

cashOutBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let cashOutAmount = document.getElementById("cashOutAmount").value;

  cashOutAmount = parseInt(cashOutAmount);

  console.log(cashOutAmount);

  sum = sum - cashOutAmount;

  mainBalance.innerText = sum;
});

let transferBtn = document.getElementById("transferBtn");

transferBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let transferAmount = parseInt(
    document.getElementById("transferAmount").value
  );

  sum = sum - transferAmount;

  mainBalance.innerText = sum;
});

document.getElementById("billBtn").addEventListener("click", function (e) {
  e.preventDefault();
  let billAmount = parseInt(document.getElementById("billAmount").value);

  sum = sum - billAmount;

  mainBalance.innerText = sum;
});
