import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  buttons: any = [];
  exprs: string = '';

  constructor() { }

  ngOnInit() {
    this.buttons = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', 'X', '='];
  }
  
  onButtonClick(x: string) {
    if (x == 'X') {
      this.exprs = this.exprs.substr(0, this.exprs.length-1);
    } else if (x == '=') {
      this.exprs = eval(this.exprs).toString();
    }
     else {
      this.exprs = this.exprs + x;
    }
  }

}
