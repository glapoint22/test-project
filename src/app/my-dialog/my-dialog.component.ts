import { Component, inject } from '@angular/core';
import { POPUP_DATA, IconComponent, PanelComponent, PanelContentComponent, PanelHeaderActionButtonDirective, PanelHeaderActionsComponent, PanelHeaderComponent, PanelHeaderTitleComponent, PopupCloseDirective, PanelActionsComponent, FlatButtonDirective } from 'ngx-toolkit';

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
    PanelActionsComponent,
    IconComponent,
    PopupCloseDirective,
    FlatButtonDirective
  ],
  templateUrl: './my-dialog.component.html',
  styleUrl: './my-dialog.component.scss'
})
export class MyDialogComponent {
  public data = inject(POPUP_DATA);

  

}