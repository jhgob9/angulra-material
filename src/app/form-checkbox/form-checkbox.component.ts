import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.scss']
})

export class FormCheckboxComponent {
  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;
}
