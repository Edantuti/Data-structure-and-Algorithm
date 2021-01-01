"use strict";

var linked = require('./linkedlist');

linked.head = linked.Node(4);
var second = linked.Node(5);
var third = linked.Node(6);
var forth = linked.Node(7);
linked.head.next = second;
second.next = third;
third.next = forth;
var lenNode = linked.listLength();
console.log(lenNode);