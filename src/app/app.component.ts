import { Component, inject, Renderer2 } from '@angular/core';
import { IconComponent, RadioButtonComponent, CheckboxComponent } from 'Components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IconComponent, RadioButtonComponent, CheckboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected buttonLabel!: string;
  private renderer = inject(Renderer2);


  ngOnInit() {
    this.renderer.addClass(document.body, 'light-theme');
    this.buttonLabel = 'Dark Theme';
  }


  
  
  protected onClick(): void {
    if (this.buttonLabel === 'Dark Theme') {
      this.buttonLabel = 'Light Theme';
      this.renderer.addClass(document.body, 'dark-theme');
      this.renderer.removeClass(document.body, 'light-theme');
    } else {
      this.buttonLabel = 'Dark Theme';
      this.renderer.addClass(document.body, 'light-theme');
      this.renderer.removeClass(document.body, 'dark-theme');
    }
  }
}