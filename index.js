var randomNumber1 = ( Math.floor( Math.random() * 6 ))+1;
var randomNumber2 = ( Math.floor( Math.random() * 6 ))+1;

var IMAGES1 = "images/dice"+randomNumber1+".png";
var IMAGES2 = "images/dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src",IMAGES1);
document.querySelector(".img2").setAttribute("src",IMAGES2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("div h1").innerHTML="🚩 Player 1 Wins!";
}

else if(randomNumber1<randomNumber2)
{
    document.querySelector("div h1").innerHTML="Player 2 Wins! 🚩";
}

else 
{
    document.querySelector("div h1").innerHTML="Draw!";
}

