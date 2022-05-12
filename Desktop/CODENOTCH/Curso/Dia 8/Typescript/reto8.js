"use strict";
exports.__esModule = true;
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(n, k) {
        this.elements = vectoreS(n, k);
        function vectoreS(n, k) {
            var count = [];
            for (var i = 0; i < n; i++) {
                count[i] = Math.round(Math.random() * k);
                // count.push(count[i])
            }
            return count;
        }
    }
    Vector.prototype.getprint = function () {
        console.log(this.elements);
    };
    Vector.prototype.add = function (v1) {
        // let result1= new Vector(v1.elements.length,0);
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i] = this.elements[i] + v1.elements[i];
            // console.log(Vector[i])
        }
        return this;
    };
    Vector.prototype.subs = function (v1) {
        // let result1= new Vector(v1.elements.length,0);
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i] = this.elements[i] - v1.elements[i];
            // console.log(Vector[i])
        }
        return this;
    };
    Vector.prototype.mult = function (v1) {
        // let result1= new Vector(v1.elements.length,0);
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i] = this.elements[i] * v1.elements[i];
            // console.log(Vector[i])
        }
        return this;
    };
    Vector.prototype.multNumer = function (n) {
        // let result1= new Vector(v1.elements.length,0);
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i] = this.elements[i] * n;
            // console.log(Vector[i])
        }
        return this;
    };
    return Vector;
}());
exports.Vector = Vector;
var vector1 = new Vector(5, 20);
var v1 = new Vector(5, 20);
var v2 = new Vector(9, 100);
v1.getprint();
vector1.getprint();
console.log(vector1.add(v1));
console.log(vector1.subs(v1));
console.log(vector1.mult(v1));
console.log(vector1.multNumer(2));
