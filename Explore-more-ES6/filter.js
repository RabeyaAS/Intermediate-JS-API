/**
 * Filter --> filter selects elements based on a condition and returns in an array with the elements
 * that fulfilled the condition. 
 * Note: filter returns a condition even if its more than one element, it returns all of them in an array,
 * even if its only one element it will still in an array. And if the condition don't meet then it returns an empty array.
 */


const players = [75, 65, 67, 72, 55, 59];

// const selected = players.filter(p => p > 70);
// const selected = players.filter(p => p > 80);
// const selected = players.filter(p => p > 50);
const selected = players.filter(p => p % 2 === 1);
// const selected = players.filter(p => p % 2 === 0);
console.log(selected);



const friends = ['Tom', 'John', 'Michael', 'Oliver', 'Tim', 'Joshna'];

const oddFriends = friends.filter(f => f.length > 4);    //gives the names that has more than 4 letters/length
console.log(oddFriends);



