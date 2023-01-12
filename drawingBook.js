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
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

//Explanation - 
//if page number is the middle number. Divide page by and two round down : 
//if page number is less than the middle number, then turn the pages from the beginning of the book, divide page number by two, and round down :
//--otherwise, the page number is higher than the middle number, and we start turning pages from the back of the book--
//if the number is even and not the last page, subtract the page number from the total pages, divide by two, round UP :
//if the page number is not even, subtract the page number from the total pages, divide by two, round DOWN :
function pageCount(n, p) {
    // Write your code here
    return (n/2 === p ? Math.floor(n/2/2) : n/2 > p ? Math.floor(p/2) : (n % 2 === 0 && p !== n) ? Math.round((n-p)/2) : Math.floor((n-p)/2))
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const p = parseInt(readLine().trim(), 10);

    const result = pageCount(n, p);

    ws.write(result + '\n');

    ws.end();
}
