class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.first = null
        this.last  = null
        this.size = 0
    }

    push(val){
        let node = new Node(val)
        if(!this.first){
            this.first = node
            this.last = node
        } else {
            let temp = this.first
            this.first = node
            this.first.next = temp
        }
        return ++this.size
    }

    pop(){
        let temp = this.first
        if(!this.first) return null
        if(this.firt === this.last){
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return temp.value
    }
}

let newStack = new Stack()

console.log(newStack)
newStack.push("hello")
newStack.push("aga")
console.log(newStack)
newStack.pop()
console.log(newStack)