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
    },
    /**
     * checks to see if the provided number falls 
     * within the range specified by the start and end values
     */
    inRange(number, start, end){
        // If no end value is provided to the method, the start value will be 0 and the end value will be the provided start value
        if(end === undefined){
            // end = start;
            // start = 0;
            [end, start] = [start, 0]
        }


        // If the provided start value is larger than the provided end value, the two values should be swapped
        if(start > end){
            [start,end] = [end,start]
        }

        // If the provided number is within the start and end values, .inRange() will return true
        // If the provided number is smaller than the start value, .inRange() will return false
        // If the provided number is larger than or equal to the end value, .inRange() will return false
        return number >= start && number < end;

    }
}




// Do not write or modify code below this line.
module.exports = _;