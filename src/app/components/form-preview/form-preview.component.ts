import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FieldTypes } from 'src/app/constant';

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
  inputTypes = FieldTypes;
  constructor(private router: Router, private toastr: ToastrService) {
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
      let regex = field.validation.substring(1, field.validation.length -1);      
      group[field.name] = new FormControl('', [
        Validators.pattern(regex),
      ]);
    }
    this.formDemo = new FormGroup(group);
  }

  submit() {
    this.submitted = true;    
    if (this.formDemo.valid) {
      this.toastr.success("The form is submitted successfully!", "Success");
    } else {
      this.toastr.error("The form is invalid!", "Error");
    }
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

  isInputControl(type: string) {
    return (
      type == this.inputTypes.Text ||
      type == this.inputTypes.Textarea ||
      type == this.inputTypes.Date
    );
  }
}
