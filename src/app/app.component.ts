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
  DividerComponent,
  FormFieldComponent,
  FormFieldLabelComponent,
  FormFieldHintComponent,
  InputFieldDirective,
  DropdownComponent,
  DropdownItemComponent,
  DatePickerDirective,
  SuffixDirective,
  MenuComponent,
  MenuItemDirective,
  MenuBarComponent,
  MenuTriggerDirective
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
    DividerComponent,
    FormFieldComponent,
    FormFieldLabelComponent,
    FormFieldHintComponent,
    InputFieldDirective,
    DropdownComponent,
    DropdownItemComponent,
    DatePickerDirective,
    SuffixDirective,
    MenuComponent,
    MenuItemDirective,
    MenuBarComponent,
    MenuTriggerDirective
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

  selectedValue!: string ;

  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];

  myDate: Date = new Date('6/22/24');


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