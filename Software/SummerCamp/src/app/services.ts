import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
@Injectable()
export class Services {
  public Courses=[];
  public Student=[];
  constructor (private _http:Http){}
    getjsondata()                      //Method for getting the Data from Json File
    {
      return this._http.get('assets/admin-credentials.json')
        .map(res=>res.json());
    }
    setCourse(Courses)                 //Method for Set The Course getting from admin.component
    {
      this.Courses=Courses;
    }
    getCourse():any                    //Method for get the Course Data
    {
      return this.Courses

    }
    SetStudent(Student)               //Method for Set The Student getting from student.component
    {
      this.Student=Student;
    }
    getStudent()                       //Method for get the Student Data
    {
      return this.Student
    }

}
