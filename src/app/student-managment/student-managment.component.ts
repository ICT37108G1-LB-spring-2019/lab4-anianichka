import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service'
@Component({
  selector: 'app-student-managment',
  templateUrl: './student-managment.component.html',
  styleUrls: ['./student-managment.component.css']
})
export class StudentManagmentComponent implements OnInit {
  student = {};
constructor(private sos:StudentService ) { 

}
onSubmit(f){
this.sos.addStudent(f);
console.log(this.sos);
console.log(this.student);
console.log(f);
}
  ngOnInit() {

  }

}
