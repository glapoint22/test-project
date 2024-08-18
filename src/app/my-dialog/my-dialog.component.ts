import { Component, inject } from '@angular/core';
import { DYNAMIC_COMPONENT_DATA, DynamicComponentCloseDirective, IconComponent, PanelComponent, PanelContentComponent, PanelHeaderActionButtonDirective, PanelHeaderActionsComponent, PanelHeaderComponent, PanelHeaderTitleComponent } from 'ngx-toolkit';

@Component({
  selector: 'my-dialog',
  standalone: true,
  imports: [
    PanelComponent,
    PanelHeaderComponent,
    PanelHeaderTitleComponent,
    PanelHeaderActionsComponent,
    PanelHeaderActionButtonDirective,
    PanelContentComponent,
    IconComponent,
    DynamicComponentCloseDirective
  ],
  templateUrl: './my-dialog.component.html',
  styleUrl: './my-dialog.component.scss'
})
export class MyDialogComponent {
  public data = inject(DYNAMIC_COMPONENT_DATA);

}