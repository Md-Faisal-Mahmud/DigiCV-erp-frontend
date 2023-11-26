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
  private username: string = "muhammad.installer@gmail.com";
  private password: string = "faisal123";

  constructor(private courseService: CourseService){ }


  onClick(){
    console.log("button clicked");
   }
   onClick2(){
    console.log("button clicked2");
   }

  update() {
    this.courseService.getToken(this.username, this.password).subscribe((token: string) => {
      this.courseService
        .getCourses(token)
        .subscribe((data: ICourse[]) => {
          this.courses = data;
        });
    });
  }
}