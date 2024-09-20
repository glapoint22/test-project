import { Component, inject } from '@angular/core';
import { COMPONENT_PARAMS } from 'ngx-toolkit';

@Component({
  selector: 'app-my',
  standalone: true,
  imports: [],
  templateUrl: './my.component.html',
  styleUrl: './my.component.scss'
})
export class MyComponent {
  private params = inject(COMPONENT_PARAMS) as any;
  protected character!: string;

  ngOnInit() {
    this.character = this.params.value || this.params.name;
  }
}
