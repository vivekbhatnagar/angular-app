import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {
  username = 'my-name';
  displayContent = false;
  clicks = [];
  constructor() {
  }

  ngOnInit() {}

  isClickable() {
  return this.username.length ===0;
  }

  resetUserName() {
  this.username="";
  }

  onButtonClick() {
    this.clicks.push(this.clicks.length+1);
    this.displayContent= this.displayContent === false ? true : false ;
  }
}
