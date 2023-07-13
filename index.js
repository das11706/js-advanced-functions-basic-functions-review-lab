// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(flair="*") {
  return function(inner="special") {
    return `You are ${flair}${inner}${flair}!`
  }
}


const Calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    return a / b;
  }
}


function actionApplyer(start, array) {
  for(let i = 0; i < array.length; i++) {
    start = array[i](start)
  }
  return start
}