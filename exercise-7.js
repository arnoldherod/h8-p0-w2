// LOOPING - Question 1

var rows1 = 5

for (len = 0; len < rows1; len++) {
    console.log("*")
}

// LOOPING - Question 2

var rows2 = 5

for (row = 0; row < rows2 ; row++){
    var str = ""
    for(col = 0 ; col < rows2 ; col++){
        str += "*"
    }
    console.log(str)
}

// LOOPING - Question 3

var rows3 = 5

for (row = 0; row < 1 ; row++){
    var str = ""
    for(col = 0 ; col < rows3 ; col++){
        console.log(str += "*")
    }
}