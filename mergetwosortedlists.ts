
let list1 = [1,2,4]
let list2 = [1,3,4]

function mergeTwoLists(list1, list2) {
    let sortedList = []

    while (list1.length > 0 && list2.length > 0){
        if (list1[0] < list2[0]){
            sortedList.push(list1.shift())
        } else {
            sortedList.push(list2.shift())
        }
        console.log(list1, list2)
    }
    return [...sortedList, ...list1, ...list2]
};

console.log(mergeTwoLists(list1, list2))