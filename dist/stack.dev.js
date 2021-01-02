"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Stack =
/*#__PURE__*/
function () {
  function Stack() {
    _classCallCheck(this, Stack);
  }

  _createClass(Stack, [{
    key: "create_stack",
    value: function create_stack() {
      var stack = [];
      return stack;
    }
  }, {
    key: "check_empty",
    value: function check_empty(stack) {
      return stack.length === 0;
    }
  }, {
    key: "stackPop",
    value: function stackPop(stack) {
      if (this.check_empty(stack) === true) {
        return 'This is an empty stack';
      }

      return stack.pop();
    }
  }, {
    key: "stackPush",
    value: function stackPush(stack, element) {
      stack.push(element);
    }
  }, {
    key: "stackPrint",
    value: function stackPrint(stack) {
      for (var element in stack) {
        console.log(stack[element]);
      }
    }
  }, {
    key: "stackReverse",
    value: function stackReverse(stack) {
      if (!this.check_empty(stack)) {
        var temp = this.stackPop(stack);
        this.stackReverse(stack);
        insertAtBottom(stack, temp);
      }
    }
  }, {
    key: "stackSort",
    value: function stackSort(stack) {
      if (!this.check_empty(stack)) {
        var temp = this.stackPop(stack);
        this.stackSort(stack);
        sortedInsert(stack, temp);
      }
    }
  }, {
    key: "stackSortTemp",
    value: function stackSortTemp(stack) {
      var tempStack = this.create_stack();

      while (!this.check_empty(stack)) {
        var temp = this.stackPop(stack);

        if (!this.check_empty(tempStack) && temp < tempStack[0]) {
          this.stackPush(stack, this.stackPop(tempStack));
        } else {
          this.stackPush(tempStack, temp);
        }
      }

      return tempStack;
    }
  }]);

  return Stack;
}(); //recursive function for sorting stack


function sortedInsert(stack, item) {
  if (new Stack().check_empty(stack) || item > stack[-1]) {
    new Stack().stackPush(stack, item);
  } else {
    var temp = new Stack().stackPop(stack);
    sortedInsert(stack, item);
    new Stack().stackPush(stack, temp);
  }
} //recursive function for reversing stack


function insertAtBottom(stack, item) {
  if (new Stack().check_empty(stack)) {
    new Stack().stackPush(stack, item);
  } else {
    var temp = new Stack().stackPop(stack);
    insertAtBottom(stack, item);
    new Stack().stackPush(stack, temp);
  }
}

module.exports = new Stack();