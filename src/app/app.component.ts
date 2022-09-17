import { Component, } from '@angular/core';
import { MatDialog, } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employe-management-system';

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogComponent);
  }
}
