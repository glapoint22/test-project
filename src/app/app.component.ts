import { Component } from '@angular/core';
import { IconComponent, RadioButtonComponent, CheckboxComponent } from 'Components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IconComponent, RadioButtonComponent, CheckboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
