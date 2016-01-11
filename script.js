//variables
var amount = 0, amountFactor = 1;

//functions
function click(){
    document.getElementById('amount').innerHTML = amount;
    document.getElementById('add-amount').innerHTML = amountFactor;
};

function add(){
    amount = amount + amountFactor;
    document.getElementById('amount-display').innerHTML = amount;
}

function addAmount(){
    amountFactor = amountFactor + 1;
    document.getElementById('add-amount').innerHTML = amountFactor + 1;
}