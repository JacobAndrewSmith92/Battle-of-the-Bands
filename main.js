/* 

A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.

*/
//array to hold band list
// const listOfBand = [];

// // function that increments and prints out band name in order they signed up
// function bandOrder(bandName) {
//     //const prompt that requests band name from user
//     const yourBand = prompt(`Rock on! What's your band's name?`);
//     for (let i = 0; i <= listOfBand.length; i++) {
//             listOfBand[i] += yourBand;
//             console.log(`${listOfBand.indexOf(i)} ${bandName}`);
//             break
//     }

// }

//  let switchfoot = bandOrder("Switchfoot");
//  let otherBand = bandOrder("Dr. Dog");
//  let thirdBand = bandOrder("What's up");

let listOfBands = 0;

function bandOrder(bName) {
    listOfBands++
    let bandName = `${listOfBands}. ${bName} .`;
    return bandName;


}

console.log(bandOrder("The Best"));
console.log(bandOrder("The Worst"));