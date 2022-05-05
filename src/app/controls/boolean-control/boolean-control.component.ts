import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-boolean-control',
  templateUrl: './boolean-control.component.html',
  styleUrls: ['./boolean-control.component.scss']
})
export class BooleanControlComponent implements OnInit {
  @Input() fieldName: string = '';
  @Input() parentForm: FormGroup = new FormGroup({});
  constructor() { }

  ngOnInit(): void {
  }

}
