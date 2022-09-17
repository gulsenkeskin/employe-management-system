import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  employeeForm!: FormGroup;
  educationOptions = [
    "10th pass",
    "diploma",
    "graduate",
    "post graduate",
    "PhD"
  ]
  constructor(private formBuilder: FormBuilder,) { }
  // constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }



}
