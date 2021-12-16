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
  test("32 cents equals 1 quarter 0 dimes 1 nickel 2 pennies", function() {
    expect(moneyFunctions.getCoins(32)).toEqual({quarters: 1, dimes: 0, nickels: 1, pennies: 2})
  });
  test("10 cents produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0.", function() {
    expect(moneyFunctions.getCoins(10)).toEqual({quarters: 0, dimes: 1, nickels: 0, pennies: 0})
  });
  test("27 cents produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2", function() {
    expect(moneyFunctions.getCoins(27)).toEqual({quarters: 1, dimes: 0, nickels: 0, pennies: 2})
  });
  test("68 cents produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3", function() {
    expect(moneyFunctions.getCoins(68)).toEqual({quarters: 2, dimes: 1, nickels: 1, pennies: 3})
  });

});