import {Component} from '@angular/core';

@Component({
    selector: 'my-book',
    templateUrl: './app/book.component.html',
    styleUrls: ['./assets/stylesheets/book.css']
})

export class BookComponent{
    name="안드로이드 게임 프로그래밍"

    setStyles(){
        return {
            'font-style': 'normal',
            'font-size': '10px'
        }
    }
}