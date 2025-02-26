function validPhoneCheck(phoneNumber){
    if(phoneNumber.length === 11 && phoneNumber[0] === '0' && phoneNumber[1] === '1'){
        return true;
    }else{
        return false;
    }
}

function pinCheck(pinNumber){
    if( pinNumber === 1234){
        return true;
    }else{
        return false;
    }
}

function getValueById(id){
    return parseFloat(document.getElementById(id).value);
}

function getInnerText(id){
    return parseFloat(document.getElementById(id).innerText);
}

function setInnerText(id, value){
    if(getValueById(value) > 0){
        let sum = getValueById(value) + getInnerText(id);
        if(sum > 0){
            document.getElementById(id).innerText = sum;
        }else{
            alert("Insaficient balance");
        }
    }else{
        alert("Negative amount is not allowed");
    }
}