//Palindrome problem

const checker = (number) => {
    let numberString = number.toString()
    let reversedNumber = ""
    for (let i = numberString.length; i > 0; i--) {
        reversedNumber += numberString[i-1] 
    }

    console.log(numberString === reversedNumber)
    
}

number = 1421
checker(number)
