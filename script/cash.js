let addMoneyBtn = document.getElementById("addMoneyBtn");
let mainBalance = document.getElementById("main-balance");
let sum = parseInt(mainBalance.innerText);
let transactionBox = document.getElementById("transaction-box");


addMoneyBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let addNumber = document.getElementById("addPhoneNumber").value;

  if(validPhoneCheck(addNumber)){
    if(pinCheck(getValueById("addPin"))){
      let addSrc = "assets/wallet1.png";
      setInnerText("main-balance", "addMoneyAmount");
      let bank = document.getElementById("allMFS").value;
      transactionBox.insertBefore(transaction(addSrc, "Add Money", "From", getValueById("addMoneyAmount"),addNumber, bank), transactionBox.children[0]);

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
      let cashOutSrc = "assets/send1.png";

      transactionBox.insertBefore(transaction(cashOutSrc, "Cash Out", "To", getValueById("cashOutAmount"), cashOutNumber, "Agent"), transactionBox.children[0]);
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
      let transferSrc = "assets/money1.png";

      transactionBox.insertBefore(transaction(transferSrc, "Send Money", "To", getValueById("transferAmount"), sendNumber, "Person"), transactionBox.children[0]);
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
      let billSrc = "assets/purse1.png";

      let biller = document.getElementById("biller").value;

      transactionBox.insertBefore(transaction(billSrc, "Pay Bill", "To", getValueById("billAmount"), billerNumber, biller), transactionBox.children[0]);
    }else{
      alert("Enter Valid Pin");
    }
  }else{
    alert("Enter Valid Number");
  }
});
