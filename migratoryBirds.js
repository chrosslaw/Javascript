'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

    //Function explanation
    //check the first two elements in the array
    //increment the current count if they are the same
    //if not, reset current count back to 1.
        //check if the current count is HIGHER than the highest count (lowest bird type wins when equal)
            //if so, make the current count the highest
            //and record the most seen bird to the
function migratoryBirds(arr) {
    // Write your code here
    let newArr= arr.sort();         //<- sort arr lowest to highest
    let highest = 1;                //<- the initial count most seen bird types
    let x = 1;                      //<- the initial current count
    let mostSeen = newArr[0];       //<- the first bird seen is the most
    let count = 0;                  //<- initiate loop count
    while(count < newArr.length -2){
        newArr[count] === newArr[count+1] ? x++ : x = 1;
        if(x > highest){
            highest = x;
            mostSeen = newArr[count]
        }
        count++
    }
    return mostSeen
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
