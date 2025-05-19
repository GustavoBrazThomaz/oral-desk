import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { Location } from '@angular/common';

import {
  lucideArrowLeft,
  lucideCalendarCheck,
  lucideSearch,
} from '@ng-icons/lucide';
import { FormFieldsComponent } from "../../components/form-fields/form-fields.component";

@Component({
  selector: 'app-patients-form',
  standalone: true,
  imports: [NgIcon, FormFieldsComponent],
  templateUrl: './patients-form.component.html',
  styleUrl: './patients-form.component.css',
  viewProviders: [
    provideIcons({ lucideArrowLeft, lucideCalendarCheck, lucideSearch }),
  ],
})
export class PatientsFormComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
