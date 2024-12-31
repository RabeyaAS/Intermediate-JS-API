/**
 * Find --> similar to filter. But only difference is that when it meets the condition jeta match kore shudhu 
 * shetake dibe, r jodi ekadhik match kore tahole prothom take dibe which is in an array length order e mane
 * jeta age thakbe shetakei dibe arki, r jodi konotai na mile tahole Undefined dibe. And egula ektakeo ke
 * array er moddhe dibena.
 * 
 */

const players = [75, 65, 67, 72, 56, 55, 59];

// const selected = players.find(f => f > 80);    //gives Undefined
// const selected = players.find(f => f > 70);    //gives 75
// const selected = players.find(f => f > 50);    //gives 75
// const selected = players.find(f => f > 60);    //gives 75
// const selected = players.find(f => f < 60);    //gives 56
// const selected = players.find(f => f < 70);    //gives 65
// const selected = players.find(f => f < 80);    //gives 75
const selected = players.find(f => f < 50);    //gives Undefined
console.log(selected);

