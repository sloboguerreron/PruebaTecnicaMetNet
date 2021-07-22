import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * Angular Material
 */

 import {MatGridListModule} from '@angular/material/grid-list';
 import {MatCardModule} from '@angular/material/card';
 import {MatFormFieldModule} from '@angular/material/form-field';
 import {MatSelectModule} from '@angular/material/select';
 import {MatIconModule} from '@angular/material/icon';
 import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
