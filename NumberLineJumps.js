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
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */


//kangaroo() function return explanation:
//Return "NO" if
//First: k1 starts behind k2, and k2 is farther away after the jump (x1 < x2 && x2-x1 < k2-k1)
//Second: k2 starts behing k1, and k1 is farther away after the jump (x1 > x2 && x2-x1 > k2-k1)
//Third: k1 and k2 make the same stride jumps (v1 === v2)
//Fourth: Return "YES" if k1 and k2 are equal distance after the jump (k1 == k2)
//Lastly: Recursively call kangaroo() with the new jump locations as the starting point and the same jump distance (kangaroo(k1, v1, k2, v2))
function kangaroo(x1, v1, x2, v2) {
    const k1 = x1 + v1;//<-kangaroo 1 location after after jump
    const k2 = x2 + v2;//<-kangaroo 2 location after after jump
    return ((x1 < x2 && x2-x1 < k2-k1) || (x1 > x2 && x2-x1 > k2-k1) || v1 === v2) ? "NO" : k1 == k2 ? 'YES' : kangaroo(k1, v1, k2, v2)
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const x1 = parseInt(firstMultipleInput[0], 10);

    const v1 = parseInt(firstMultipleInput[1], 10);

    const x2 = parseInt(firstMultipleInput[2], 10);

    const v2 = parseInt(firstMultipleInput[3], 10);

    const result = kangaroo(x1, v1, x2, v2);

    ws.write(result + '\n');

    ws.end();
}
