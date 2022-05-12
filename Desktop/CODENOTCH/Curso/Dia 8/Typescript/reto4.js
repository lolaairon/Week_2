"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    //constructor(private title:string,private nPages: number,private isbn: string,private author:string,private editorial: string)
    Book.prototype.setTitle = function (title) {
        this.title = title;
    };
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.setnPages = function (title) {
        this.nPages = this.nPages;
    };
    Book.prototype.getnPages = function () {
        return this.nPages;
    };
    Book.prototype.setisbn = function (title) {
        this.isbn = this.isbn;
    };
    Book.prototype.getisbn = function () {
        return this.isbn;
    };
    Book.prototype.setauthor = function (title) {
        this.author = this.author;
    };
    Book.prototype.getauthor = function () {
        return this.author;
    };
    Book.prototype.seteditorial = function (title) {
        this.editorial = this.editorial;
    };
    Book.prototype.geteditorial = function () {
        return this.editorial;
    };
    Book.prototype.toString = function () {
        return ('Título ' + this.title + "\n" + 'Numero de páginas ' + this.nPages + "\n" + 'isbn ' + this.isbn + "\n" + 'Autor: ' + this.author + "\n" + ' Editorial ' + this.editorial);
    };
    return Book;
}());
exports.Book = Book;
var book1 = new Book('Introduccion a Javascript', 232, '2344433-BC23333', 'Joseph Smith', 'Now Editions');
//console.log(book1.toString());
