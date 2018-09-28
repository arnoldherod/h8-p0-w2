function xo(str) {
    var xcounter = 0
    var ocounter = 0
    for (i=0 ; i < str.length ; i++){
        if (str[i] === "x"){
            xcounter ++
        } else if (str[i] === "o"){
            ocounter ++
        }
    }
    console.log(xcounter === ocounter)
  }
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true