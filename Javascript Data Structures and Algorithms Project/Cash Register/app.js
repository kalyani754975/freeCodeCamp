function checkCashRegister(price, cash, cid) {

    // Calculate change
    var temp_change = cash - price;
    denomination = [100, 20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01];

    var i;
    var result;
    let cid_change = {
        status: "",
        change: []
    };

    for (i = 0; i < denomination.length; i++) {
        result = temp_change / denomination[i];
        if (result >= 1) {
            switch (denomination[i]) {
                case 100:
                    denom = "ONE HUNDRED";
                    break;
                case 20:
                    denom = "TWENTY";
                    break;
                case 10:
                    denom = "TEN";
                    break;
                case 5:
                    denom = "FIVE";
                    break;
                case 1:
                    denom = "ONE";
                    break;
                case 0.25:
                    denom = "QUARTER";
                    break;
                case 0.10:
                    denom = "DIME";
                    break;
                case 0.05:
                    denom = "NICKEL";
                    break;
                case 0.01:
                    denom = "PENNY";
                    break;
            }
            cid_change.change.push([denom, parseInt(result)]);
            temp_change -= parseInt(result) * denomination[i];
            result = temp_change;
        }
    }

    cid[8][1]; // 100
    Number_100 = cid[8][1] / 100;

    cid[7][1]; // 60
    Number_20 = cid[7][1] / 20;

    cid[6][1]; // 20
    cid[5][1]; // 55
    cid[4][1]; // 90
    cid[3][1]; // 4.25
    cid[2][1]; // 3.1
    cid[1][1]; // 2.05
    cid[0][1]; // 1.01

}

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

// should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.