const moneyFunctions = require("../src/js/money-functions");

describe("formatCurrency", () => {
  test("given amount 0 get back $0.00", function() {
    expect(moneyFunctions.formatCurrency(0)).toEqual("$0.00");
  });
  test("given amount 1 get back $1.00", function() {
    expect(moneyFunctions.formatCurrency(1)).toEqual("$1.00");
  });
  test("given amount 1.5 get back $1.50", function() {
    expect(moneyFunctions.formatCurrency(1.5)).toEqual("$1.50");
  });
  test("given amount .01 get back $0.01", function() {
    expect(moneyFunctions.formatCurrency(.01)).toEqual("$0.01");
  });
  test("given amount 527.6789 get back $527.6789", function() {
    expect(moneyFunctions.formatCurrency(527.6789)).toEqual("$527.68");
  });
  test("given amount -1 get back $-1.00", function() {
    expect(moneyFunctions.formatCurrency(-1)).toEqual("-$1.00");
  });
  test("any numbers", function() {
    expect(moneyFunctions.formatCurrency(55)).toEqual("$55.00");
  });
  test("any numbers", function() {
    expect(moneyFunctions.formatCurrency(-99)).toEqual("-$99.00");
  });
});

describe("getCoins", () => {
  test.todo("add getCoins tests here");
});