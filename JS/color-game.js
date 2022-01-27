// const colors = [
//     "rgb(255, 0, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 255, 0)",
//     "rgb(255, 0, 255)",
//     "rgb(0, 255, 255)"
// ];
const changeColor = (color) => {
    squares.forEach((square) => {
        square.style.backgroundColor = color;
    })
}

const pickColor = () => {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
//Generate random color
const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const generateRandomColors = (num) => {
    let output = [];
    for(let i=0; i<num; i++)
    {
        output.push(generateRandomColor())
    }
    return output;
}
let numSquares = 6;
colors = generateRandomColors(numSquares);

//select elements
const squares = document.querySelectorAll(".square")
const colorDisplay = document.getElementById("colorDisplay");
const message = document.getElementById("message");
const title = document.querySelector("h1");
const resetButton = document.getElementById("resetButton");
const easyButton = document.getElementById("easyButton");
const hardButton = document.getElementById("hardButton");



//choose winning Color
let pickedColor = pickColor();
//update color display
colorDisplay.textContent = pickedColor;

// reset button
resetButton.addEventListener("click", function() {
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    title.style.backgroundColor = "black";
    for(let i=0; i<squares.length; i++)
    {
        squares[i].style.backgroundColor = colors[i];
    }
})

easyButton.addEventListener("click", function() {
    this.classList.add("selected");
    hardButton.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i=0; i<squares.length; i++) {
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
})

hardButton.addEventListener("click", function() {
    this.classList.add("selected");
    easyButton.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i=0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
})

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
            title.style.backgroundColor = pickedColor;
        }
        else {
            message.textContent = "Wrong !";
            this.style.backgroundColor = `${document.querySelector("body").style.backgroundColor}`;
        }
    })
}

