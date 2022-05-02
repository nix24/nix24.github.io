button = document.getElementById("button"); //button
label = document.getElementById("label");//text asking user to type a number
polygon = document.getElementById("polygon"); 
polygonShape = document.getElementById("polygon-shape");
number = document.getElementById("number"); //input
//when user types a number from 1 to 10, the polygon will change to the name of the shape
//0 or 11+ will not draw anything and prompt label to say "invalid number" until a valid number is typed

button.addEventListener("click", function(){
    //use switch statement to change polygon html
    switch(number.value){
        case "1":
            polygon.innerHTML = "This is where i put an image of a Monogon! IF I HAD ONE!";
            break;
        case "2":
            polygon.innerHTML = "This is a Bigon! IF THERE WAS AN IMAGE TO PUT HERE!";
            break;
        case "3":
            polygon.innerHTML = "This is a Triangle! Reminds me how us cats used to be royalty back in my day...";
            polygonShape.src="https://img.icons8.com/material-outlined/96/000000/triangle-stroked.png";
            break;
        case "4":
            polygon.innerHTML = "This is a Square! perfect for sleeping in...wait that's a box.";
            polygonShape.src="https://img.icons8.com/material-outlined/96/000000/unchecked-checkbox.png";
            break;
        case "5":
            polygon.innerHTML = "This is a Pentagon! A square with a hat!";
            polygonShape.src="https://img.icons8.com/material-outlined/96/000000/pentagon.png";
            break;
        case "6":
            polygon.innerHTML = "This is a Hexagon! Ah the famous shape! no matter how you look, it looks the same!";
            polygonShape.src="https://img.icons8.com/material-outlined/96/000000/hexagon.png";
            break;
        case "7":
            polygon.innerHTML = "This is a Heptagon! does naybody even realize how underrated this is? we need more 7 pointed beauities in our lives!";
            polygonShape.src="images/heptagon.png";
            break;
        case "8":
            polygon.innerHTML = "This is a Octagon! I'm not sure how to describe this shape, but it's a shape! An evolved hexagon if you will!";
            polygonShape.src="https://img.icons8.com/material-outlined/96/000000/octagon.png";
            break;
        case "9":
            polygon.innerHTML = "This is a Nonagon! When does it get to a point when it becomes too many points";
            polygonShape.src="images/nonagon.png";
            break;
        case "10":
            polygon.innerHTML = "This is a Decagon! Ah who cares. Look at this cool dude. It's like a spike ball at this point! Who needs lame circles!";
            polygonShape.src="images/decagon.png";
            break;
        default:
            polygon.innerHTML = "wow look at this thing that thing! yup. I sure do love when people don't follow instructions!";
    }
});

