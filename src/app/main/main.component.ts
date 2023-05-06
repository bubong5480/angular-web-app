import {Component, OnInit} from '@angular/core';
import {NodeService} from "../service/node.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  data: any[] = []

  constructor(private nodeService:NodeService) {
  }

  ngOnInit() {
    this.suscribeToData()
  }

  suscribeToData() {
    this.nodeService.getDataObservable().subscribe(response => {
      this.data = response
      console.log(this.data)
    })
  }
}
