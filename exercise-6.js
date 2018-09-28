// LOOPING WHILE - Question 1

var counter = 0

console.log('FIRST LOOP')
while (counter <= 20){
    if (counter % 2 === 0){
        console.log(counter + " - I love Coding")
        counter++
    } else{
        counter++
    }
}

console.log('SECOND LOOP')
while (counter >= 0){
    if (counter % 2 === 0){
        console.log(counter + " - I will become fullstack developer")
        counter--
    } else{
        counter--
    }
}

// LOOPING WHILE - Question 2

console.log('FIRST LOOP')
for (counter = 1; counter <= 20; counter++) {
    console.log(counter + " - I love Coding")
}

console.log('SECOND LOOP')
for (counter = 20; counter > 0; counter--) {
    console.log(counter + " - I will become fullstack developer")
}

// LOOPING WHILE - Question 3

console.log('ODD - EVEN')
for (counter = 1; counter <= 100; counter++) {
    if (counter%2 === 0){
        console.log("GENAP")
    } else {
        console.log("GANJIL")
    }
}

console.log('Increment of 2')
for (counter = 1; counter <= 100; counter += 2) {
    if (counter%3 === 0){
        console.log(counter + " KELIPATAN 3")
    } else {
        console.log("")
    }
}


console.log('Increment of 5')
for (counter = 1; counter <= 100; counter += 5) {
    if (counter%6 === 0){
        console.log(counter + " KELIPATAN 6")
    } else {
        console.log("")
    }
}

console.log('Increment of 9')
for (counter = 1; counter <= 100; counter += 9) {
    if (counter%10 === 0){
        console.log(counter + " KELIPATAN 10")
    } else {
        console.log("")
    }
}