import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Services} from "../services";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent
{
  public  EnrolledPersonFname;
  public  EnrolledPersonLname;
  public  EnrolledPersonMail;
  public  CoursesData=[];
  public  jsondata;
  public StudentData;
  public person;
  public mail;
  public password;
  public EnrollmentObject={};
  public EnrollmentData=[];
  public temparr:Array<any> = [];
  flag=0;
  constructor(public router:Router,service:Services)
  {
    service.getjsondata()
      .subscribe(data => this.jsondata = data,
        error=>alert(error),
        ()=>console.log(this.jsondata)
      );
    let CoursesData=localStorage.getItem("Courses");

     this.CoursesData = JSON.parse(CoursesData);

    console.log(this.CoursesData)
    //this.CoursesData.push(service.getCourse());

    for (let v in this.CoursesData) // for acts as a foreach
    {
      for(let j=0;j<3;j++){
        if(this.CoursesData[v].timeSlot === "1Pm"){
          this.CoursesData[v].noOfStudents = this.CoursesData[v].time["1Pm"];
        }else if(this.CoursesData[v].timeSlot === "4Pm"){
          this.CoursesData[v].noOfStudents = this.CoursesData[v].time["4Pm"];
        }else if(this.CoursesData[v].timeSlot === "8Am"){
          this.CoursesData[v].noOfStudents = this.CoursesData[v].time["8Am"];
        }
      }
    }
    this.StudentData=service.getStudent();
  }

  loggingcheck()
  {
    if(this.person=="admin") {
      if (this.jsondata.email === this.mail && this.jsondata.password === this.password) {
        this.router.navigateByUrl('/admin');
        this.rest();
      }
      else {
        alert("Please check your Id & Password Admin");
      }
    }
    else if(this.person=="student")
    {
      let temp=0
      for(let i in this.StudentData)
      {

        if(this.mail===this.StudentData[i].studentmail&&this.password===this.StudentData[i].studentpassword)
        {
          temp=1;
        }
        if(temp==1)
        {

          this.EnrolledPersonFname=this.StudentData[i].firstname;
          this.EnrolledPersonLname=this.StudentData[i].lastname;
          this.EnrolledPersonMail=this.StudentData[i].studentmail;
          alert(this.EnrolledPersonMail)
          alert(this.EnrolledPersonFname+" " +this.EnrolledPersonLname+"Successfully Logged in");
          this.flag=1;
          break;
        }
      }
      if(temp==0)
      {

        alert("!!!!Sorry Please Check Your Login & Password");
      }
    }
    this.rest()

  }
  rest=()=>
  {
    this.mail="";
    this.password="";
  };
  Navigate()
  {
    this.router.navigateByUrl('/student');
  }
  enrollment(index,flaw)
  {
    if(flaw==1)
    {
      let val=this.checklogin(this.EnrollmentData,this.EnrolledPersonMail,this.CoursesData[index].coursename)

      if(val==false)
      {
        for(let i=0;i< this.CoursesData.length;i++)
        {
          if(index===i && this.CoursesData[i].noOfStudents >= 0)
          {
            this.EnrollmentObject=
              {

                "Student_fname":this.EnrolledPersonFname,
                "Student_lname":this.EnrolledPersonLname,
                "Student_mail":this.EnrolledPersonMail,
                "course_name": this.CoursesData[i].coursename,
                "description":this.CoursesData[i].description,
                "noOfDays": this.CoursesData[i].noOfDays,
                "duration": this.CoursesData[i].duration,
                "Coach": this.CoursesData[i].Coach,
                "fee": this.CoursesData[i].fee,
                "timeSlot":this.CoursesData[i].timeSlot,

              }
            let count = this.CoursesData[i].noOfStudents;
            count = count-1;

            this.CoursesData[i].noOfStudents = count;

          }

        }
        this.EnrollmentData.push(this.EnrollmentObject)
        console.log(this.EnrollmentData)
      }
      else
      {
        alert("you are Already Enrolled")
      }
    }
    else {
      alert("Please Login as a Student");
    }
  }
  checklogin(course_data,loged_person,course)
  {
    let flag1 =0;
    for(let i=0;i<course_data.length;i++)
    {
      if(course_data[i].Student_mail===loged_person && course_data[i].course_name===course )
      {
        flag1 = 1;
      }
    }
    if(flag1 === 1){
      return true;
    }else{
      return false
    }

  }
}
