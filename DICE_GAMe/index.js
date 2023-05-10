//MAth.random()choosesnumber from 0 to 0.9999 , Math.floor() makes it whole number.Adding 1 makes the number from 1 to 6 
var randomNumber1 = Math.floor(Math.random()*6)+1;
//chooses images from 1 to 6
var  randomDiceImage = "/Dice" + randomNumber1 + ".png";
//this one take the image source and choose pictures from it.
 var imageSource = "/images" + randomDiceImage ;
 //Selects the img tag and starts from the index 1
 var player1 = document.querySelectorAll("img")[0];
 //Sets the attribute from src from src to imagesource 
 player1.setAttribute("src",imageSource);
 //for player 2
 var randomNumber2 = Math.floor(Math.random()*6)+1;

 var randomDiceImage = "/Dice" + randomNumber2 + ".png";

 var imageSource = "/images" + randomDiceImage;

 var player2 = document.querySelectorAll("img")[1];


 player2.setAttribute("src",imageSource);

//Now for changing the value of h1 

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!!!  🏆"
}else if (randomNumber2>randomNumber2){
    document.querySelectorAll("h1").innerHTML = "Player 2 Wins!!!  🔥"
}

