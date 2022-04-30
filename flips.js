// Import the coinFlip function from your coin.mjs file
import { coinFlips } from './modules/coin.mjs';
import minimist from 'minimist';


var argv = minimist(process.argv.slice(2));
var number = argv['number']
console.log(number);
// Call the coinFlip function and put the return into STDOUT
let STDOUT = coinFlips(number);
console.log(STDOUT);