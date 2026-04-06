//* user Input fields
const billInput = document.getElementById("user-bill-input");
const numOfPeopleInput = document.getElementById("numOfPeopleInput")
// * buttons container
const buttonsGrid = document.querySelector(".tip-buttons-grid");
//* Fetching all select tips buttons in array  
const tipButtons = document.querySelectorAll("#selectButtons");
// * Custom Tip Percentage input
const customTip = document.getElementById("customTipPer") 
//* Reset button
const resetBtn = document.getElementById("resetBtn"); 
//* Price elements (Total / Amount)
const amountEl = document.getElementById("priceAmount");
const totalEl = document.getElementById("priceTotal");
// * number of people input label
const numOfPeopleLabel = document.getElementById("numOfPeople");

let billValue;
let tipPercentage;
let tipAmount; 

function displayTotal() { 
    const numOfPeople = Number(numOfPeopleInput.value);
    const tipAmountDivided = tipAmount / numOfPeople;  
    const totalAmount = (billValue / numOfPeople) + tipAmountDivided;  
    if (numOfPeople === null || numOfPeople === NaN || numOfPeople === 0) { 
        totalEl.textContent = `$0.00`; 
    }else if (isNaN(totalAmount)) { 
        totalEl.textContent = `$0.00`; 
    }else { 
        totalEl.textContent = `$${totalAmount.toFixed(2)}`; 
    } 
    if(numOfPeople <= 0) { 
        numOfPeopleLabel.classList.add("error-mess");

    }else { 
        numOfPeopleLabel.classList.remove("error-mess");
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

    if (tipPercentage <= 0) { 

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
    })
})

buttonsGrid.addEventListener('click', (event) => {  
    tipButtons.forEach((btn) => { 
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
customTip.addEventListener('input', () => { 
    tipPercentage = customTip.value; 
    getBillValue(); 
    displayTotal(); 
})
billInput.addEventListener('input', getBillValue); 
numOfPeopleInput.addEventListener('input', displayTotal);