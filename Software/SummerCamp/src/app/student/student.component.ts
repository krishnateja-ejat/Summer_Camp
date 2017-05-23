import { Component} from '@angular/core';
import { Router } from '@angular/router';
import {Services} from "../services";
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent  {

  constructor(private router: Router,public service:Services)
  { }
  public firstname:string;
  public lastname:string;
  public studentmail:string;
  public studentpassword:string;
  public StudentArray=[]
  addstudent()
  {
    let ObjectForStudent=
      {
        "firstname":this.firstname,
        "lastname":this.lastname,
        "studentmail":this.studentmail,
        "studentpassword":this.studentpassword
      }
    alert(this.firstname+" "+this.lastname+"You are Successfully Registered please Enroll");
    this.firstname="";
    this.lastname="";
    this.studentmail="";
    this.studentpassword="";
    this.StudentArray.push(ObjectForStudent)
    this.service.SetStudent(this.StudentArray)

  }
  Navigate()
  {
    this.router.navigateByUrl('/home');
  }
}
