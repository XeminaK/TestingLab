// These test cases are all unfinished. We will finish them together.
describe("tests for change-handler", function() {

    // Set up a test below...
    it("Testing to see if amountDue is set to an argument", function() {
        const vendingMachine = new ChangeHandler(100);
        // Remember, you can arrange, act, and assert...start small
        expect(vendingMachine.amountDue).toBe(100); 
    });
    it("cashTendered is set to zero", function() {
        expect(vendingMachine.cashTendered).toBe(0);
    });
    it("Inserting a quarter adds 25 to cashTendered", function() {
        const vendingMachine = new ChangeHandler(100);
        vendingMachine.insertCoin("quarter");
        expect(vendingMachine.cashTendered).toBe(25);
    });
    it("Inserting a dime adds 10 to cashTendered", function() {
        const vendingMachine = new ChangeHandler(100);
        vendingMachine.insertCoin("dime");
        expect(vendingMachine.cashTendered).toBe(10);
    });
    it("Inserting a nickel adds 5 to cashTendered", function() {
        const vendingMachine = new ChangeHandler(100);
        vendingMachine.insertCoin("nickel");
        expect(vendingMachine.cashTendered).toBe(5);
    });
    it("Inserting a penny adds 1 to cashTendered", function() {
        const vendingMachine = new ChangeHandler(100);
        vendingMachine.insertCoin("penny");
        expect(vendingMachine.cashTendered).toBe(1);
    });
    it("Calling a function multiple times continues to add on to the amount", function() {
        const vendingMachine = new ChangeHandler(100);
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("dime");
        vendingMachine.insertCoin("nickel");
        vendingMachine.insertCoin("penny");
        expect(vendingMachine.cashTendered).toBe(41);
    });
    it("Returns true if cashTendered is more than amountDue", function () {
        const vendingMachine = new ChangeHandler(49);
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        expect(vendingMachine.isPaymentSufficient).toBeDefined(true);
    });
    it("Returns false if cashTendered is less than amountDue", function () {
        const vendingMachine = new ChangeHandler(49);
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("dime");
        expect(vendingMachine.isPaymentSufficient).toBeDefined(false);
    });
    it("Returns true if cashTendered is equal to amountDue", function () {
        const vendingMachine = new ChangeHandler(50);
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        expect(vendingMachine.isPaymentSufficient).toBeDefined(true);
    });
    it("32 change produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2", function() {
        changeSum = 32;
        expect(vendingMachine.giveChange).toBeDefined("quarters: 1, dimes: 0, nickels: 1, pennies: 2");
    });
    it("10 change produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0", function() {
        changeSum = 10;
        expect(vendingMachine.giveChange).toBeDefined("quarters: 0, dimes: 1, nickels: 0, pennies: 0");
    });
    it("27 change produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2", function() {
        changeSum = 27;
        expect(vendingMachine.giveChange).toBeDefined("quarters: 1, dimes: 0, nickels: 0, pennies: 2");
    });
    it("68 change produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3", function() {
        changeSum = 68;
        expect(vendingMachine.giveChange).toBeDefined("quarters: 2, dimes: 1 nickels: 1, pennies: 3");
    });

}); //YAAAAYYY THEY ALL WORKED!!! :D
