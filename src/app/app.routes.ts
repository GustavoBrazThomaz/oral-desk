import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PatientsComponent } from './pages/patients/patients.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { AppointmentFormComponent } from './pages/appointment-form/appointment-form.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'pacientes',
    component: PatientsComponent,
  },
  {
    path: 'consultas',
    component: AppointmentsComponent,
  },
  {
    path: 'criar/consulta',
    component: AppointmentFormComponent,
  },
];
