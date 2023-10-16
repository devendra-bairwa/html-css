let moviename="avatar";
let guessname=prompt("enter movie name");

while((moviename!=guessname)&& (guessname!="quit"))
{
    guessname=prompt("try another movie name or write quit");
}

if(guessname==moviename)
{
    prompt("congratulations");
}
else  {prompt("you quit");}