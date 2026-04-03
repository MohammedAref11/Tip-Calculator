//* user Input fields
const billInput = document.getElementById("user-bill-input");
const numOfPeopleInput = document.getElementById("numOfPeopleInput")
//* Fetching all select tips buttons in array  
const selectBtns = document.querySelectorAll("#selectButtons"); 
//* Reset button
const resetBtn = document.getElementById("resetBtn"); 
//* Price elements (Total / Amount)
const amountEl = document.getElementById("priceAmount");
const totalEl = document.getElementById("priceTotal");


tipPer = 0; 

selectBtns.forEach((element) => { 
    element.addEventListener('click', () => { 
          tipPer = element.value; 
          console.log(tipPer)
    })
})


function calculateTipAmount() { 
    const bill = Number(billInput.value);
    const numOfPeople = Number(numOfPeopleInput.value)
    const tipAmount = (bill / 100) * tipPer;
    console.log(tipAmount)
}


billInput.addEventListener('input', calculateTipAmount)

resetBtn.addEventListener('click', () => { 
    billInput.value = ""; 
    numOfPeopleInput.value = ""
})