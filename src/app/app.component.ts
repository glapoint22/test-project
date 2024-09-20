import { Component, inject, Renderer2, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
  PopupService,
  DataGridComponent,
  ColDef,
  FormFieldErrorComponent,
  DataService,
  AuthService,
  SpinnerComponent
} from 'ngx-toolkit';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { JsonPipe } from '@angular/common';
import { MyComponent } from './my/my.component';

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
    MenuTriggerDirective,
    DataGridComponent,
    ReactiveFormsModule,
    FormFieldErrorComponent,
    JsonPipe,
    SpinnerComponent
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

  selectedValue!: string;

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

  private popupService = inject(PopupService);

  colDefs: ColDef[] = [
    { field: "house", width: 150 },
    { field: "character", width: 300, component: MyComponent },
    { field: "status", width: 200 },
    { field: "title", width: 250 }
  ];


  rowData = [
    { house: "Stark", character: "Jon Snow", status: "Bastard of Winterfell", title: "King in the North" },
    { house: "Lannister", character: "Tyrion Lannister", status: "Dwarf", title: "Hand of the Queen" },
    { house: "Targaryen", character: "Daenerys Targaryen", status: "Exiled Princess", title: "Mother of Dragons" },
    { house: "Baratheon", character: "Stannis Baratheon", status: "Lord", title: "Lord of Dragonstone" },
    { house: "Greyjoy", character: "Theon Greyjoy", status: "Traitor", title: "Prince of the Iron Islands" },
    { house: "Tyrell", character: "Margaery Tyrell", status: "Queen", title: "Queen of the Seven Kingdoms" },
    { house: "Martell", character: "Oberyn Martell", status: "Warrior", title: "Red Viper of Dorne" },
    { house: "Bolton", character: "Ramsay Bolton", status: "Sadist", title: "Warden of the North" },
    { house: "Tully", character: "Catelyn Stark", status: "Lady", title: "Lady of Winterfell" },
    { house: "Arryn", character: "Lysa Arryn", status: "Widow", title: "Lady of the Eyrie" },
    { house: "Lannister", character: "Jaime Lannister", status: "Kingslayer", title: "Lord Commander of the Kingsguard" },
    { house: "Stark", character: "Arya Stark", status: "No One", title: "Faceless Assassin" },
    { house: "Stark", character: "Sansa Stark", status: "Lady", title: "Lady of Winterfell" },
    { house: "Baratheon", character: "Robert Baratheon", status: "King", title: "King of the Andals and the First Men" },
    { house: "Targaryen", character: "Viserys Targaryen", status: "Exiled Prince", title: "Beggar King" },
    { house: "Stark", character: "Bran Stark", status: "Three-Eyed Raven", title: "Lord of Winterfell" },
    { house: "Lannister", character: "Cersei Lannister", status: "Queen", title: "Queen of the Seven Kingdoms" },
    { house: "Greyjoy", character: "Yara Greyjoy", status: "Ironborn", title: "Lady of the Iron Islands" },
    { house: "Baratheon", character: "Renly Baratheon", status: "Lord", title: "Lord of Storm's End" },
    { house: "Tarly", character: "Samwell Tarly", status: "Maester", title: "Grand Maester" },
    { house: "Tarly", character: "Randyll Tarly", status: "Lord", title: "Lord of Horn Hill" },
    { house: "Mormont", character: "Jorah Mormont", status: "Exiled Knight", title: "Lord of Bear Island" },
    { house: "Stark", character: "Ned Stark", status: "Warden of the North", title: "Hand of the King" },
    { house: "Stark", character: "Robb Stark", status: "King in the North", title: "Young Wolf" },
    { house: "Bolton", character: "Roose Bolton", status: "Lord", title: "Lord of the Dreadfort" },
    { house: "Targaryen", character: "Rhaegar Targaryen", status: "Prince", title: "Dragon Prince" },
    { house: "Stark", character: "Lyanna Stark", status: "Lady", title: "Wolf Maid" },
    { house: "Baratheon", character: "Gendry", status: "Bastard", title: "Lord of Storm's End" },
    { house: "Martell", character: "Doran Martell", status: "Prince", title: "Lord of Sunspear" },
    { house: "Martell", character: "Ellaria Sand", status: "Paramour", title: "Lady of Sunspear" },
    { house: "Sand", character: "Obara Sand", status: "Bastard", title: "Sand Snake" },
    { house: "Sand", character: "Nymeria Sand", status: "Bastard", title: "Sand Snake" },
    { house: "Sand", character: "Tyene Sand", status: "Bastard", title: "Sand Snake" },
    { house: "Tarth", character: "Brienne of Tarth", status: "Knight", title: "Lady of Tarth" },
    { house: "Clegane", character: "Sandor Clegane", status: "Hound", title: "Bodyguard" },
    { house: "Clegane", character: "Gregor Clegane", status: "Mountain", title: "Ser" },
    { house: "Lannister", character: "Kevan Lannister", status: "Lord", title: "Hand of the King" },
    { house: "Tully", character: "Edmure Tully", status: "Lord", title: "Lord of Riverrun" },
    { house: "Tully", character: "Brynden Tully", status: "Blackfish", title: "Ser" },
    { house: "Greyjoy", character: "Balon Greyjoy", status: "Lord", title: "King of the Iron Islands" },
    { house: "Mormont", character: "Lyanna Mormont", status: "Lady", title: "Lady of Bear Island" },
    { house: "Hightower", character: "Olenna Tyrell", status: "Queen of Thorns", title: "Lady of Highgarden" },
    { house: "Tyrell", character: "Loras Tyrell", status: "Knight of Flowers", title: "Ser" },
    { house: "Tyrell", character: "Mace Tyrell", status: "Lord", title: "Warden of the South" },
    { house: "Freys", character: "Walder Frey", status: "Lord", title: "Lord of the Crossing" },
    { house: "Arryn", character: "Robin Arryn", status: "Lord", title: "Lord of the Eyrie" },
    { house: "Frey", character: "Lothar Frey", status: "Knight", title: "Ser" },
    { house: "Lannister", character: "Joffrey Baratheon", status: "King", title: "King of the Andals and the First Men" },
    { house: "Lannister", character: "Myrcella Baratheon", status: "Princess", title: "Princess of Dorne" },
    { house: "Lannister", character: "Tommen Baratheon", status: "King", title: "King of the Andals and the First Men" },
    { house: "Greyjoy", character: "Euron Greyjoy", status: "King", title: "King of the Iron Islands" },
    { house: "Karstark", character: "Rickard Karstark", status: "Lord", title: "Lord of Karhold" },
    { house: "Bolton", character: "Domeric Bolton", status: "Heir", title: "Lord of the Dreadfort" },
    { house: "Tarly", character: "Dickon Tarly", status: "Heir", title: "Lord of Horn Hill" },
    { house: "Stark", character: "Benjen Stark", status: "Ranger", title: "First Ranger of the Night's Watch" },
    { house: "Dayne", character: "Arthur Dayne", status: "Sword of the Morning", title: "Ser" },
    { house: "Targaryen", character: "Aegon Targaryen", status: "Conqueror", title: "King of the Andals, the Rhoynar, and the First Men" },
    { house: "Baratheon", character: "Shireen Baratheon", status: "Princess", title: "Princess of Dragonstone" },
    { house: "Stark", character: "Rickon Stark", status: "Heir", title: "Prince of Winterfell" },
    { house: "Arryn", character: "Jon Arryn", status: "Lord", title: "Warden of the East" },
    { house: "Targaryen", character: "Aerys II Targaryen", status: "Mad King", title: "King of the Andals and the First Men" },
    { house: "Lannister", character: "Tywin Lannister", status: "Lord", title: "Warden of the West" },
    { house: "Stark", character: "Eddard Stark", status: "Lord", title: "Lord of Winterfell" },
    { house: "Stark", character: "Robb Stark", status: "King in the North", title: "Lord of Winterfell" },
    { house: "Frey", character: "Rhaegar Frey", status: "Lord", title: "Heir of the Twins" },
    { house: "Targaryen", character: "Aegon VI Targaryen", status: "Prince", title: "Lord of Storm's End" },
    { house: "Martell", character: "Quentyn Martell", status: "Prince", title: "Heir of Sunspear" },
    { house: "Martell", character: "Trystane Martell", status: "Prince", title: "Lord of Sunspear" },
    { house: "Baelish", character: "Petyr Baelish", status: "Master of Coin", title: "Lord Protector of the Vale" },
    { house: "Tarth", character: "Selwyn Tarth", status: "Lord", title: "Lord of Tarth" },
    { house: "Bolton", character: "Fat Walda Bolton", status: "Lady", title: "Lady of the Dreadfort" },
    { house: "Reed", character: "Howland Reed", status: "Lord", title: "Lord of Greywater Watch" },
    { house: "Frey", character: "Walder Rivers", status: "Bastard", title: "Ser" },
    { house: "Lannister", character: "Alton Lannister", status: "Knight", title: "Ser" },
    { house: "Manderly", character: "Wyman Manderly", status: "Lord", title: "Lord of White Harbor" },
    { house: "Clegane", character: "Gregor Clegane", status: "Mountain", title: "Ser" },
    { house: "Lannister", character: "Joanna Lannister", status: "Lady", title: "Lady of Casterly Rock" },
    { house: "Arryn", character: "Elbert Arryn", status: "Heir", title: "Knight of the Eyrie" },
    { house: "Baratheon", character: "Steffon Baratheon", status: "Lord", title: "Lord of Storm's End" },
    { house: "Targaryen", character: "Maegor Targaryen", status: "King", title: "King of the Andals and the First Men" },
    { house: "Targaryen", character: "Baelor Targaryen", status: "King", title: "King of the Andals and the First Men" },
    { house: "Hightower", character: "Leyton Hightower", status: "Lord", title: "Lord of Oldtown" },
    { house: "Tully", character: "Hoster Tully", status: "Lord", title: "Lord of Riverrun" },
    { house: "Greyjoy", character: "Asha Greyjoy", status: "Ironborn", title: "Lady of the Iron Islands" },
    { house: "Karstark", character: "Alys Karstark", status: "Lady", title: "Lady of Karhold" },
    { house: "Stark", character: "Arya Stark", status: "Assassin", title: "Lady of Winterfell" },
    { house: "Targaryen", character: "Rhaenys Targaryen", status: "Princess", title: "Queen of the Seven Kingdoms" },
    { house: "Frey", character: "Roslin Frey", status: "Lady", title: "Lady of Riverrun" },
    { house: "Targaryen", character: "Viserys I Targaryen", status: "King", title: "King of the Andals and the First Men" }
  ];

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);


  data = signal<any>(null);
  errorMessage = signal<string | null>(null);

  private dataService = inject(DataService);
  
  private authService = inject(AuthService);


  


  ngOnInit() {
    this.renderer.addClass(document.body, 'light-theme');
    this.buttonLabel = 'Dark Theme';
    this.authService.authEvent$.subscribe(() => {
      console.log('Auth event received');
    });


    // const popupRef = this.popupService.open(MyDialogComponent, {
    //   data: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac nulla nec urna
    //         ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt. Nullam nec nunc nec
    //         nunc ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt. Nullam nec nunc
    //         nec nunc ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt. Nullam nec
    //         nunc nec nunc ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt. Nullam
    //         nec nunc nec nunc ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt.`,
    //   hasBackdrop: true,
    //   maxWidth: '500px',
    //   blockScroll: true
    // });


    // popupRef.onClose().subscribe((result: string) => {
    //   console.log('Dialog closed with result:', result);
    // });

    // popupRef.afterOpened().subscribe(() => {
    //   console.log('Dialog opened');
    // });

    // popupRef.backdropClick().subscribe((event: MouseEvent) => {
    //   console.log('Backdrop clicked', event);
    // });

    // popupRef.keydownEvents().subscribe((event: KeyboardEvent) => {
    //   console.log('Keydown event:', event);
    // });
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



  testGet(): void {
    this.dataService.get<any>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((response) => {
        this.data.set(response);
      });
  }

  testPost(): void {
    const body = { title: 'foo', body: 'bar', userId: 1 };
    this.dataService.post<any>('https://jsonplaceholder.typicode.com/posts', body)
      .subscribe((response) => {
        this.data.set(response);
      });
  }

  testPut(): void {
    const body = { id: 1, title: 'foo', body: 'bar', userId: 1 };
    this.dataService.put<any>('https://jsonplaceholder.typicode.com/posts/1', body)
      .subscribe((response) => {
        this.data.set(response);
      });
  }

  testDelete(): void {
    this.dataService.delete<any>('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe((response) => {
        this.data.set(response);
      });
  }


  testErrorGet(): void {
    this.dataService.get<any>('https://jsonplaceholder.typicode.com/invalid-url')
      .subscribe({
        next: (response) => {
          this.data = response;
          this.errorMessage.set(null);
        },
        error: (error) => {
          this.errorMessage.set(error.message);
        }
      });
  }

  // Simulate POST error (500)
  testErrorPost(): void {
    const invalidUrl = 'https://mocky.io/v2/5185415ba171ea3a00704eed?mocky-delay=200ms';
    this.dataService.post<any>(invalidUrl, {})
      .subscribe({
        next: (response) => {
          this.data = response;
          this.errorMessage.set(null);
        },
        error: (error) => {
          this.errorMessage.set(error.message);
        }
      });
  }
}