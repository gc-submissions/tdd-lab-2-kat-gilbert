const cartFunctions = require("../src/js/cart-functions.js");

describe("calculateChange", () => {
  test("given total 5 and payment 6 return 1", function() {
    expect(cartFunctions.calculateChange(5, 6)).toEqual(1);
  });
  test("given total 12.30 and payment 13.03 return .73", function() {
    expect(cartFunctions.calculateChange(12.30, 13.03)).toBeCloseTo(0.73);
  });
  test("given total 20 and payment 37 return 17", function() {
    expect(cartFunctions.calculateChange(20, 37)).toBeCloseTo(17);
  });
});

describe("isSufficientPayment", () => {
  test("Total 5 payment 6 returns true", function() {
    expect(cartFunctions.isSufficientPayment(5, 6)).toEqual(true);
  });
  test("Total 10 payment 7 returns false", function() {
    expect(cartFunctions.isSufficientPayment(10, 7)).toEqual(false);
  });
  test("Total 3 payment 3 returns true", function() {
    expect(cartFunctions.isSufficientPayment(3, 3)).toEqual(true);
  });
  test("Total 155 payment 154 returns false", function() {
    expect(cartFunctions.isSufficientPayment(5, 2)).toEqual(false);
  });
});


describe("calculateTotal", () => {
  test("one item priced 4.99 returns 4.99", function() {
    expect(cartFunctions.calculateTotal([{name:"Jelly", price: 4.99}])).toBeCloseTo(4.99);
  });
  test("three items priced 3.50 19.99 0.03 return 16.52", function() {
    expect(cartFunctions.calculateTotal([
    {name:"Jelly", price: 3.50},
    {name:"Misc", price: 12.99},
    {name:"Jalapenos", price: .03},
    ])).toBeCloseTo(16.52);
  });
  test("empty array to equal 0", function() {
    expect(cartFunctions.calculateTotal([])).toBeCloseTo(0);
  });
  test("two items priced 4.50 13 return 17.50", function() {
    expect(cartFunctions.calculateTotal([
    {name:"Jelly", price: 4.50},
    {name:"Misc", price: 13.00},
    ])).toBeCloseTo(17.50);
  });

});

describe("addItem", () => {
  test("add one item to empty array", function() {
    let results = []; //set up an empty array
    cartFunctions.addItems(results, "Beans", 3); //call a function to modify array
    expect(results).toEqual([{name: "Beans", price: 3}]);
  });

  test("add one item to array with one item already", function() {
    let results = [{name: "Beans", price: 3}]; //set up an empty array
    cartFunctions.addItems(results, "Sugar", 2); //call a function to modify array
    expect(results).toEqual([
      {name: "Beans", price: 3},
      {name: "Sugar", price: 2}
    ]);
  });
    test("add one item to two item array", function() {
      let results = [{name: "Beans", price: 3},{name: "Sugar", price: 2}]; 
      cartFunctions.addItems(results, "Whatev", 6); //call a function to modify array
      expect(results).toEqual([
        {name: "Beans", price: 3},
        {name: "Sugar", price: 2},
        {name: "Whatev", price: 6} ]);
  });
});

describe("removeItem", () => {
  test("remove the first item from the array of three items", function() {
    let results = [{name: "Beans", price: 3},{name: "Sugar", price: 2},{name: "Whatev", price: 6}];
    cartFunctions.removeItems(results, 0); //call a function to modify array
    expect(results).toEqual([
      {name: "Sugar", price: 2},
      {name: "Whatev", price: 6} ]);
  });

  test("remove the last item from the array of three items", function() {
    let results = [{name: "Beans", price: 3},{name: "Sugar", price: 2},{name: "Whatev", price: 6}];
    cartFunctions.removeItems(results, 2); //call a function to modify array
    expect(results).toEqual([
      {name: "Beans", price: 3},
      {name: "Sugar", price: 2}
      ]);
  });

  test("remove the middle item from the array of three items", function() {
    let results = [{name: "Beans", price: 3},{name: "Sugar", price: 2},{name: "Whatev", price: 6}];
    cartFunctions.removeItems(results, 1); //call a function to modify array
    expect(results).toEqual([
      {name: "Beans", price: 3},
      {name: "Whatev", price: 6}
      ]);
  });

  test("remove the only item of an array", function() {
    let results = [{name: "Beans", price: 3}];
    cartFunctions.removeItems(results, 0); //call a function to modify array
    expect(results).toEqual([]);
  });

  
});