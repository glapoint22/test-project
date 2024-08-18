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
  MenuTriggerDirective,
  DynamicComponentService} from 'ngx-toolkit';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

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

  private dynamicComponentService = inject(DynamicComponentService);


  ngOnInit() {
    this.renderer.addClass(document.body, 'light-theme');
    this.buttonLabel = 'Dark Theme';

    
    const dynamicComponentRef =  this.dynamicComponentService.open(MyDialogComponent, {
      data: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac nulla nec urna
            ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt. Nullam nec nunc nec
            nunc ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt. Nullam nec nunc
            nec nunc ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt. Nullam nec
            nunc nec nunc ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt. Nullam
            nec nunc nec nunc ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt.`,
      hasBackdrop: true,
      backdropClass: 'my-backdrop',
      disableClose: false,
      maxWidth: '500px'
    });
    
    
    dynamicComponentRef.afterClosed().subscribe((result: string) => {
      console.log('Dialog closed with result:', result);
    });

    dynamicComponentRef.afterOpened().subscribe(() => {
      console.log('Dialog opened');
    });

    dynamicComponentRef.backdropClick().subscribe((event: MouseEvent) => {
      console.log('Backdrop clicked', event);
    });

    dynamicComponentRef.keydownEvents().subscribe((event: KeyboardEvent) => {
      console.log('Keydown event:', event);
    });
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