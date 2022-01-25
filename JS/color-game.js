const colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 255)"
];

//select elements
const squares = document.querySelectorAll(".square")
const colorDisplay = document.getElementById("colorDisplay");
const message = document.getElementById("message");

const pickColor = () => {
    const random = Math.floor(Math.random()*6);
    return colors[random];
}

//choose winning Color
let pickedColor = pickColor();

//update color display
colorDisplay.textContent = pickedColor;

//set squares
for(let i=0; i<squares.length; i++)
{
    squares[i].style.backgroundColor = colors[i];
    //add click listeners 
    squares[i].addEventListener("click", function() {

        //getting the color of clicked square
        const clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor)
        {
            message.textContent = "Correct !";
            changeColor(pickedColor);
        }
        else {
            message.textContent = "Wrong !";
            this.style.backgroundColor = "black";
        }
    })
}

const changeColor = (color) => {
    squares.forEach((square) => {
        square.style.backgroundColor = color;
    })
}