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
      console.log("The " + element + " has been added to the stack");
    }
  }]);

  return Stack;
}();

module.exports = new Stack();