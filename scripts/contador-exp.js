var experience = 5;

var players = document.getElementById("players");

var addExp5 = document.getElementById("addExp5");
var addExp10 = document.getElementById("addExp10");
var addExp15 = document.getElementById("addExp15");
var addExp20 = document.getElementById("addExp20");
var addExp25 = document.getElementById("addExp25");
var addExp30 = document.getElementById("addExp30");

addExp5.addEventListener("click", addExperience );
addExp10.addEventListener("click", addExperience );
addExp15.addEventListener("click", addExperience );
addExp20.addEventListener("click", addExperience );
addExp25.addEventListener("click", addExperience );
addExp30.addEventListener("click", addExperience );

function addExperience(event)
{
  var value = parseInt(event.target.dataset.exp);
  experience = experience + value;

  document.getElementById("result").innerHTML = experience;
}
