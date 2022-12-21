// You are given a 0-indexed integer array nums and a target element target.

// A target index is an index i such that nums[i] == target.

// Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

var targetIndices = function(nums, target) {
    let indeces = []
    //sort an array, if element == target => indeces.push(i)

    //to solve the problem I will use mergeSort algo


    //sort && merge 
    //function receive two sorted arr
    //create helper var i, j
    //if arr1[i] > arr[j] => push sortedArr.push(arr[j])

function merge(arr1, arr2){
    let i = 0
    let j = 0
    let sortedArr = []
    while(i< arr1.length || j < arr2.length ){
        
        if(arr1[i]< arr2[j]){
            sortedArr.push(arr1[i])
           
            i++
        }else if(arr1[i]> arr2[j]){
            sortedArr.push(arr2[j])
            
            j++
        }else if(arr1[i] == arr2[j]){
            sortedArr.push(arr1[i])
            i++
            sortedArr.push(arr2[j])
            j++
            
        } else if(i>= arr1.length){
            sortedArr = [...sortedArr, ...arr2.slice(j)]
            j = arr2.length
        } else{
            sortedArr = [...sortedArr, ...arr1.slice(i)]
            i = arr1.length
        }
    }
    return sortedArr
    }




    //split 
    function mergeSort(array){
        //base case
        if (array.length <= 1) return array
        let middle = Math.floor(array.length/2)
        let left = mergeSort(array.slice(0, middle))
        let right = mergeSort(array.slice(middle))


        return merge(left, right)
    }

   




    


     let sortNums = mergeSort(nums)
        for(let i = 0; i < sortNums.length; i++ ){
        if(sortNums[i] == target){
            indeces.push(i)
        }
    }
    return indeces
};



console.log(targetIndices([1,2,5,2,3,100], 2))