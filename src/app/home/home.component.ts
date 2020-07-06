import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public clickCounter = 0;
  public name = '';

  public constructor() { }

  public ngOnInit(): void {
  }

  public countClick(): void {
    this.clickCounter += 1;
  }

  public setClasses(): object {
    const myClasses = {
      active: this.clickCounter > 4,
      notactive: this.clickCounter <= 4,
    };

    return myClasses;
  }
}
