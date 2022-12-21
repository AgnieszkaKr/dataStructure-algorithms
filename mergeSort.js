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


function mergeSort(array){
    //base case
    if (array.length <= 1) return array
    let middle = Math.floor(array.length/2)
    let left = mergeSort(array.slice(0, middle))
    let right = mergeSort(array.slice(middle))


    return merge(left, right)
    //find the middle of arr
    //dievide arr into left and right side
    //call mergeSort: 
        // base case
        //recursive call

    //return call merge on left and right side

}

console.log(mergeSort([100, 100]))