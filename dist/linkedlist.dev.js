"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(data) {
  _classCallCheck(this, Node);

  this.data = data;
  this.next = null;
};

var LinkedList =
/*#__PURE__*/
function () {
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    this.head = null;
  }

  _createClass(LinkedList, [{
    key: "add",
    value: function add(data) {
      var nNode = new Node(data);
      nNode.next = this.head;
      this.head = nNode;
    }
  }, {
    key: "addKey",
    value: function addKey(data, key) {
      var nNode = new Node(data);
      var h = this.head;

      if (this.head === null) {
        console.log('Empty');
      }

      while (h != null) {
        if (h.data === key) {
          nNode.next = h.next;
          h.next = nNode;
        }

        h = h.next;
      }
    }
  }, {
    key: "remove",
    value: function remove() {
      var nextNode = this.head.next;
      this.head = null;
      this.head = nextNode;
    }
  }, {
    key: "removeKey",
    value: function removeKey(data) {
      var nextNode = null;
      var h = this.head;

      while (h != null) {
        if (h.data === data) {
          nextNode = h.next.next;
          h.next = null;
          h.next = nextNode;
        }

        h = h.next;
      }
    }
  }, {
    key: "printList",
    value: function printList() {
      var h = this.head;

      while (h !== null) {
        console.log(h.data);
        h = h.next;
      }
    }
  }]);

  return LinkedList;
}();

module.exports = new LinkedList();

module.exports.Node = function createNode(data) {
  return new Node(data);
};