import { Component, OnInit, } from '@angular/core';
import { MatDialog, } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog/dialog.component';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'employe-management-system';

  constructor(public dialog: MatDialog, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(res => {
      console.log(res);

    })

  }


  openDialog() {
    this.dialog.open(DialogComponent, {
      // data: {
      //   // animal: 'panda',
      // },
    });
  }


}
