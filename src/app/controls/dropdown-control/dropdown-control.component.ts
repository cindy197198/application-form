import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dropdown-control',
  templateUrl: './dropdown-control.component.html',
  styleUrls: ['./dropdown-control.component.scss']
})
export class DropdownControlComponent implements OnInit {
  @Input() fieldName: string = '';
  @Input() parentForm: FormGroup = new FormGroup({});
  constructor() { }

  ngOnInit(): void {
  }

}
