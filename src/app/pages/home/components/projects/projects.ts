import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

interface Project {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  repoLink?: string;
  deployLink?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      title: 'Sistema de Reservas de Veículos',
      description: 'API Restful completa com Nest.js e Front-End em Angular. Conta com sistema de autenticação, RBAC (Controle de Acesso), Documentação Swagger e cobertura de testes unitários.',
      technologies: ['Angular', 'Nest.js', 'Docker', 'PostgreSQL', 'Jest', 'Swagger'],
      repoLink: 'https://github.com/ericoliveirajs',
    },
    {
      title: 'Portfólio Profissional',
      description: 'Este site que você está vendo! Desenvolvido com a versão mais recente do Angular (Standalone Components) e Angular Material, focado em performance e Clean Code.',
      technologies: ['Angular 18+', 'Angular Material', 'SCSS', 'CI/CD'],
      repoLink: 'https://github.com/ericoliveirajs'
    }
  ];
}