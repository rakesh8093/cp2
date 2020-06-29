import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss']
})
export class AddcustomerComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ) {
       this.form = formBuilder.group({
      "BPCord": ['', Validators.required],
      "Name": ['', Validators.required],
      "ShortName": ['', Validators.required],
      "Qulification": ['', [Validators.required]]
    })
   }

  ngOnInit(): void {
  }
  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }
}


