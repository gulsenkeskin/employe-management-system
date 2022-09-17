import { Component, OnInit, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit, AfterViewInit {
  @ViewChild('tempButton') buttontemp: any;
  employeeForm: FormGroup;
  employees: Employee[];
  employeesToDisplay: Employee[];
  educationOptions = [
    "10th pass",
    "diploma",
    "graduate",
    "post graduate",
    "PhD"
  ]

  constructor(private fb: FormBuilder,) {
    this.employeeForm = fb.group({});
    this.employees = [];
    this.employeesToDisplay = this.employees;
  }

  // constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstname: this.fb.control(''),
      lastname: this.fb.control(''),
      birthday: this.fb.control(''),
      gender: this.fb.control(''),
      education: this.fb.control(''),
      company: this.fb.control(''),
      jobExperience: this.fb.control(''),
      salary: this.fb.control(''),
    })
  }
  ngAfterViewInit(): void {
    this.buttontemp.nativeElement.click();
  }



}
