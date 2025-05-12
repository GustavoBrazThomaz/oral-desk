import { Component } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCirclePlus } from '@ng-icons/lucide';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableComponent, NgIcon, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  viewProviders: [provideIcons({ lucideCirclePlus })],
})
export class HomeComponent {
  cards = [
    {
      title: 'Total de Pacientes',
      content: '128',
      subtitle: '12 novos este mês',
    },
    {
      title: 'Total de Pacientes',
      content: '128',
      subtitle: '12 novos este mês',
    },
    {
      title: 'Total de Pacientes',
      content: '128',
      subtitle: '12 novos este mês',
    },
  ];

  selectedTab = 0;
  tabs = ['Pacientes recentes', 'Próximas consultas'];
  tabContent = [
    {
      title: 'Pacientes recentes',
      subtitle: 'Lista dos últimos pacientes cadastrados ou atendidos.',
      buttonTitle: 'Ver todos os pacientes',
      buttonRedirect: 'pacientes',
    },
    {
      title: 'Próximas consultas',
      subtitle: 'Consultas agendadas para os próximos dias.',
      buttonTitle: 'Ver todas as consultas',
      buttonRedirect: 'consultas',
    },
  ];

  head = ['', 'nome', 'idade'];
  meusDados = [
    { id: 1, nome: 'João', idade: 30 },
    { id: 2, nome: 'Maria', idade: 25 },
    { id: 3, nome: 'Maria', idade: 25 },
    { id: 4, nome: 'Maria', idade: 25 },
    { id: 5, nome: 'Maria', idade: 25 },
  ];

  selectTab(index: number) {
    this.selectedTab = index;
  }
}
