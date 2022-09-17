import { Component, OnInit, } from '@angular/core';
import { MatDialog, } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog/dialog.component';
import { EmployeeService } from './employee.service';
import { Employee } from './models/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'employe-management-system';
  employees: Employee[];
  employeesToDisplay: Employee[];

  constructor(public dialog: MatDialog, private employeeService: EmployeeService) {
    this.employees = [];
    this.employeesToDisplay = this.employees;
  }

  ngOnInit(): void {
    this.getAllEmployee();
  }


  openDialog() {
    this.dialog.open(DialogComponent, {
      // data: {
      //   // animal: 'panda',
      // },
    }).afterClosed().subscribe(val => {
      //close da gönderdğimiz değer buraya düşer
      if (val === "save") {
        this.getAllEmployee();
      }
    });
  }


  getAllEmployee() {
    this.employeeService.getEmployees().subscribe({
      next: (res: any) => {
        this.employees = res;
        this.employeesToDisplay = this.employees;

        console.log("dskfjks", this.employees);

      }, error: () => {
        alert("Error while fetching the records");
      }
    })

  }

  removeEmployee(id: any) {
    this.employeeService.deleteEmployee(id).subscribe(
      {
        next: (res) => {
          alert("Product Deleted Successfuly");
          this.getAllEmployee();
        },
        error: () => {
          alert("Error while deleting rhe product")
        }
      }
    )

  }

  editEmployee(event: any) {

  }

}
