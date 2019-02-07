/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {
    
    constructor(amountDue) {
        this.amountDue = amountDue; //whatever is in constructor(10), is the 10
        this.cashTendered = 0; //cashTendered starts at 0
    }

    /**
     * The customer inserts a coin, increasing the cashTendered.
     * The parameter "type" is a string that is either quarter, dime, nickel, or penny
     */
    insertCoin(type) {
        if (type === "quarter") {
            this.cashTendered += 25; 
        } else if (type === "dime") {
            this.cashTendered += 10;
        } else if (type === "nickel") {
            this.cashTendered += 5;
        } else if (type=== "penny") {
            this.cashTendered += 1;
        }

    }

    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     */
    isPaymentSufficient() {
        if (this.cashTendered >= this.amountDue) {
            return true
        } else {
            return false
        }
    }

    giveChange() {
        // TODO return the correct change in the following format...

        let changeSum = this.cashTendered - this.amountDue; //declare what the change will be
        currency = [25, 10, 5, 1]; //array for coin ammounts
        amount = [0, 0, 0, 0]; //array for the coin slots to link to the return later

        for (let i = 0; i < currency.length; i++) { //loop through the currency array
            for (let j=0; changeSum - currency[i] >=0; j++) {
        //ie 40 change - current currency you are on in the array, if it's greater than zero skip to the next smallest coin
                changeSum -= currency[i]; //continue to subtract the current currency before you loop back again
                amount[i] = j+1; //for every time you loop, increase j by 1 and direct it to the amount index slot
                //for example: 40 change, it will loop through quarters once
                //quarters= value of 0 currently, but you want to increase it by 1 to have it be 1 instead of just 0
                //assign that 1 value to the quarter index in the return function
                //15 change left, loop through the 10 once, the 10 index for the amount is zero, so add 1
            }
        }
        return {
            quarters: amount[0],
            dimes: amount[1],
            nickels: amount[2],
            pennies: amount[3],
        }
 
        }
}

const vendingMachine = new ChangeHandler(100);
//notes for lab tonight!
    // const vendingMaching = new ChangeHandler{cashTendered: 100})
    // new ChangeHandler(100) //dont use cashTendered: 100


