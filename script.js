//* user Input fields
const billInput = document.getElementById("user-bill-input");
const numOfPeopleInput = document.getElementById("numOfPeopleInput")
// * buttons container
const buttonsGrid = document.querySelector(".tip-buttons-grid");
//* Fetching all select tips buttons in array  
const tipButtons = document.querySelectorAll("#selectButtons"); 
//* Reset button
const resetBtn = document.getElementById("resetBtn"); 
//* Price elements (Total / Amount)
const amountEl = document.getElementById("priceAmount");
const totalEl = document.getElementById("priceTotal");

let billValue;
let tipPercentage;
let tipAmount; 

function displayTotal() { 
    const numOfPeople = Number(numOfPeopleInput.value); 
    const totalAmount = billValue / numOfPeople;   
    if (numOfPeople === null || numOfPeople === NaN || numOfPeople === 0) { 
        totalEl.textContent = `$0.00`; 
    }else if (isNaN(totalAmount)) { 
        totalEl.textContent = `$0.00`; 
    }else { 
        totalEl.textContent = `$${totalAmount.toFixed(2)}`; 
    } 
    getTipAmount();
}

function getTipAmount() { 
    tipAmount = (tipPercentage / 100) * billValue;
    const numOfPeople = Number(numOfPeopleInput.value); 
    const amountPer = tipAmount / numOfPeople; 
    amountEl.textContent = `$${amountPer}`
    if (isNaN(amountPer)) { 
        amountEl.textContent = `$0.00`
    } else if (numOfPeople === null || numOfPeople === NaN || numOfPeople === 0) { 
        amountEl.textContent = `$0.00`
    }
    else { 
        amountEl.textContent = `$${amountPer.toFixed(2)}`; 
    } 
}

function getBillValue() {  
        const bill = Number(billInput.value);
        billValue = bill; 
        displayTotal();
}

tipButtons.forEach(element => { 
    element.addEventListener('click', () => { 
        tipPercentage = element.value; 
        console.log(tipPercentage)
    })
})

buttonsGrid.addEventListener('click', (event) => {  
    tipButtons.forEach(btn => { 
        if (btn === event.target) { 
            btn.classList.toggle("clicked")
        }else { 
            btn.classList.remove("clicked")
        }
    })
    getBillValue(); 
    displayTotal(); 
})

resetBtn.addEventListener('click', () => { 
    billInput.value = ""; 
    numOfPeopleInput.value = ""; 
})

billInput.addEventListener('input', getBillValue); 
numOfPeopleInput.addEventListener('input', displayTotal);