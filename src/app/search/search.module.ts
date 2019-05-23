import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSearchComponent } from './form-search/form-search.component';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatFormFieldModule, MatInputModule} from '@angular/material';


@NgModule({
  declarations: [FormSearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    FormSearchComponent
  ]
})
export class SearchModule { }
