var maxOperations = function(nums, k) {
    let obj={}
    let count = 0
    for(let i =0; i< nums.length; i++){
        if(obj[nums[i]]){
            obj[nums[i]] = obj[nums[i]]+1
        }else{
            obj[nums[i]]= 1
        }
    }
    console.log(obj)
    for(let i in obj){
        
        if(i!= k-1 && k-i>=0 && obj[i] && obj[k-i]){
            
            count++
            obj[i] = obj[i]-1
            obj[k-i] = obj[k-i]-1
        }else if(k-i == i){ 
            if(obj[i]>=2){
                
                count = count+Math.floor(obj[i]/2)
                obj[i] = obj[i]-Math.floor(obj[i]/2)
            }
        }
    }



    return count
};

console.log(maxOperations([2,5,4,4,1,3,4,4,1,4,4,1,2,1,2,2,3,2,4,2], 3))