function checker(array, targetNumber) {
    for (i = 0; i < array.length; i++ ){
        for (j = i + 1; j < array.length; j++){
            if (array[i] + array[j] == targetNumber){
                console.log([i, j])
                return [i, j]
            }
        }
    } return [];
}

let nums = [3, 2, 4]
let target = 6
checker(nums, target)