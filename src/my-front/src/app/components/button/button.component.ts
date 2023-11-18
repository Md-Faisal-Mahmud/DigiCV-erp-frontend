import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent implements OnInit {
  @Input() color:string ="";
  @Input() text:string ="";
  @Input() cssClass:string ="";
  @Output() mybtnClick = new EventEmitter();

  constructor(){}
  ngOnInit(): void {
    
  }

  onClick(){
    this.mybtnClick.emit();
    }
  

}
