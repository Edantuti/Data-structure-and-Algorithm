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
        console.log("The " + element + " has been added to the stack");
    }
}

module.exports = new Stack;
