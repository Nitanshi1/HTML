function select(coffeeType, callback) {
    console.log(`Step 1: Selecting ${coffeeType} coffee...`);
    setTimeout(function () {
        console.log(`${coffeeType} coffee selected.`);
        callback(null, coffeeType);
    }, 2000);
}

function addCart(coffeeType, callback) {
    console.log(`Step 2: Adding ${coffeeType} coffee to the cart...`);
    setTimeout(function () {
        console.log(`${coffeeType} coffee added to the cart.`);
        callback(null, coffeeType);
    }, 2500);
}

function DoPayment(coffeeType, callback) {
    console.log(`Step 3: Making payment for ${coffeeType} coffee...`);
    setTimeout(function () {
        console.log(`Payment successful for ${coffeeType} coffee.`);
        callback(null, coffeeType);
    }, 3000);
}


select('Cappucino', function (error, selectedCoffee) {
    if (error) {
        console.error("Error selecting coffee:", error);
    } else {
        addCart(selectedCoffee, function (error, addedToCartCoffee) {
            if (error) {
                console.error("Error adding to cart:", error);
            } else {
                DoPayment(addedToCartCoffee, function (error, paidForCoffee) {
                    if (error) {
                        console.error("Error making payment:", error);
                    } else {
                        console.log(`Order complete! Enjoy your ${paidForCoffee} coffee.`);
                    }
                });
            }
        });
    }
});
