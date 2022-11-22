import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Tutorial } from '../model/Tutorial';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private http: HttpClient
  ) { }
  
  
  loadCourses(){
    console.log('inhereee')
    // let headers = new HttpHeaders();
    // headers.append('content-type', 'application/json');
    // headers.append('accept', 'application/json');
     return this.http.get<Tutorial[]>('http://localhost:9090/tutorials');
 }
}
