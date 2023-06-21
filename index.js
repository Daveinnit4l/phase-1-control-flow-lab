const { expect } = require("chai");


function scuberGreetingForFeet(feet){
  prompt("input feet!!")
  if (feet<=400)return "This one is on me!";
  else if (feet>2000 && feet <=2500) return "I will gladly take your thirty bucks."
 else if (feet >2500) return "No can do."
 
}



  


function ternaryCheckCity(city){
prompt("input city !")
 if (city==="NYC") return( "Ok, sounds good.")
else {return "No go."}


  

}

function switchOnCharmFromTip(tips){
if(tips==="generous") return "Thank you so much.";
else if (tips==="not as generous"){return "Thank you."}
else {return "Bye."}
}
