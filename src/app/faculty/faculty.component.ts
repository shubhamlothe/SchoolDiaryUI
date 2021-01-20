import { Component, OnInit } from '@angular/core';
import { HttpClientServiceService, student } from '../http-client-service.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

  studentList: student[];

  constructor(private service: HttpClientServiceService) { }

  ngOnInit(): void {

  }


  getStudentList() {
    var id = "a";
    var cls;
    this.service.getClass(id).subscribe(res => {
      cls = res.teaching_class;
    })
    this.service.StudentList(cls).subscribe(res => {
      this.studentList = res;
    })

  }





}
