

function selectionSort(arr) {
  let element = 0
    while(element < arr.length){
        
        let minEl = element
        for(let i=element+1; i< arr.length; i++){
            if(arr[minEl] > arr[i]){
                minEl = i
            }
        }
        if(minEl != element){
            let temp = arr[element]
            arr[element] = arr[minEl]
            arr[minEl] = temp
        }
        element++
    }
return arr
}







console.log(selectionSort([10, 2, 3, 4,4, 233, 128, 9,1 ,8, 23, 45]))


// Pseudocode:
// -find the lowest element in arr
// -swap this element at the begining of arr 
// -repeat the same activities until last element will be the greatest number
