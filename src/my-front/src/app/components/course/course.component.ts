import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICourse } from '../../data/ICourse';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  @Input() courses : ICourse[] = [];
}
