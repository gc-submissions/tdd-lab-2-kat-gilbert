
let formatCurrency = (amount) => {
    let dollars = amount.toFixed(2);
        if (amount >= 0) {
            return "$" + dollars;
        }
        else {
            dollars = dollars * -1;
            dollars = dollars.toFixed(2)
            amount = "-$" + dollars;
            return amount;
        }
}

let getCoins = (cents) => {

    let change = 
    {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
    }

    if (cents > 24) {
        change.quarters = Math.floor(cents/25);
        cents -= (25 * change.quarters);
    }

    if (cents > 9) {
        change.dimes = Math.floor(cents/10);
        cents -= (10 * change.dimes);
    }

    if (cents > 4) {
        change.nickels = Math.floor(cents/5);
        cents -= (5 * change.nickels);
        }

    if (cents >= 1) {
        change.pennies = Math.floor(cents/1);
        cents -= (1 * change.pennies);
        }

    return change;
}


module.exports = {
    formatCurrency: formatCurrency,
    getCoins: getCoins
}