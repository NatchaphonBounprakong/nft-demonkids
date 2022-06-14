import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demon-kids',
  templateUrl: './demon-kids.component.html',
  styleUrls: ['./demon-kids.component.scss']
})
export class DemonKidsComponent implements OnInit {

  showMenu = false;
  constructor() { }

  ngOnInit(): void {
  }

  openMenu() {
    this.showMenu = !this.showMenu;
  }
  clickOut() {
    this.showMenu = false;
  }

}
