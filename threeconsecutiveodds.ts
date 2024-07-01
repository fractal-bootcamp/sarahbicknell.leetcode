const case1 = [2,6,4,1]

const case2 = [1,2,34,3,4,5,7,23,12]

function threeConsecutiveOdds(arr: number[]): boolean{
    for (let i = 0; i < arr.length - 2; i ++){
        if (arr[i] % 2 !== 0 && arr[i+1] % 2 !== 0 && arr[i+2] % 2 !==0 ) {
            return true 
        }
    }
    return false 
}

console.log(threeConsecutiveOdds(case2))