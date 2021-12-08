let number1 = -7;
let num2 = 4;
let num3 = 4001;
let num4 = 5;

while(number1 < 25)
{
    console.log(number1);
    number1++;
}

while(num2 < 31)
{
    if(num2%2===0){
        console.log(num2);       
    }
    num2++;
}

while(num3 < 4037)
{
    if(num3%2!==0){
        console.log(num3);       
    }
    num3++;
}

while(num4 < 61)
{
    if(num4%5 ===0 && num4%3 ===0){
        console.log(num4);       
    }
    num4++;
}
console.log("------------------------------------");

for(var i=-7; i<25; i++)
{
    console.log(i);
}

for(var j=4; j<31; j++)
{
    if(j%2 === 0)
    console.log(j);
}

for(var k=4001; k<4037; k++)
{
    if(k%2 !== 0)
    console.log(k);
}

for(var l=5; l<61; l++)
{
    if(l%5===0 && l%3===0)
    console.log(l);
}