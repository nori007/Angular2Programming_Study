import { Component } from '@angular/core';

@Component({
    selector: 'my-book',
    templateUrl: './app/book.component.html',
    styleUrls: ['./assets/stylesheets/book.css']
})

export class BookComponent {
    constructor() {
        for(var book of this.books){
            this.booksResult.push(book);
        }
    }

    searchName($event) {
        var searchName = $event.target.value;
        this.booksResult = [];
        if(searchName == "") {
            for(var book of this.books) {
                this.booksResult.push(book);
            }
        }else {
            for(var book of this.books) {
                if(book.name.indexOf(searchName) != -1) {
                    this.booksResult.push(book);
                }
            }
        }
    }

    booksResult = [];
    books = [
        {id: '001', name: 'image001', price: 11111, data:'2017111', img: 'img001.jpg'},
        {id: '002', name: 'image002', price: 22222, data:'2017222', img: 'img002.jpg'},
        {id: '003', name: 'image003', price: 33333, data:'2017333', img: 'img003.jpg'},
        {id: '004', name: 'image004', price: 44444, data:'2017444', img: 'img004.jpg'},
    ]
}