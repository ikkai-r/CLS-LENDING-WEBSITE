function checkOther() {
    const loanbox = document.getElementById('loan-amount');
    const other_amt = document.getElementById('other_amt');
    if(loanbox.value === 'Other') {
        other_amt.classList.remove('hidden');
    } else {
        if (!other_amt.classList.contains('hidden')) {
            other_amt.classList.add('hidden');
            other_amt.value = '';
        }
    }
}