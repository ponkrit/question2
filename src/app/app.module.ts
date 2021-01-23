import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CategoryService} from "./services/category.service";
import { CategoryComponent } from './category/category.component';
import {FilterPipe} from "./directives/filter.pipe";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
