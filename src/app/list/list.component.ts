import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public brews: object;

  constructor(private http: HttpService) { }

  public ngOnInit(): void {
    this.http.getBeer().subscribe(data => {
      this.brews = data;
      console.log(this.brews);
    });
  }
}
