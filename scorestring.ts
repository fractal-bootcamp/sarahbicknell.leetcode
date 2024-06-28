let charCode = "avatar".charCodeAt(1)

let string = "zaz"
let total = 0

for(let i = 0; i < string.length - 1 ; i++) {
   // take the ascii code of the letter at that index and index + 1 , subtract the second from the first  
   // add it to a running total 
   const value = Math.abs(string.charCodeAt(i) - string.charCodeAt(i + 1))

   total = total + value
}

console.log(total)