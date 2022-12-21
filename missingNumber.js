    let quickSort = function(nums){
    
    if(nums.length == 1) return nums 
    let pivot = nums[nums.length-1]
    let left =[]
    let right = []

    for(let i = 0; i< nums.length-1; i++){
        if(nums[i]< pivot){
            left.push(nums[i])
        } else {
            right.push(nums[i])
        }
    }
    
    if(left.length > 0 && right.length > 0){
        return [...quickSort(left), pivot, ...quickSort(right)]
    } else if(left.length > 0){
        return [...quickSort(left), pivot]
    }else if(right.length > 0){
        return [pivot, ...quickSort(right)]
    }
    }
var missingNumber = function(nums) {
    //sort  
    //loop over and check if nums[i]+1 = nums[i+1]
    quickSort(nums)
    
    for(let i = 0; i< nums.length; i++){
        if(nums[i]+1 !=nums[i+1]){
           number = nums[i]+1
        }
    }

    
    if(number != nums.length+1){
        return number
    }
};


console.log(missingNumber([1, 2, 3, 0, 5]))

        nums.sort((a, b) => {
        return a - b;
    })
    let count = 0;
    let i = 0;
    let j = nums.length - 1;
    while (i < j) {
        if (nums[i] + nums[j] === k) {
            count++;
            i++
            j--;
        } else if (nums[i] + nums[j] > k) {
            j--;
        } else {
            i++;
        }
    }
    return count;