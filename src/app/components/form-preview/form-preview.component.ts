import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-preview',
  templateUrl: './form-preview.component.html',
  styleUrls: ['./form-preview.component.scss'],
})
export class FormPreviewComponent implements OnInit {
  formValues: any;
  importForm: string = '';
  formDemo: FormGroup = new FormGroup({});
  submitted: boolean = false;
  
  constructor(private router: Router) {
    let routeState = this.router.getCurrentNavigation();
    if (routeState?.extras.state) {
      this.formValues = routeState?.extras.state['form']
        ? JSON.parse(routeState?.extras.state['form'])
        : '';
    }
  }

  ngOnInit(): void {
    if (this.formValues) this.createForm();
  }

  createForm() {
    const group: any = {};
    for (let field of this.formValues.fields) {
      group[field.name] = new FormControl('', [
        Validators.pattern(field.validation),
      ]);
    }
    this.formDemo = new FormGroup(group);
  }

  submit() {
    this.submitted = true;
  }

  import() {
    if (this.importForm != '') {
      this.formValues = JSON.parse(this.importForm);
      this.createForm();
    }
  }

  cancel() {
    this.router.navigate(['/create']);
  }
}
