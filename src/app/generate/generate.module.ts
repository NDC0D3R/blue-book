import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateComponent } from './generate.component';



@NgModule({
  declarations: [GenerateComponent],
  imports: [
    CommonModule
  ],
  exports: [GenerateComponent]
})
export class GenerateModule { }
