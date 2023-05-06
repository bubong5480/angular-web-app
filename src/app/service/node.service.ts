import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NodeService {
  data: BehaviorSubject<any>

  constructor(private http: HttpClient) {
    this.data = new BehaviorSubject<any>(null)
  }

  getData(query:any): any {
    return this.http.get('/api/ps4/promise/' + query).subscribe((response: any) => {
      this.data.next(response.data)
    })
  }


  getDataObservable(): Observable<any> {
    return this.data.asObservable()
  }
}
