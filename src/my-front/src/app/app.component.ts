import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { CourseComponent } from './components/course/course.component';
import { ICourse } from './data/ICourse';
import { CourseService } from './services/course.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ButtonComponent, CourseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-front';
  courses: ICourse[] = [];

  constructor(private courseService: CourseService){ }

  update(){
	this.courses = this.courseService.getCourses();
  }

  onClick(){
    console.log("button clicked");
   }
   onClick2(){
    console.log("button clicked2");
   }
  
}
