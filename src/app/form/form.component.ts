import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {NodeService} from "../service/node.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  textInput = new FormControl('')

  constructor(private nodeService:NodeService) {
  }

  queryData() {
    this.nodeService.getData(this.textInput.value)
  }
}
