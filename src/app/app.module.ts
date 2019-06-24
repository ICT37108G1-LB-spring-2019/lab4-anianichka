import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentManagmentComponent } from './student-managment/student-managment.component';
import { StudentItemComponent } from './student-item/student-item.component';
import { StudentListComponent } from './student-list/student-list.component';
import {StudentService} from './student.service'
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    StudentManagmentComponent,
    StudentItemComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
