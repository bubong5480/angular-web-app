import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {FormModule} from "../form/form.module";
import {ResultModule} from "../result/result.module";



@NgModule({
  declarations: [
    MainComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    FormModule,
    ResultModule
  ]
})
export class MainModule { }
