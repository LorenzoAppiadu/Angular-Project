import { Component } from '@angular/core';


//You can use either template or template url for the html templates
// depending on the length of your code
@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false
  display = false
  nameOfReader = ''
  message = "This is an interesting day"
  friends =['Lorenzo', 'David']

  constructor(){
    
    setTimeout( ()=>{
      this.allowNewServer = true
    },3000)
  }

  onRequest(){
    this.message = "Hi" + this.nameOfReader 
    this.display = true
    this.friends.push(this.nameOfReader)
}
  readerName(event: any){
    this.nameOfReader = (<HTMLInputElement>event.target).value
    
  }
}
