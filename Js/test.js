//Clock
//initializing variables
const hour = document.querySelector(".Clock-hourhand");
const min = document.querySelector(".Clock-minhand");
const sec = document.querySelector(".Clock-sechand");

let currentSeconds = 90;
let currentMinutes = 90;
let currentHours = 90;

//calculate the rotation
function estimateRotation(currentRotation, targetRotation){
  let estimatingCurrent = currentRotation % 360;
  let estimatingTarget = targetRotation % 360;

  let delta = estimatingCurrent - estimatingTarget;

  if(delta > 180) delta -= 360;
  if(delta < -180) delta += 360;

  return currentRotation + delta;
}

//update
function updateClock(){
  const current = new Date();

  const hours = current.getHours();
  const minutes = current.getMinutes();
  const seconds = current.getSeconds();

  //calculating the clock
  const secondsRotation = (seconds / 60) * 360 + 90;
  const minutesRotation = (minutes / 60) * 360 + (seconds / 60) *6 + 90;
  const hourRotation = ((hours / 12) * 360 + (minutes / 60) * 30  + 90);

  //calculating the current rotation
  currentSeconds = estimateRotation(currentSeconds, secondsRotation);
  currentMinutes = estimateRotation(currentMinutes, minutesRotation);
  currentHours = estimateRotation(currentHours, hourRotation);

  //the clock hands rotations
  sec.style.transform = `rotate(${secondsRotation}deg)`;
  min.style.transform = `rotate(${minutesRotation}deg)`;
  hour.style.transform = `rotate(${hourRotation}deg)`;
}


//initializing
let customSeconds = 0;
let customMinutes = 0;
let customHours = 0;

function realTime(){ 
  customSeconds++;
  if(customSeconds >= 60){
    customSeconds = 0;
    customMinutes++;
  }
  if(customMinutes >= 60){
    customMinutes = 0;
    customHours++;
  }
  if(customHours >=12){
    customHours = 0;
  }
  updateClock();
}

const secAdd = document.getElementById("secondsAdd");
const secSub = document.getElementById("secondsSubtract");
const minAdd = document.getElementById("minutesAdd");
const minSub = document.getElementById("minutesSubtract");
const hourAdd = document.getElementById("hoursAdd");
const hourSub = document.getElementById("hoursSubtract");

hourAdd.addEventListener("click", () => {
  customHours = (customHours + 1) % 24;
  updateClock(customHours, customMinutes, customSeconds);
    console.log(customHours);
});

hourSub.addEventListener("click", () => {
  customHours = (customHours - 1 + 24 ) % 24;
  updateClock(customHours, customMinutes, customSeconds);
  console.log(customHours);
});

minAdd.addEventListener("click", () => {
  customMinutes = (customMinutes + 1) % 60;
  updateClock(customHours, customMinutes, customSeconds);
  console.log(customMinutes);
});

minSub.addEventListener("click", () =>{
  customMinutes = (customMinutes - 1 + 60) % 60;
  updateClock(customHours, customMinutes, customSeconds);
  console.log(customMinutes);
});

secAdd.addEventListener("click", () => {
  customSeconds = (customSeconds + 1) % 60;
  updateClock(customHours, customMinutes, customSeconds);
  console.log(customSeconds);
});

secSub.addEventListener("click", () => {
  customSeconds = (customSeconds - 1 + 60) % 60;
  updateClock(customHours, customMinutes, customSeconds);
  console.log(customSeconds);
});

setInterval(realTime, 1000);
updateClock(customHours, customMinutes, customSeconds);



/*const trailing = document.createElement("img");
trailing.src = "https://i.pinimg.com/564x/2b/ca/d6/2bcad6870b9318b3085ec6c7643fbb14.jpg";
trailing.style.position = "absolute";
trailing.style.width = "30px";
trailing.style.height = "30px";
trailing.style.opacity = "0.2px";
trailing.style.transition = "transform 0.2s ease";

//cursor movement
const movement = {x:0, y:0};
document.addEventListener("mousemovement", (e) => {
  mousemovement.x = e.clientX;
  mousemovement.y = y.clientY;
});

let currentTrailElement = 0;
//update
function print(){
  const rect = move.getBoundingClientRect();

  let x = movement.x - rect.left;
  let y = movement.y - rect.top;

  move = trailElement[currentTrailElement];
  trailing.style.transform = "translate(${event.clientX}px, ${event.clientY}px)";
  currentTrailElement = (currentTrailElement + 1);
}*/
