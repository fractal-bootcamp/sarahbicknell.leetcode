function intersect(nums1: number[], nums2: number[]): number[] {
    let intersected = []
    let nums2Map = new Map() 

    for(let num of nums2){
      nums2Map.set(num, (nums2Map.get(num) || 0) + 1) 
      }

    for (let i = 0; i < nums1.length; i++){
      if (nums2Map.has(nums1[i]) && nums2Map.get(nums1[i]) > 0) {
          intersected.push(nums1[i])
          nums2Map.set(nums1[i], nums2Map.get(nums1[i]) - 1) 
        }
    }

    return intersected
};