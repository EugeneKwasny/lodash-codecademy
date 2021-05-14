const _ = {
    clamp(number, lower, upper){
        if(number < lower){
            return lower;
        }else if(number > upper){
            return upper;
        }
        return  number;
    }
}




// Do not write or modify code below this line.
module.exports = _;