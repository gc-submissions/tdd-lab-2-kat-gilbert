
const calculateChange = (total, payment) => {
    return payment - total;
}


const isSufficientPayment = (total, payment) => {
    return payment >= total;
}

const calculateTotal = (itemsArray) => {
    let total = 0;
    for (let i = 0; i < itemsArray.length; i++ ) {
        total += itemsArray[i].price;
    }
    return total;
}

const addItems = (itemsArray, name, price) => {
    itemsArray.push({"name": name, "price": price});
    // return itemsArray; ----not needed because of push
}

const removeItems = (itemsArray, index) => {
    itemsArray.splice(index, 1);

}

module.exports = {
    calculateChange: calculateChange,
    isSufficientPayment: isSufficientPayment,
    calculateTotal: calculateTotal,
    addItems: addItems,
    removeItems: removeItems
}
