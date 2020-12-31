let linked = require('./linkedlist')

linked.head = linked.Node(4);
let second = linked.Node(5);
let third = linked.Node(6);
let forth = linked.Node(7);

linked.head.next = second;
second.next = third;
third.next = forth;

linked.removeKey(4)

linked.printList();

