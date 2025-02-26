let addMoneyBox = document.getElementById("add-money-box");

let cashOutBox = document.getElementById("cash-out-box");

let transferBox = document.getElementById("transfer-box");

let getBonusBox = document.getElementById("get-bonus-box");

let payBillBox = document.getElementById("pay-bill-box");

let trasactionsBox = document.getElementById("transactions-box");


document.getElementById("logout").addEventListener("click", function(){
    window.location.href = "index.html"
})


// section ids

let transactions = document.getElementById("transactions");

let addMoney = document.getElementById("addMoney");

let cashOut = document.getElementById("cashOut");

let transfer = document.getElementById("transfer");

let getBonus = document.getElementById("getBonus");

let payBill = document.getElementById("payBill");

addMoneyBox.addEventListener("click", function (){
    transactions.style.display = "none";
    cashOut.style.display = "none";
    transfer.style.display = "none";
    getBonus.style.display = "none";
    payBill.style.display = "none";
    addMoney.style.display = "block";
})

trasactionsBox.addEventListener("click", function (){
    transactions.style.display = "block";
    cashOut.style.display = "none";
    transfer.style.display = "none";
    getBonus.style.display = "none";
    payBill.style.display = "none";
    addMoney.style.display = "none";
})

cashOutBox.addEventListener("click", function (){
    transactions.style.display = "none";
    cashOut.style.display = "block";
    transfer.style.display = "none";
    getBonus.style.display = "none";
    payBill.style.display = "none";
    addMoney.style.display = "none";
})

transferBox.addEventListener("click", function (){
    transactions.style.display = "none";
    cashOut.style.display = "none";
    transfer.style.display = "block";
    getBonus.style.display = "none";
    payBill.style.display = "none";
    addMoney.style.display = "none";
})

getBonusBox.addEventListener("click", function (){
    transactions.style.display = "none";
    cashOut.style.display = "none";
    transfer.style.display = "none";
    getBonus.style.display = "block";
    payBill.style.display = "none";
    addMoney.style.display = "none";
})

payBillBox.addEventListener("click", function (){
    transactions.style.display = "none";
    cashOut.style.display = "none";
    transfer.style.display = "none";
    getBonus.style.display = "none";
    payBill.style.display = "block";
    addMoney.style.display = "none";
})