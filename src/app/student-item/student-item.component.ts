import { Component, OnInit } from '@angular/core';
import {IStudent} from '../StudentInterface';
import {StudentService} from '../student.service';
@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css']
})
export class StudentItemComponent implements OnInit {
student:IStudent[];
val
constructor(private sos:StudentService) {
this.student = sos.getStudentList();

    
   }
onClickMe(i){
this.sos.deleteStudnet(this.student[i].id);


}
  ngOnInit() {
  }

}
