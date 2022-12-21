// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

// For each index i, names[i] and heights[i] denote the name and height of the ith person.

// Return names sorted in descending order by the people's heights


//radix sort

var sortPeople = function(names, heights) {

    //buble sort
    let k = 0 //2
    while(k< heights.length){
        for(let i = k ; i>0 ; i--){
            if(heights[i]> heights[i-1]){
                let temp = heights[i]
                heights[i] = heights[i-1]
                heights[i-1] = temp
                temp = names[i]
                names[i] = names[i-1]
                names[i-1] = temp
            }
        }

        k++
    }
    
    return names
};





console.log(sortPeople(["IEO","Sgizfdfrims","QTASHKQ","Vk","RPJOFYZUBFSIYp","EPCFFt","VOYGWWNCf","WSpmqvb"], [17233,32521,14087,42738,46669,65662,43204,8224]))



["A", "C", "E", "D"]
[123, 546, 7657, 56756]

//Doesn't work radix sort, quck sort, I can use bubble or selection sort 