function romanToInt (s: string): number{

    const values: {[key: string]: number} = {
        M: 1000, 
        D: 500, 
        C: 100, 
        L: 50, 
        X: 10, 
        V: 5, 
        I: 1
    }

let total: number = 0 
    for (let i = 0; i < s.length; i++){
        let roman: string = s[i]
        let romanNext: string = s[i + 1]
        let int: number = values[roman]
        console.log(roman, romanNext)

        if (roman === "I" && (romanNext === "V" || romanNext === "X")){
            total -= int 
        } else if (roman === "X" && (romanNext === "L" || romanNext === "C")){
            total -= int
        } else if (roman === "C" && (romanNext === "D" || romanNext === "M")){
            total -= int
        } else {
        total += int
        } 
    }
    return total
}
