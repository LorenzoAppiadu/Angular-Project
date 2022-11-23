import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() addServer = new EventEmitter<{serverName:string, serverContent:string}>()
  @Output('addBP') addBlueprint = new EventEmitter<{serverName:string, serverContent:string}>()
  constructor() { }

  ngOnInit(): void {
  }
  newServerName = '';
  newServerContent = '';

  onAddServer() {
   this.addServer.emit(
    {  serverName:this.newServerName,
       serverContent:this.newServerContent})
  }

  onAddBlueprint() {
    this.addBlueprint.emit(
      {  serverName:this.newServerName,
         serverContent:this.newServerContent
        })
  }

}
