import { Component, OnInit, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
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
  actionBtn: string = "Save"


  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public editData: any, private dialogRef: MatDialogRef<DialogComponent>, private employeeService: EmployeeService) {
    this.employeeForm = fb.group({});
    this.employees = [];
    this.employeesToDisplay = this.employees;
  }


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
    });
    if (this.editData) {
      this.actionBtn = "Update"

      this.employeeForm.controls['firstname'].setValue(this.editData.firstname);
      this.employeeForm.controls['lastname'].setValue(this.editData.lastname);
      this.employeeForm.controls['birthday'].setValue(this.editData.birthday);
      this.employeeForm.controls['gender'].setValue(this.editData.gender);
      this.employeeForm.controls['education'].setValue(this.editData.education);
      this.employeeForm.controls['company'].setValue(this.editData.company);
      this.employeeForm.controls['jobExperience'].setValue(this.editData.jobExperience);
      this.employeeForm.controls['salary'].setValue(this.editData.salary);

    }


  }





}
