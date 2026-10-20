// Question 1: Value Detective

function describeValue(value){ 
    
    if(value > 0 | value == true){
        return `${typeof(value)} | truthy`
    }
    else{
        return `${typeof(value)} | falsy`
    }
}
// console.log(describeValue(false));

// Question 2: Bangladesh Weekend Machine
function getDayType(day){
   switch (day.toLowerCase()) {
  case "sunday":
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
    return "Working Day";
    break;
  case "friday":
  case "saturday":
    return "Weekend";
    break;
  default:
    return "Invalid Day";
   }
}
// console.log(getDayType("SUNDAY"));

// Question 3: Username Gatekeeper
function validateUsername(name){
    if(name.toLowerCase() == "admin"){
        return "Reserved Word"
    }
    else if(name.length < 4){
        return "Too Short"
    }
    else if (name.includes(" ")) {
        return "No Space Allowed"
    }
    else {return "Available"}
}

// console.log(validateUsername("mainul"));

// Question 4: Dhaka CNG Fare Meter 
function getCngFare(distance, isNight=false, waitingMinutes= 0){

    if(distance <= 2 & isNight == true){
     return 50 + (50*20) / 100
    
  }
   else if(distance > 0 & distance <= 2){
    return 50
  }
  else if(distance > 2 & isNight == true) {
    let totalPath = distance - 2
    let totalFare = 50 + totalPath * 15 + waitingMinutes * 2
    return totalFare + (totalFare*20) / 100
  }
 
  else {
    let totalPath = distance - 2
    return 50 + totalPath * 15 + waitingMinutes * 2
  }
  
}

// console.log(getCngFare(5, false, 10));

// Question 5: Run Chase Commentator

const getChaseVerdict = (target, scored, ballsLeft) =>{
      const runsNeeded = target - scored
      const requiredRate = (runsNeeded / ballsLeft) * 6
      if(runsNeeded <= 0){
        return "Won"
      }
      else if(ballsLeft <= 0){
        return "Lost"
      }
      else if(requiredRate <= 6){
        return `Need ${runsNeeded} runs in ${ballsLeft} balls | Comfortable`
      }
      else if( requiredRate <= 12){
        return `Need ${runsNeeded} runs in ${ballsLeft} balls | Tough`
      }
      else if(requiredRate > 12){
        return `Need ${runsNeeded} runs in ${ballsLeft} balls | Almost Impossible`
      }
}

console.log(getChaseVerdict(100, 70, 12));