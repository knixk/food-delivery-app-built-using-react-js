





/*
can u implement a class of linkedlist in  JS????
*/


class Node {
    constructor(data = null, next = null) {
        this.data = data;
        this.next = next;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = this.head;
        this.size = 0;   
    }
}