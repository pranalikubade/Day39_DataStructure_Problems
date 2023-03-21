
let dice = new Map();
let roll = true;
let maxKey = 0;
let minKey = 0;
let count;
let minValue = 10;
while(roll)
{
    let diesValue = Math.floor(Math.random()*6)+1;
    if(dice.has(diesValue))
    {
        //If it is Present in Map it increments
        count = dice.get(diesValue);
        dice.set(diesValue, count+1);
    }
    else
    {
        //If it is not Present in Map it adds
        count = 1;
        dice.set(diesValue, count);
    }
    if(dice.get(diesValue) == 10)
    {
        roll = false;
        maxKey = diesValue;
    }
}

for(let i = 1; i <= 6; i++)
{
    if(dice.get(i) < minValue)
    {
        minValue = dice.get(i);
        minKey = i;
    }
}

console.log(dice);
console.log("The number that reached maximum number of times is : " + maxKey);
console.log("The number that reached minimum number of times is : " + minKey);
