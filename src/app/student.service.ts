import { Injectable } from '@angular/core';
import { IStudent } from './StudentInterface'
@Injectable({
  providedIn: 'root'
})
export class StudentService {

constructor() { }
 student: IStudent[] = [
    {

      name: 'Zura',
      lastName: 'MgalobliShvili',
      id: 350505050
 
    },
    {
      name: 'Lasha',
      lastName: 'ZurasBichi',
      id: 4949494949
    }];
  getStudentList(): IStudent[] {
    return this.student;
  }
addStudent(students: IStudent){
this.student.push(students);
console.log(this.student);

  }
  deleteStudnet(studen) {
for(let i = 0; i<this.student.length;i++){
if(studen === this.student[i].id){
  this.student.splice(i, 1);
}

}


}
  updateStudent(student: IStudent) {



  }


}
