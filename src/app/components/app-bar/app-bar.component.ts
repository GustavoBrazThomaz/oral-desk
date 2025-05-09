import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-app-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './app-bar.component.html',
  styleUrl: './app-bar.component.css',
})
export class AppBarComponent {}
