
//login button event handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionBtn = document.getElementById('transaction-area');
    transactionBtn.style.display = 'block';
});





