const _ = {
    clamp(number, lower, upper){
        // if(number < lower){
        //     return lower;
        // }else if(number > upper){
        //     return upper;
        // }
        // return  number;

        //alt implementation
        const maxNumber = Math.max(number, lower);
        return Math.min(maxNumber, upper);
    }
}




// Do not write or modify code below this line.
module.exports = _;