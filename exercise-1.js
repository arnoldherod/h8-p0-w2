// Question 1
// READ and SAVE "force" in f
// READ and SAVE "mass" in m
// READ and SAVE "acceleration" in a
// READ and SAVE "people" in p
// IF p = 3, a = 2
// Compute "force" by multiply of "mass" and "acceleration"
// SHOW force

// Question 2
// READ and SAVE "year" in year
// IF year%4 = 0 && year%100 != 0, RETURN "Leap Year"
// ELSE IF year%4 && year%100 && year%400 = 0, RETURN "Leap Year"
// ELSE "Not a Leap Year"

function leapYear(year){

if ((year % 4 === 0 && year % 100 !== 0)||
    (year % 4 === 0 && year % 100 === 0 && year % 400 === 0)){
    return("Leap Year")} 
    else{ 
      return("Not a Leap Year")}
}

// Question 3
// READ and SAVE "clothes" in clothes
// For each iteration, clothes + 1
// SHOW "Machine On" if clothes = 20, ELSE IF "Machine has (clothes) clothes"

for (var i = 0; i <= 20; i++) {
  if (i < 20){
    console.log("Machine has " + i + " clothes")
  } else {
      console.log("Machine is On!")
  }
}

// Question 4
// READ and SAVE "nails" in nails
// READ and SAVE "students" in students
// Students = 40
// For each iteration, students -1
// if students > 0, if nails = long, return "Punish!"
// else if students >0, if nails = short, return "Praise!"
// else "All students checked"

var nails="long" //ini untuk sample supaya codenya jalan karena ga ada input/list data

for (var students = 40; students > 0; i--) {
  if (students === 0){
    console.log("All Students Checked!")
  } else if (students > 0 && nails == "long"){
      console.log("PUNISHMENT!")
  } else if (students > 0 && nails == "short"){
        console.log("PRAISE THE LORD!")
      }
}