import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    styles:[`
    .online{
        background-color: black;
    }
    `],
    templateUrl: './server.component.html'
})

export class ServerComponent {
    name = "Lorenzo Sarkodie";

    getIntro() {
        return "History of " + this.name
    }

    checker() {
        return Math.random() < 0.5 ? 'blue': 'red'
    }
    status(){
        return  Math.random() < 0.5 ? true: false
    }

}