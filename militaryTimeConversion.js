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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 * Input format 12:00:00AM or 12:00:00PM
 */

function timeConversion(s) {
    const hour = Number(s.slice(0,2));
    const minSec = s.slice(2, 8);
    const timeConversion = hour + 12;
    return s.includes('P') && hour < 12 ? `${timeConversion}${minSec}` : hour == 12 && s.includes('A') ? `00${minSec}` : s.slice(0, 8)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
