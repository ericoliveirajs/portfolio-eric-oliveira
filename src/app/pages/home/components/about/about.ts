import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule
  ],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  skills = [
    'Angular', 'TypeScript', 'Node.js', 'Nest.js',
    'AWS', 'Docker', 'SQL Server', 'PostgreSQL',
    'Jest', 'Cypress', 'SOLID', 'Clean Code'
  ];
}