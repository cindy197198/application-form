import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldTypes } from 'src/app/constant';

@Component({
  selector: 'app-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.scss']
})
export class InputControlComponent implements OnInit {
  @Input() type: string = '';
  @Input() fieldName: string = '';
  @Input() validation: string = '';
  @Input() parentForm: FormGroup = new FormGroup({});
  inputTypes = FieldTypes;
  constructor() { }

  ngOnInit(): void {
  }

}
