import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Services} from "../services";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent
{

  public coursename:string;  //Properties of Admin
  public duration:string;
  public noOfDays:number;
  public fee:number;
  public timeSlot:string;
  public noOfStudents:number;
  public coach:string;
  public availableSlots:number;
  public courseDescription: string;
  public TableData;
  public CoursesArray=[];
  constructor(private router: Router,private service:Services)//Constructor for Creating instances
  { }
  CreateCourse()  //Method for Creating the Course
  {
    let ObjectforCourse=
      {
        "coursename": this.coursename,
        "description":this.courseDescription,
        "noOfDays": this.noOfDays,
        "duration": this.duration,
        "Coach": this.coach,
        "fee": this.fee,
        "timeSlot": this.timeSlot,
        "noOfStudents": this.noOfStudents,
        "availableSlots": this.availableSlots,
        "time": {"8Am":this.noOfStudents,"1Pm":this.noOfStudents, "4Pm":this.noOfStudents}
      }
    this.CoursesArray.push(ObjectforCourse)
    localStorage.setItem("Courses", JSON.stringify(this.CoursesArray));
    this.service.setCourse(this.CoursesArray);

    (<HTMLInputElement>document.getElementById("btnExcel")).disabled=false;
    this.ClearInputFileds();
  }
  ClearInputFileds() //Method for Clearing the Screen
  {
    this.coursename="";
    this.courseDescription="";
    this.noOfDays=null;
    this.duration="";
    this.coach="";
    this.fee=null;
    this.timeSlot="";
    this.noOfStudents=0;
    this.availableSlots=0;

  }
  Navigate() //Method for Navigating to Home Page
  {
    this.router.navigateByUrl('/home')
  }
}
