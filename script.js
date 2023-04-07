
//login button event handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionBtn = document.getElementById('transaction-area');
    transactionBtn.style.display = 'block';
});
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function(){
    const depositAmount = document.getElementById('depositAmount').value;
    const depositNumber = parseFloat(depositAmount);
    
    const currentDeposit = document.getElementById('currentDeposit').innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;
    
    document.getElementById('currentDeposit').innerText = totalDeposit;
    document.getElementById('depositAmount').value = '';

    const currentBalance = document.getElementById('currentBalance').innerText;
    const totalBalanceNumber = parseFloat(currentBalance) + depositNumber;
    document.getElementById('currentBalance').innerText = totalBalanceNumber;
})




