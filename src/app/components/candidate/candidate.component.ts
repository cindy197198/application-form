import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss'],
})
export class CandidateComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  inputTypes: { code: number; text: string }[] = [
    {
      code: 1,
      text: 'Text',
    },
    {
      code: 2,
      text: 'Number',
    },
    {
      code: 3,
      text: 'Textarea',
    },
    {
      code: 4,
      text: 'Dropdown',
    },
    {
      code: 5,
      text: 'Boolean',
    },
    {
      code: 6,
      text: 'Date',
    },
    {
      code: 7,
      text: 'Email',
    },
  ];
  submitted: boolean = false;
  inputValues: any;
  formDemo: FormGroup = new FormGroup({});
  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      inputs: new FormArray([]),
    });
    this.addForm();
  }

  get inputs() {
    return this.form.controls['inputs'] as FormArray;
  }

  addForm() {
    this.inputs.push(
      new FormGroup({
        label: new FormControl(''),
        fieldName: new FormControl(''),
        inputType: new FormControl(''),
        regex: new FormControl(),
      })
    );
  }

  remove(index: number) {
    this.inputs.removeAt(index);
  }

  preview() {
    this.inputValues = this.form.value.inputs;
    this.submitted = true;
    const group: any = {};
    for (var field of this.inputValues) {
      group[field.fieldName] = new FormControl(field.fieldValue || '', [
        Validators.pattern(field.regex),
      ]);
    }
    this.formDemo = new FormGroup(group);
  }
}
