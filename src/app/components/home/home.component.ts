import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedTitle = ''

  changeTitle(title: string) {
    this.selectedTitle = title
  }
  constructor() { }

  ngOnInit(): void {
  }

}
