class Stack{
    create_stack(){
        let stack = []
        return stack;
    }
    check_empty(stack){
        return (stack.length === 0);
    }
    stackPop(stack){
        if(this.check_empty(stack) === true){
            return 'This is an empty stack';
        }
        return stack.pop();
    }
    stackPush(stack, element){
        stack.push(element);
    }
    stackPrint(stack){
        for(let element in stack){
            console.log(stack[element]);
        }
    }
    stackReverse(stack){
        if(!this.check_empty(stack)){
            let temp = this.stackPop(stack);
            this.stackReverse(stack);
            insertAtBottom(stack, temp)
        }
    }
    stackSort(stack){
        if(!this.check_empty(stack)){
            let temp = this.stackPop(stack);
            this.stackSort(stack);
            sortedInsert(stack, temp);
        }
    }
    stackSortTemp(stack){
        let tempStack = this.create_stack();
        while(!this.check_empty(stack)){
            let temp = this.stackPop(stack);
            if(!this.check_empty(tempStack) &&  temp < tempStack[0]){
                this.stackPush(stack, this.stackPop(tempStack));
            }else{
                this.stackPush(tempStack, temp);
            }
        }
        return tempStack;
    }
}

//recursive function for sorting stack
function sortedInsert(stack, item){
    if(new Stack().check_empty(stack) || item > stack[-1]){
        new Stack().stackPush(stack, item);
    }else{
        let temp = new Stack().stackPop(stack);
        sortedInsert(stack, item);
        new Stack().stackPush(stack, temp);
    }
}
//recursive function for reversing stack
function insertAtBottom(stack, item){
    if(new Stack().check_empty(stack)){
        new Stack().stackPush(stack, item);
    }
    else{
        let temp = new Stack().stackPop(stack);
        insertAtBottom(stack, item)
        new Stack().stackPush(stack, temp)
    }
}

module.exports = new Stack;
