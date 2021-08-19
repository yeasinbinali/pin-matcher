function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }else{
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumbers = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            typedNumbers.value = '';
        }
    }else{
        const previousNumber = typedNumbers.value;
        const newNumber = previousNumber + number;
        typedNumbers.value = newNumber;
    }
})

function verifyPin(){
    const displayPin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if(displayPin == typedNumbers){
        failError.style.display = 'none';
        successMessage.style.display = 'block';
    }else{
        successMessage.style.display = 'none';
        failError.style.display = 'block';
    }
}