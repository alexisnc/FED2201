
// let a =26;
// let b = 5;
let i;

// a is the dividend and b is the divisor
function division(a,b){
   //let a = 26;
    //let b = 5;
    // b is the divisor, so i used an if statement that would return the error message if b was 0
    if (b = 0){
        return "Error: Cannot divide by zero"
    }
    //else will return the execution of the function
    else{
        // I wanted to use a for loop to move through the multiplication of the divisor, and the index.value would be less
        //than or equal to the dividend so that it would stop at the value before reaching dividend.
        for (let i = 0; index.value <= a; i += b ){
            //this variable's equation would calculate the modulus bc it would take the last multiple and subtract it
            //from the dividend
            let modulus = a - [index.length - 1];
             // this variable would show how many times the number could fit into the number being divided
             let quotient = [index.length];
            return `Result: ${quotient}; Remainder: + ${modulus}`;
        }
    }
}

division(26, 5);
console.log(division(a,b));


//“Result: [number] ; Remainder: [remainder]”