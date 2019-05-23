import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TestService } from './test/test.service';
import { SearchModule } from './search/search.module';
import { ListaOwnersComponent } from './owner/lista-owners/lista-owners.component';
import {  HttpClientModule } from '@angular/common/http';
import { OwnerComponent } from './owner/owner/owner.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaOwnersComponent,
    OwnerComponent
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
