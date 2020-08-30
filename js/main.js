function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    
    showSumPrice(price, amountNumber);
}

function showSumPrice(price, amountNumber) {
    let showAmount = document.querySelector("span.show-amount");
    if ( amountNumber > 10 ) {
        alert("Maximum 10 terméket vásárolhat!");
     } else if (amountNumber < 1 ) {
        alert("Minimum 1 terméket kell vásárolnia!")
    } else {
        let amount = price * parseInt(amountInput.value);
        showAmount.innerHTML = amount;
    }
  }

    let orderForm = document.querySelector( "#orderForm" );
  orderForm.addEventListener("submit", function(ev) {
        ev.preventDefault();
        console.log( this );
        let inputs = this.querySelectorAll( "input" );
        let values = {};
        for ( let i = 0; i < inputs.length; i++ ) {
            values[inputs[i].name] = inputs[i].value;
        }
        console.log(values);
  })

  let alertCloseButtons = document.querySelectorAll( ".close[data-dismiss='alert']" );
  let alertCloseEventHandlerFunction = function(ev) {
    console.log( ev );
    this.parentElement.style.display = "none";
}
  for (let i=0; i < alertCloseButtons.length; i++ ) {
      alertCloseButtons[i].addEventListener( "click", alertCloseEventHandlerFunction );
  }

  //Select elem kitöltése
  let toppings = [
      "Szalonna",
      "Hagyma",
      "Tükörtojás",
      "Libamáj",
      "Extra sonka"
  ];

  let toppingSelect = document.querySelector("#topInput");
  let index = 0;
  while (index < toppings.length) {
      let option = document.createElement("option");
      option.value = index;
      option.innerHTML = toppings[index];
      toppingSelect.appendChild(option);
      index++;
  }