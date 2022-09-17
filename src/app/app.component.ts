import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employe-management-system';

  constructor(private dialog: MatDialog) { }



  openDialog() {
    this.dialog.open(DialogComponent, {
      width: "30%"
    }).afterClosed().subscribe(val => {
      //close da gönderdğimiz değer buraya düşer

    })
  }

}
