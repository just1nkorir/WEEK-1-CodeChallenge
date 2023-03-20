/*
 we declare to variables and assign the value collected by the prompt
  to the first variable. 
*/
let pace = parseInt(window.prompt("Enter speed"));
let score;
// We set conditions and to assign the appropriate response to the score variable
function Convert(){
     if(pace <= 70){
        score = "OK"
    }else if(pace <= 75){
        score = "-1 merit point";
    }else if(pace <= 80){
        score = "-2 merit points";
    }else if(pace <= 85){
        score = "-3 merit points";
    }else if(pace <= 90){
        score = "-4 merit points";
    }else if(pace <= 95){
        score = "-5 merit points";
    }else if(pace <= 100){
        score = "-6 merit points";
    }else if(pace <= 105){
        score = "-7 merit points";
    }else if(pace <= 110){
        score = "-8 merit points";
    }else if(pace <= 115){
        score = "-9 merit points";
    }else if(pace <= 120){
        score = "-10 merit points";
    }else if(pace <= 125){
        score = "-11 merit points";
    }else if(pace > 130){
        score = "-12 merit points";
    }
    else if(pace > 135){
        score = "License Suspended";
    }else{
        score = "Please fill out correctly";
    }
    //We log the score variable to the console as it contains the desired response
    console.log(score)
    resultSpeed.innerText = `${score}`;
}
