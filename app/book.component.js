"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BookComponent = (function () {
    function BookComponent() {
        this.booksResult = [];
        this.books = [
            { id: '001', name: 'image001', price: 11111, data: '2017111', img: 'img001.jpg' },
            { id: '002', name: 'image002', price: 22222, data: '2017222', img: 'img002.jpg' },
            { id: '003', name: 'image003', price: 33333, data: '2017333', img: 'img003.jpg' },
            { id: '004', name: 'image004', price: 44444, data: '2017444', img: 'img004.jpg' },
        ];
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var book = _a[_i];
            this.booksResult.push(book);
        }
    }
    BookComponent.prototype.searchName = function ($event) {
        var searchName = $event.target.value;
        this.booksResult = [];
        if (searchName == "") {
            for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
                var book = _a[_i];
                this.booksResult.push(book);
            }
        }
        else {
            for (var _b = 0, _c = this.books; _b < _c.length; _b++) {
                var book = _c[_b];
                if (book.name.indexOf(searchName) != -1) {
                    this.booksResult.push(book);
                }
            }
        }
    };
    BookComponent = __decorate([
        core_1.Component({
            selector: 'my-book',
            templateUrl: './app/book.component.html',
            styleUrls: ['./assets/stylesheets/book.css']
        }),
        __metadata("design:paramtypes", [])
    ], BookComponent);
    return BookComponent;
}());
exports.BookComponent = BookComponent;
//# sourceMappingURL=book.component.js.map