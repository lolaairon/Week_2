"use strict";
exports.__esModule = true;
exports.Library = void 0;
var reto4_1 = require("./reto4");
var Library = /** @class */ (function () {
    function Library(book, address, manager) {
        this.book = book;
        this.address = address;
        this.manager = manager;
    }
    Library.prototype.setAddrees = function (addrees) {
        this.address = addrees;
    };
    Library.prototype.getaAddrees = function () {
        return this.address;
    };
    Library.prototype.setManager = function (maneger) {
        this.manager = maneger;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    Library.prototype.toString = function () {
        var str = '';
        for (var i = 0; i < this.book.length; i++) {
            str += 'Book' + (i + 1) + "\n" + this.book[i].toString() + "\n";
            //str += 'Book '+ this.books[i].tostring()
        }
        return str;
    };
    Library.prototype.getNumberOfBooks = function () {
        return this.book.length;
    };
    Library.prototype.findByAuthor = function (author) {
        var count = [];
        for (var i = 0; i < this.book.length; i++) {
            if (author == this.book[i].getauthor()) {
                count.push(this.book[i]);
            }
        }
        return count;
    };
    return Library;
}());
exports.Library = Library;
var book6 = new reto4_1.Book('Teo se tira por un puente', 15, '15wad15', 'Tealia', 'Teeoli');
var book7 = new reto4_1.Book('Teo se tira por un 5', 18, '1ooad15', 'Tealissa', 'Teessoli');
var librosEsL = [book6, book7];
var libreria = new Library(librosEsL, 'Mostoles', 'Pepe');
/*
console.log(libreria.toString());
console.log(libreria.toString());
console.log(libreria.getNumberOfBooks());
console.log(libreria.getNumberOfBooks());
console.log(libreria.findByAuthor('Tealissa'));*/ 
