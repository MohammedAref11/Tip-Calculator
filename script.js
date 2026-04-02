//* user Input fields
const billInput = document.getElementById("user-bill-input");
const numberOfPeopleInput = document.getElementById("numOfPeopleInput")
//* Fetching all select tips buttons in array  
const selectBtns = document.querySelectorAll("#selectButtons"); 
//* Reset button
const resetBtn = document.getElementById("resetBtn"); 
//* Price elements (Total / Amount)
const amountEl = document.getElementById("priceAmount");
const totalEl = document.getElementById("priceTotal");

//* Gets the tips percentage
function tipPercentage(element) { 
    element.forEach((item) => { 
        console.log(item.value)
    })
}

function getUserInput(element) { 
    const input = Number(element); 
}










