module.exports = function getZerosCount(number, base) {
  // your implementation
    var baseDividers = getBaseDividers(number, base);
    var numDividers = getNumberDividers(baseDividers, number);
    return compareDividers(numDividers, baseDividers);
}

/*Function compating factorial and base objects to find
max pow for each item >> number of trailing zeros.*/
function compareDividers(numDividers, baseDividers){
    var zeroCount = 0;
    for (var key in baseDividers){
        if (numDividers[key] < baseDividers[key]){
            return zeroCount = 0;
        }
        var result = Math.floor(+numDividers[key] / +baseDividers[key]);
        if ((result < zeroCount)||(zeroCount == 0)){
            zeroCount = result;
        }
    }
    return zeroCount;
}

//Function returns an object { prime-number: power } for base number.
function getBaseDividers(number, base){
    var baseDividers = {};
    var tempBase = base;
    for ( var i = 2; i <= Math.floor(Math.sqrt(base)); i++){
        var count = 0;
        do{
            if (tempBase % i == 0){
                count++;
                tempBase /= i;
            }
            else if (count > 0) {
                baseDividers[i] = count;
                break;
            }
            else break;
        } while (1);
    }
    if (tempBase != 1){
        baseDividers[tempBase] = 1;
    }
    return baseDividers;
}

//Function returns an object { prime-number: power } for factorial number.
function getNumberDividers(baseDividers, number){
    var numberDividers = {};
    for (var key in baseDividers){
        var pow = +key;
        var count = 0;
        while (pow < number){
            count += Math.floor(number/pow);
            pow *= +key;
        }
        numberDividers[key] = count;
    }
    return numberDividers;
}