// First Problem
// Converting Radian value to Degree value.
/*
==================================================

Formula: We know that, 1 radian = 180/pi(3.1416)

==================================================
*/


function radianToDegree(radian) {
    const radianValue = 180 / Math.PI;
    const convertedDegreeValue = radian * radianValue;
   
    if(typeof(radian) !== 'number'){
        console.log('Please provide a valid number.');
    }

    return parseFloat(convertedDegreeValue.toFixed(2));
}

// Remove them before submitting
// const degreeValue = radianToDegree(5);
// console.log(degreeValue);