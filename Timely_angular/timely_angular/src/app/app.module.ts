import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelyComponent } from './components/timely/timely.component';
import { TableComponent } from './components/table/table.component';

import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DialogComponent } from './components/dialog/dialog.component';


import{HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TimelyComponent,
    TableComponent,
    DialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
