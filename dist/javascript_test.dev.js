"use strict";

var Stack = require('./stack');

var stack1 = Stack.create_stack();
Stack.stackPush(stack1, 1);
Stack.stackPush(stack1, 8);
Stack.stackPush(stack1, 7);
Stack.stackPush(stack1, 10);
Stack.stackPush(stack1, 15);
console.log(Stack.check_empty(stack1));
Stack.stackPrint(Stack.stackSortTemp(stack1));