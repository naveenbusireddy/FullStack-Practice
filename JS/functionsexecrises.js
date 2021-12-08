function tellFortune(childern, partner, location, jobTitle)
{
    console.log(`You will be a ${jobTitle} in ${location}, and married to ${partner} with ${childern} kids`);
}

tellFortune("2","Sri","Bangalore","Administrator");

function calCircle(radius) {
    var area = Math.PI*radius*radius;
    console.log("Area of a Circle is :"+area.toFixed(2));
    var perimeter = 2*Math.PI*radius;
    console.log("Perimeter of a circle is: "+perimeter.toFixed(2));
}
calCircle(5);

function basicMath(a, b, operator) {
    if(operator === "add")
    {
        return a+b;       
    }
    if(operator === "subtract"){
        return a-b;
    }
    if(operator === "multiply") {
        return a*b;
    }
    if(operator === "divide"){
        return a/b;
    }
}

basicMath(2,4,"add");

