import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSearchComponent } from './form-search/form-search.component';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'


@NgModule({
  declarations: [FormSearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    FormSearchComponent
  ]
})
export class SearchModule { }
