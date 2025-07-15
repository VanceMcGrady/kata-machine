export default function two_crystal_balls(breaks: boolean[]): number {
    // jump by sqrt of n
    console.log("breaks: ");
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jumpAmount;
    // breaking the first ball
    // iterate through the array, incrementing i by sqrt of n each time until you find
    // a truthy element (the ball breaks). In this scenario, the array is populated by
    // trues and falses - a true means that the ball will break from that height (and all heights above.)
    for (; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jumpAmount;

    for (let j = 0; j < jumpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) return i;
    }
    return -1;
}
