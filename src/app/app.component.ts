import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ps6';
  data:any = [];
  constructor(private http: HttpClient){}
  ngOnInit() {
    this.http.get('/assets/mockdata.json').subscribe((response:any)=> {
      this.data = response.data
      console.log(this.data)
      console.log(response)
    })
  }
}
