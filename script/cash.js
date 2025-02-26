let addMoneyBtn = document.getElementById("addMoneyBtn");
let mainBalance = document.getElementById("main-balance");
let sum = parseInt(mainBalance.innerText);
let transactionBox = document.getElementById("transaction-box");


addMoneyBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let addNumber = document.getElementById("addPhoneNumber").value;

  if(validPhoneCheck(addNumber)){
    if(pinCheck(getValueById("addPin"))){
      setInnerText("main-balance", "addMoneyAmount");

      transactionBox.insertBefore(transaction("Add Money", getValueById("addMoneyAmount")), transactionBox.children[0]);

      addNumber = "";
      let pin = getValueById("addPin");
      pin = "";
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
  let cashOutNumber = document.getElementById("cashOutNumber").value;

  if(validPhoneCheck(cashOutNumber)){
    if(pinCheck(getValueById("cashOutPin"))){
      setInnerTextNeg("main-balance", "cashOutAmount");

      transactionBox.insertBefore(transaction("Cash Out", getValueById("cashOutAmount")), transactionBox.children[0]);
    }else{
      alert("Enter Valid Pin");
    }
  }else{
    alert("Enter Valid Number");
  }
});

let transferBtn = document.getElementById("transferBtn");

transferBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let sendNumber = document.getElementById("sendNumber").value;

  if(validPhoneCheck(sendNumber)){
    if(pinCheck(getValueById("transferPin"))){
      setInnerTextNeg("main-balance", "transferAmount");

      transactionBox.insertBefore(transaction("Send Money", getValueById("transferAmount")), transactionBox.children[0]);
    }else{
      alert("Enter Valid Pin");
    }
  }else{
    alert("Enter Valid Number");
  }
});

document.getElementById("billBtn").addEventListener("click", function (e) {
  e.preventDefault();
  let billerNumber = document.getElementById("billerNumber").value;

  if(validPhoneCheck(billerNumber)){
    if(pinCheck(getValueById("billPin"))){
      setInnerTextNeg("main-balance", "billAmount");

      transactionBox.insertBefore(transaction("Pay Bill", getValueById("billAmount")), transactionBox.children[0]);
    }else{
      alert("Enter Valid Pin");
    }
  }else{
    alert("Enter Valid Number");
  }
});
