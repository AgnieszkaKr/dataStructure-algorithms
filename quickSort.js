// Time complexity best case: O(n log n), worst O (n^2)
//Space O(n)

// const quickSort =(array)=>{
// //base case
// //arr.length === 1 => return arr
// if(array.length === 1){
//     return array
// }
// //  assign last element as a comparison element
// const pivotElement = array[array.length - 1]
// //create two arr left and right
// let arrLeft = []
// let arrRight = []
// //loop over arr and check if element is smaller or greater than comparison element
// for(let i = 0; i< array.length-1; i++){
//     if(array[i] < pivotElement){
//         arrLeft.push(array[i])
//     }else{
//         arrRight.push(array[i])
//     }
// }
// //outside of the loop:
// if(arrLeft.length >0 && arrRight.length > 0){
//     return [...quickSort(arrLeft), pivotElement, ...quickSort(arrRight)]
// } else if( arrLeft.length>0){
//     return [...quickSort(arrLeft), pivotElement]
// }else{
//     return [pivotElement, ...quickSort(arrRight)]
// }
// /* if arrLeft and arrRight are not empty then  return [... quickSort(left), middle, ...quickSort(right)]
// if right is empty 
// return [...left, middle]
// else return [... quickSort(left), middle
// */

// }
// const arr = [1, 3, 5, 9, 11, 23, 42, 11, 22, 97, 67, 34, 1, 333, 21, 39, 89, 45, 43, 22, 45]

// // console.log("quickSort")
// console.log(quickSort(arr))



function quickSortAl(arr){
//base case
if(arr.length == 1){
    return arr
}

//recursive function
let pivot = arr[arr.length-1]
let arrLeft = []
let arrRight = []

for(let i =0; i < arr.length -1; i++){
    if(arr[i] < pivot){
        arrLeft.push(arr[i])
    }else{
        arrRight.push(arr[i])
    }

if(arrLeft.length > 0 && arrRight.length > 0){
    return [...quickSortAl(arrLeft), pivot, ...quickSortAl(arrRight) ]
}else if(arrLeft.length > 0 ){
    return [...quickSortAl(arrLeft), pivot]
} else{
    return [pivot, ...quickSortAl(arrRight) ]
}

}


const arr = [1, 2, 3, 4, 9,1 ,8, 23, 45, 11, 98, 45, 233, 45, 22, 43]

}

console.log(quickSortAl(arr))



