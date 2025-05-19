import { Component } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSearch } from '@ng-icons/lucide';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [TableComponent, ReactiveFormsModule, NgIcon, RouterLink],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.css',
  viewProviders: [provideIcons({ lucideSearch })],
})
export class PatientsComponent {
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
    console.log(this.form.value.search);
  }
}
