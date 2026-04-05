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
})

function getBillValue() {  
        const bill = Number(billInput.value);
        billValue = bill; 
        console.log(billValue); 
        displayTotal();
}

function displayTotal() { 
    const numOfPeople = Number(numOfPeopleInput.value); 
    const totalAmount = billValue / numOfPeople; 
    totalEl.textContent = `$${totalAmount.toFixed(2)}`; 
    if (numOfPeople === null || numOfPeople === NaN || numOfPeople === 0) { 
        totalEl.textContent = `$0.00`; 
    }
}

resetBtn.addEventListener('click', () => { 
    billInput.value = ""; 
    numOfPeopleInput.value = ""; 
})

billInput.addEventListener('input', getBillValue); 
numOfPeopleInput.addEventListener('input', displayTotal);