import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.scss'],
})
export class FormCreatorComponent implements OnInit {
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
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      fields: new FormArray([]),
    });
    this.addForm();
  }

  addForm() {
    this.inputs.push(
      new FormGroup({
        id: new FormControl(this.inputs.length),
        label: new FormControl(''),
        name: new FormControl(''),
        type: new FormControl(''),
        validation: new FormControl(''),
      })
    );
  }

  get inputs() {
    return this.form.controls['fields'] as FormArray;
  }

  remove(id: number) {
    let index = this.inputs.controls.findIndex((e) => e.value.id == id);
    this.inputs.removeAt(index);
  }

  preview() {
    this.submitted = true;
    this.inputValues = this.form.value;
    this.router.navigate(['/preview'],
    {
      state: {
        form: JSON.stringify(this.inputValues)
      }
    });
  }

  export() {
    this.inputValues = this.form.value;
  }
}
