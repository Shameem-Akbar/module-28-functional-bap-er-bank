document.getElementById('btn-deposit').addEventListener('click', function () {
    /* 
    1. get the element by id
    2. get the value from th element
    3. convert string value to a number
    */
    const newDepositAmount = getInputFieldValueByID('deposit-field');
    /* 
    1. get previous deposit total by id
    */
    const previousDepositTotal = getTextElementValueByID('deposit-total');
    // calculate new deposit
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    //set deposit total value
    setTextElementValueById('deposit-total', newDepositTotal);
    //get previous balance by the function
    const previousBalanceTotal = getTextElementValueByID('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})