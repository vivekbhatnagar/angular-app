import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {
  username = 'my-name';
  constructor() {
  }

  ngOnInit() {}

  isClickable() {
  return this.username.length ===0;
  }

  resetUserName() {
  this.username="";
  }
}
