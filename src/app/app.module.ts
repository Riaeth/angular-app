import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SearchModule } from './search/search.module';
import { ListaOwnersComponent } from './owner/lista-owners/lista-owners.component';
import {  HttpClientModule } from '@angular/common/http';
import { OwnerComponent } from './owner/owner/owner.component';
import { DetailedOwnerComponent } from './owner/detailed-owner/detailed-owner.component';
import { FormOwnerComponent } from './components/form-owner/form-owner.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaOwnersComponent,
    OwnerComponent,
    DetailedOwnerComponent,
    FormOwnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SearchModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
