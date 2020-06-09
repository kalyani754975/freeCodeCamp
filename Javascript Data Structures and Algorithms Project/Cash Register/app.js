function checkCashRegister(price, cash, cid) {

  let changeCents = (cash - price) * 100;

  //Object that will be returned
  let change = {
    status: "",
    change: []
  };

  //Calculate total money in drawer
  var sumCents = 0;
  for (let i = 0; i < cid.length; i++) {
    sumCents += cid[i][1] * 100;
  }

  //CLOSED CASE
  if (sumCents === changeCents) {
    change.status = "CLOSED";
    change.change.push(...cid);
    return change;
  }

  //Simple INSUFFICENT FUNDS CASE
  else if (sumCents < changeCents) {
    change.status = "INSUFFICIENT_FUNDS";
    return change;
  }

  //Either OPEN or INSUFFICIENT FUNDS CASE
  let exactChangeNeededCents = changeCents;
  let denominationCents = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
  let reverseIndex = cid.length - 1; //Use cid array going from right to left
  let pushValueDollar = 0;

  //Loop through all elements of cid starting from One-hundred dollars
  for (reverseIndex; reverseIndex >= 0; reverseIndex--) {

    //If exact change needed is greater than total money in this particular
    //denomination then calculated push value will be total of all the money
    //from this denomination.
    if (exactChangeNeededCents >= cid[reverseIndex][1] * 100) {
      pushValueDollar = cid[reverseIndex][1];
      exactChangeNeededCents -= pushValueDollar * 100;
    }

    //If exact change needed is less than total money in this particular
    //denomination then loop through this denomination and calculate how
    //much of this denomination should be pushed to change object's change array.
    else {
      while ((exactChangeNeededCents > 0) && (exactChangeNeededCents >= denominationCents[reverseIndex])) {
        pushValueDollar += denominationCents[reverseIndex] / 100;
        exactChangeNeededCents -= denominationCents[reverseIndex];
      }
    }

    //Only push value to the change object's change array if push values is greater
    //than 0. Reset push value to 0 for next denomination.
    if (pushValueDollar > 0) {
      change.change.push([cid[reverseIndex][0], pushValueDollar]);
      pushValueDollar = 0;
    }
  }

  //OPEN CASE
  if (exactChangeNeededCents === 0) {
    change.status = "OPEN"
    return change;
  }

  //INSUFFICENT FUNDS due to lack of EXACT CHANGE
  else {
    change.status = "INSUFFICIENT_FUNDS";
    change.change = [];
    return change;
  }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
