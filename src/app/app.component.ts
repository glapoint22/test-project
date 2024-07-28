import { Component, inject, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IconComponent,
  RadioButtonComponent,
  CheckboxComponent,
  RadioGroupComponent,
  TextButtonDirective,
  RaisedButtonDirective,
  StrokedButtonDirective,
  FlatButtonDirective,
  IconButtonDirective,
  DividerComponent
} from 'ngx-toolkit';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    IconComponent,
    RadioGroupComponent,
    RadioButtonComponent,
    CheckboxComponent,
    FormsModule,
    TextButtonDirective,
    RaisedButtonDirective,
    StrokedButtonDirective,
    FlatButtonDirective,
    IconButtonDirective,
    DividerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected buttonLabel!: string;
  private renderer = inject(Renderer2);
  favoriteSeason: string = 'Summer';
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  checked = true;


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