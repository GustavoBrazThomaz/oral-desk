import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowLeft, lucideCalendarCheck, lucideSearch } from '@ng-icons/lucide';
import { Location } from '@angular/common';

@Component({
  selector: 'app-appointment-form',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './appointment-form.component.html',
  styleUrl: './appointment-form.component.css',
  viewProviders: [provideIcons({ lucideArrowLeft, lucideCalendarCheck, lucideSearch })],
})
export class AppointmentFormComponent {
  durationTime = [
    '15 minutos',
    '30 minutos',
    '45 minutos',
    '1 hora',
    '1 hora e 30 minutos',
  ];

  appointmentType = [
    'Consulta de Rotina',
    'Limpeza',
    'Tratamento de Canal',
    'Extração',
    'Revisão',
    'Ortodontia',
  ];

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
