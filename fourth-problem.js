// Fourth Problem
// Calculate the Public Bus Fare
// Bus fare per person is 250 tk.


function publicBusFare(person) {
    // Defining Transport capacity and Public Bus Fare
    const busCapacity = 50;
    const microbusCapacity = 11;
    const publicTransportFare = 250;

    // Calculating 
    const busReservedPerson = person % busCapacity;
    const microBusReservedPerson = busReservedPerson % microbusCapacity;
    const busFare = microBusReservedPerson * publicTransportFare;

    if(typeof(person) !== 'number'){
        console.log('Please provide a Valid Number');
    }

    else{
        return busFare;
    }
}

// Should Remove Before Submission
// const fare = publicBusFare(365);

// console.log(fare);