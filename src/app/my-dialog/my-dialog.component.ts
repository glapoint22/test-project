import { Component, inject } from '@angular/core';
import { POPUP_DATA, IconComponent, PanelComponent, PanelContentComponent, PanelHeaderActionButtonDirective, PanelHeaderActionsComponent, PanelHeaderComponent, PanelHeaderTitleComponent, PopupCloseDirective } from 'ngx-toolkit';

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
    PopupCloseDirective
  ],
  templateUrl: './my-dialog.component.html',
  styleUrl: './my-dialog.component.scss'
})
export class MyDialogComponent {
  public data = inject(POPUP_DATA);

  

}