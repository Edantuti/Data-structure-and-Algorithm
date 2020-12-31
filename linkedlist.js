class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }
    add(data){
        let nNode = new Node(data);
        nNode.next = this.head;
        this.head = nNode;
    }
    addKey(data, key){
        let nNode = new Node(data);
        let h = this.head;
        if(this.head === null){
            console.log('Empty');
        }
        while(h != null){
            if(h.data === key){
                nNode.next = h.next;
                h.next = nNode;
            }
            h = h.next;
        }
    }
    remove(){
        let nextNode = this.head.next;
        this.head = null;
        this.head = nextNode;
    }
    removeKey(data){
        let nextNode = null;
        let h = this.head;
        while(h != null){
            if(h.data === data){
                nextNode = h.next.next;
                h.next = null;
                h.next = nextNode;
            }
            h = h.next;
        }
    }
    printList(){
        let h = this.head;
        while(h !== null){
            console.log(h.data)
            h = h.next;
        }
    }
}

module.exports = new LinkedList()
module.exports.Node = function createNode(data) {
    return new Node(data);
}