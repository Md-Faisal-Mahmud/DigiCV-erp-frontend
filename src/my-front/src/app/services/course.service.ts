import { Injectable } from '@angular/core';
import { ICourse } from '../data/ICourse'
import { Course } from '../data/Course';
import { count } from 'console';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourses() : ICourse[]{
    return [
      new Course({ name : "C#", fees : 8000 }),
      new Course({ name : "Asp.net", fees : 30000 }),
      new Course({name : "laravel", fees: 12000})
    ];
    }  
}
