/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know?
 * 
 * It will print Step 1, Step 3, then Step 2. This is due to the function for Step 2 being called after the console.log for Step 3. 
 * 
 * 
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 * 
 * It is printed in the order Step 1, Step 3, then Step 2.
 * 
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct?
 * 
 * I believe that the new order will be Step 1, Step 2, then Step 3.
 * It ended up printing as Step 1, Step 3, and Step 2. I was incorrect.
 * I had assumed that the delay was a large factor in the non-sequential order of the console.logs,
 * but that was not the case.
 * 
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
function snooze(action) {
    setTimeout(function() {
      action();
    }, 0);
}
console.log('Step 1');

snooze( function() {
    console.log('Step 2');
    console.log("Async Action completed via callback");
} );

console.log('Step 3');

