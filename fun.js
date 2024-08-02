var RandomNumber1 = Math.floor(Math.random() * 6 ) + 1;

var RandomDiceImage = "dice" + RandomNumber1 + ".png";

var RandomSourceImage = "images/" + RandomDiceImage;

var firstiamge = document.querySelectorAll("img")[0];

firstiamge.setAttribute("src",RandomSourceImage);



var RandomNumber2 = Math.floor(Math.random() * 6) + 1;

var RandomDiceImage2 = "dice" + RandomNumber2 + ".png";

var RandomSourceImage2 = "images/" + RandomDiceImage2;

var secandimage= document.querySelectorAll("img")[1];

secandimage.setAttribute("src", RandomSourceImage2);



if (RandomNumber1 > RandomNumber2) {
    document.querySelector("h1").innerHTML = "Oh yeah Alioo WINS HUHU";
}else if(RandomNumber1 < RandomNumber2){
    document.querySelector("h1").innerHTML = "FUCK!!! You win -_-";
} else{
    document.querySelector("h1").innerHTML = "Draw :)"
}


