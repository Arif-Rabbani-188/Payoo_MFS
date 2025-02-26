function validPhoneCheck(phoneNumber) {
  if (
    phoneNumber.length === 11 &&
    phoneNumber[0] === "0" &&
    phoneNumber[1] === "1"
  ) {
    return true;
  } else {
    return false;
  }
}

function pinCheck(pinNumber) {
  if (pinNumber === 1234) {
    return true;
  } else {
    return false;
  }
}

function getValueById(id) {
  return parseFloat(document.getElementById(id).value);
}

function getInnerText(id) {
  return parseFloat(document.getElementById(id).innerText);
}

function setInnerText(id, value) {
  if (getValueById(value) > 0) {
    let sum = getValueById(value) + getInnerText(id);
    if (sum > 0) {
      document.getElementById(id).innerText = sum;
    } else {
      alert("Insufficient balance");
    }
  } else {
    alert("Negative amount is not allowed");
  }
}

function setInnerTextNeg(id, value) {
  if (getValueById(value) > 0) {
    let sum = getInnerText(id) - getValueById(value);
    if (sum > 0) {
      document.getElementById(id).innerText = sum;
    } else {
      alert("Insufficient balance");
    }
  } else {
    alert("Negative amount is not allowed");
  }
}

function transaction(source, amount) {
  let div = document.createElement("div");

  div.innerHTML = `
      <img class="p-3 rounded-full bg-[#f4f5f7]" src="assets/wallet1.png" alt="">
      <div>
            <h1 class="font-bold">${source}</h1>
            <p class="text-sm">Amount: $${amount}</p>
      </div>
    `;

    div.classList.add("flex", "items-center", "bg-white", "gap-1", "border-2", "rounded-xl", "p-3")
    return div;
}
