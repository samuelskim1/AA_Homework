function mysteryScoping1() {
    var x = 'out of block';
    if (true) {
        var x = 'in block';
        console.log(x);
    }
    console.log(x);
}

// mysteryScoping1() 
// in block in block

function mysteryScoping2() {
    const x = 'out of block';
    if (true) {
        const x = 'in block';
        console.log(x);
    }
    console.log(x);
}

// mysteryScoping2();
//in block out of block


// function mysteryScoping3() {
//     const x = 'out of block';
//     if (true) {
//         var x = 'in block';
//         console.log(x);
//     }
//     console.log(x);
// }

// mysteryScoping3();
//error

// function mysteryScoping4() {
//     let x = 'out of block';
//     if (true) {
//         let x = 'in block';
//         console.log(x);
//     }
//     console.log(x);
// }

// mysteryScoping4(); // in block out of block


// function mysteryScoping5() {
//     let x = 'out of block';
//     if (true) {
//         let x = 'in block';
//         console.log(x);
//     }
//     let x = 'out of block again';
//     console.log(x);
// }

// mysteryScoping5(); 
// // syntax error


// function madLib(verb, adj, noun) {
//     return `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`
// }

// console.log(madLib('make', 'best', 'guac'));
// // "We shall MAKE the BEST GUAC."

function isSubstring(searchString, subString) {
    return searchString.includes(subString);
}

// console.log(isSubstring("time to program", "time"))
// console.log(isSubstring("Jump for joy", "joys"))

// Phase 2

function fizzBuzz(array) {
    const new_arr = [];

    array.forEach(function(el) {
        if (((el % 3 === 0) || (el % 5 === 0)) && !((el % 3 === 0) && (el % 5 === 0))) {
            new_arr.push(el);
        }
    });

    return new_arr;
}

// console.log(fizzBuzz([1,2,3,4,5,6,7,8,9,10,15]))

function isPrime(n) {
    if (n<2) {return false;}

    for(let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

// console.log(isPrime(37))

function sumOfNPrimes(n) {
    let sum = 0;
    let firstNPrimes = 0;
    let i = 2;
    
    while (firstNPrimes < n) {
        if(isPrime(i)) {
            sum += i;
            firstNPrimes++;
        }
        i++;
    }

    return sum;
}

console.log(sumOfNPrimes(4))



