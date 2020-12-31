"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Quene =
/*#__PURE__*/
function () {
  function Quene() {
    _classCallCheck(this, Quene);

    this.quene = [];
  }

  _createClass(Quene, [{
    key: "checkEmpty",
    value: function checkEmpty() {
      return this.quene.length === 0;
    }
  }, {
    key: "Enquene",
    value: function Enquene(element) {
      this.quene.push(element);
    }
  }, {
    key: "Dequene",
    value: function Dequene() {
      if (this.checkEmpty() === true) {
        console.log('The element are empty.');
      }

      return this.quene.shift();
    }
  }, {
    key: "display",
    value: function display() {
      console.log(this.quene);
    }
  }, {
    key: "length",
    value: function length() {
      console.log(this.quene.length);
    }
  }]);

  return Quene;
}();

module.exports = new Quene();