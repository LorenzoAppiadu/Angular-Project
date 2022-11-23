import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  activate = false
  i = 1
  mad = []

  displayDetails(){
    this.activate = !this.activate
  }
  marker(){
    this.mad.push(this.mad.length + 1)
    // this.i += 1
  }
}
