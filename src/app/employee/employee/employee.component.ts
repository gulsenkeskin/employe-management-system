import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input() employee!: Employee;
  @Output() onRemoveEmployee = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    console.log("dfsdfsdfsdfds", this.employee)
  }

  deleteEmployeeClicked() {
    this.onRemoveEmployee.emit(this.employee.id);
  }

}
