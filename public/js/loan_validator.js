function validateCustomLoanAmount() {
    var customLoanAmountInput = document.getElementById('custom-loan-amount');
    var tooltip = document.querySelector('.tooltip-error');

    if (customLoanAmountInput.value < 0) {
        tooltip.style.display = 'block'; // show 
    } else {
        tooltip.style.display = 'none'; // hide error if valid
    }
}




