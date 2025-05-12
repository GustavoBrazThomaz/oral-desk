import { Component } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import {
  FormControl,
  FormGroup,
  NgForm,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSearch } from '@ng-icons/lucide';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [TableComponent, ReactiveFormsModule, NgIcon, RouterLink],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css',
  viewProviders: [provideIcons({ lucideSearch })],
})
export class AppointmentsComponent {
  form = new FormGroup({
    search: new FormControl(''),
  });

  head = ['', 'nome', 'idade'];
  meusDados = [
    { id: 1, nome: 'João', idade: 30 },
    { id: 2, nome: 'Maria', idade: 25 },
    { id: 3, nome: 'Maria', idade: 25 },
    { id: 4, nome: 'Maria', idade: 25 },
    { id: 5, nome: 'Maria', idade: 25 },
    { id: 1, nome: 'João', idade: 30 },
    { id: 2, nome: 'Maria', idade: 25 },
    { id: 3, nome: 'Maria', idade: 25 },
    { id: 4, nome: 'Maria', idade: 25 },
    { id: 5, nome: 'Maria', idade: 25 },
  ];

  handleSearch() {
    console.log(this.form.value);
  }
}
