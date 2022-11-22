import { Component, OnInit } from '@angular/core';
import "../../model/Tutorial";
import { Tutorial } from '../../model/Tutorial';
import { CourseService } from 'src/app/services/course.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public courses: Tutorial[] = [];
  public loaded:boolean = false;


  constructor(private _coursesService: CourseService) { }

  ngOnInit(): void {
    this.loadCourses();
  }
  public loadCourses() {
    this._coursesService.loadCourses().subscribe((data) => {
      this.courses = data;
      this.loaded =true;
    });}
}
