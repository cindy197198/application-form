import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { countries, Country } from 'src/app/models/countries';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  matcher = new MyErrorStateMatcher();
  countriesList: Country[] = countries;
  submitted: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      dateOfBirth: new FormControl(),
      gender: new FormControl(''),
      email: new FormControl('', [Validators.email]),
      phone: new FormControl(''),
      streetAddress: new FormControl(''),
      streetAddressLine2: new FormControl(''),
      city: new FormControl(''),
      region: new FormControl(''),
      postal: new FormControl(''),
      country: new FormControl(''),
      healthDescription: new FormControl(''),
      educationQualifications: new FormControl(''),
      schoolName: new FormControl(''),
      workExperience: new FormControl(''),
      specialSkills: new FormControl(''),
      signature: new FormControl('')
    })
  }
  submitForm() {
    this.submitted = true;
  }
}
