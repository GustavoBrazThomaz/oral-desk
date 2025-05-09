import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PatientsComponent } from './pages/patients/patients.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'patients',
    component: PatientsComponent,
  },
  {
    path: 'appointments',
    component: AppointmentsComponent,
  },
];
