var userAge = prompt("What's your Age?")
console.log("you are " +userAge +" years old")

if(isNaN(userAge) || userAge<0)
{
    console.log("Please Enter a valid number")
} 
else if(userAge < 16)
{
    console.log("Won't someone Please think of the children!")
}
else if(userAge >= 16 && userAge <18)
{
    console.log("Sorry, you're not old enough to come in. Drive on home, kid!")
}
else if(userAge >= 18 && userAge <21)
{
    console.log("Come on in, but no drinking")
}else if(userAge >= 21 || userAge === 21)
{
    if(userAge === "21"){
        console.log("Happy 21st Birthday!")
    } else {
        console.log("Okey, get smashed.")
    }
    
}

if(!isNaN(userAge) && userAge % 2 !== 0 && userAge>0)
{
    console.log("You're an odd one..")
} 

if(Math.sqrt(userAge) % 1 === 0)
{
    console.log("Holy crap, you're a prefect square!")
}
