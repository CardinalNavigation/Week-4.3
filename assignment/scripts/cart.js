console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// this is our container
let basket = []

// this function will allow us to push an item into the array by using addItem(""

function addItem(item) {
    if (isFull())
    basket.push(item)
    return true;
}

// attempting to add item Kale per the instructions and console log to confirm results
addItem("kale");
addItem("apples")
addItem("spinach")
console.log(basket)


// creating function to list items in the basket, needs to be a loop
function listItems() {
    for (let x of basket) {
        console.log([x]);
    }

}

// console log to see if the list items works. It is returning undefined which i am not sure about, in the console log those it is returning what
// we want it to show all the items in the array
console.log(listItems());
console.log(basket)

//fuction to clear the basket
function empty() {
    while (basket.length > 0) {
        basket.pop()
    }
}

// console log shows that the basket is now empty
console.log(empty());
console.log(basket);

//adding global const of 5

const maxItems = 5;

// creating function isFull, to check if the cart is full. It states that if the basket is < 5 items then to return false boolean
// it returns a true boolean if the basket has more than 5 items. The console log below shows that the process is runnign correctly.

function isFull() {
    if (basket < maxItems) {
        return false;
    }
    return true;
}

addItem("green onion");
addItem("mushrooms")
addItem("spinach")
addItem("eggs")
addItem("cheese")
console.log(basket)
console.log("True if full, false is not:", isFull());
empty();
console.log(basket);
console.log("True if full, false is not:", isFull());



// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch (e) {
    // Do nothing
}
