import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  screen:boolean = true;
  @Input() title:string = "Home";

  constructor() { }

  ngOnInit() {
  }

}
