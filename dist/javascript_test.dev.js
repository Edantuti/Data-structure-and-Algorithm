"use strict";

var linked = require('./linkedlist.dev');

linked.head = linked.Node(4);
var second = linked.Node(5);
var third = linked.Node(6);
var forth = linked.Node(7);
linked.head.next = second;
second.next = third;
third.next = forth;
linked.removeKey(4);
linked.printList();