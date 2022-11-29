//radix sort sorting arr/ list of elements using buckets. 
//Time complexity: 
//    - WORST CASE: depends on the length of input arr an length of longest number n - input, k- length (if n=k then time complexity is O(n**2))
//    - best cas all numbers have the same length
//    - radix sort require to be rewritten when digits ar not > 0 or has decimal points
//    - space complexity: 
//  

//FIFO - first in the bucket first out of the bucket


const radixSort = (arr) => {
    //find the longest/greatest number
    // k = length of the longest element
    let maxNum = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > maxNum){
            maxNum= arr[i]}
    }
    console.log
    let sortedArr = []
    //declare k as a length of greatest num
    let k = maxNum.toString().length    
       
    //loop over arr k = 0 k++{
    for(let j = 0; j< k; j++){
        console.log(j)
       //create 10 buckets []
       let buckets = [[], [], [], [], [], [], [], [], [], []]
       //loop over numbers, take k element of the number(0- lats, 1- before lats....){r 
       for(let i = 0; i< arr.length; i++ ){
            //take digit on position k
           
            let digit = Math.floor((arr[i]/ Math.pow( 10, j)) % 10)
        
            console.log("digit", digit)
            //push number to linked bucket
            buckets[digit].push(arr[i])
       }
       console.log(buckets)
       //merge all buckets}
       arr = [].concat(...buckets)
    }



//return arr
return arr

}



console.log(radixSort([1, 2, 3, 4, 9,1 ,8, 23, 45, ]))


//                     WALK THROUGH EXAMPLE
// k = 2
            //k=0
// [22, 34, 21, 45, 60]

// 60  21  22      34   45
// [], [], [], [], [], [] ...
// 0   1   2    3  4   5  
// [60,21,22,34,45]
            //k=1
//     22
//     21      34   45     60
// [], [], [], [], [], [], [] ...
// 0   1   2    3  4   5   6


// [21, 22, 34, 45, 60] sorted!
