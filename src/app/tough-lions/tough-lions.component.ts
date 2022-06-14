import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tough-lions',
  templateUrl: './tough-lions.component.html',
  styleUrls: ['./tough-lions.component.scss']
})
export class ToughLionsComponent implements OnInit {

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
