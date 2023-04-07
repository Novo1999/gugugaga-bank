
//login button event handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionBtn = document.getElementById('transaction-area');
    transactionBtn.style.display = 'block';
})
//deposit button event handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function(){
    const depositAmount = document.getElementById('depositAmount').value;
    const depositNumber = parseFloat(depositAmount);
    
    updateSpanText('currentDeposit', depositNumber);
    updateSpanText("currentBalance", depositNumber);

    document.getElementById('depositAmount').value = '';
})
function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const totalAmount = parseFloat(current) + depositNumber;
    document.getElementById(id).innerText = totalAmount;
}

//withdraw button event handler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function () {
    const withdrawAmount = document.getElementById('withdrawAmount').value;
    const withdrawNumber = parseFloat(withdrawAmount);

    const currentWithdraw = document.getElementById('currentWithdraw').innerText;
    const totalWithdraw = withdrawNumber + parseFloat(currentWithdraw);
    document.getElementById('currentWithdraw').innerText = totalWithdraw;

    const totalAmount = document.getElementById('currentBalance').innerText;
    const balanceUpdate = parseFloat(totalAmount) - withdrawNumber;
    document.getElementById('currentBalance').innerText = balanceUpdate; 
    document.getElementById('withdrawAmount').value = '';
})





