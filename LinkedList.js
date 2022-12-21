//class for each node
//piece of data
//ref to net node

//create node
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


//create Linked list
class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    traverse(){
        let current = this.head
        while(current){
            current = current.next
        }
    }
}

let newList =  new SinglyLinkedList
newList.push("aga")
newList.push("kr")
console.log(newList)
