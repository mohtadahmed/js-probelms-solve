// Third Problem
// Calculate the total Oil Price
/* 
=================================

 Per Liter Disel Price = 114 tk
 Per Liter Petrol Price = 130 tk
 Per Liter Octen Price = 135 tk.

 =================================
*/


function oilPrice(diselQuentity, petrolQuentity, octenQuentity) {
    //Defining all the Oil Prices
    const diselPrice = 114;
    const pertrolPrice = 130;
    const octenPrice = 135;

    // Calculating the individual amount of Oil Price 
    const diselTotalAmount = diselQuentity * diselPrice;
    const pertrolTotalAmount = petrolQuentity * pertrolPrice;
    const octenTotalAmount = octenQuentity * octenPrice;

    // Calculating the total amount of Oil Price
    const totalAmount = diselTotalAmount + pertrolTotalAmount + octenTotalAmount;

    if (typeof(diselQuentity) !== 'number' || typeof(petrolQuentity) !== 'number' || typeof(octenQuentity) !== 'number') {
        console.log('Please give all the values as number');
    } 
    else {
        return totalAmount;   
    }
}

// Should Remove before submitting
// const total = oilPrice(1, 1, 1);
// const total = oilPrice(0, 2, 3);

// console.log(total);