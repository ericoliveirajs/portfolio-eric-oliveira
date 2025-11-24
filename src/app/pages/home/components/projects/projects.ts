import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  repoLink?: string;
  frontendLink?: string;
  backendLink?: string;
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
      title: 'Modernização de Plataforma Corporativa',
      description: 'Atuação estratégica na modernização de sistemas legados de um dos maiores bancos da América Latina. Desenvolvimento de microsserviços e Backends for Frontends (BFF) escaláveis na AWS.',
      technologies: ['Angular', '.NET Core', 'AWS', 'Terraform', 'CI/CD', 'DDD'],
    },
    
    {
      title: 'Sistema de Reservas de Veículos',
      description: 'Solução completa de reservas. API Restful robusta com Nest.js documentada via Swagger, integrada a um Front-End Angular responsivo. Conta com autenticação JWT, RBAC e testes unitários.',
      technologies: ['Angular', 'Nest.js', 'Docker', 'PostgreSQL', 'Jest', 'Swagger'],
      frontendLink: 'https://github.com/ericoliveirajs/frontend-aluguel-carros', 
      backendLink: 'https://github.com/ericoliveirajs/backend-aluguel-carros',
      deployLink: 'https://frontend-aluguel-carros.vercel.app/' 
    },

   {
      title: 'Biblioteca de Componentes Dinâmicos (PCF)',
      description: 'Criação de componentes reutilizáveis para o ecossistema Dynamics 365, reduzindo o retrabalho e padronizando a UI/UX das aplicações internas.',
      technologies: ['TypeScript', 'React', 'PCF', 'Design System'],
    },

    {
      title: 'Portfólio Profissional Interativo',
      description: 'SPA desenvolvida com Angular 18+ e Standalone Components. Arquitetura limpa, modo escuro personalizado e animações CSS.',
      technologies: ['Angular 18', 'SASS', 'Material Design', 'Mobile First'],
      repoLink: 'https://github.com/ericoliveirajs/portfolio-eric-oliveira',
    },

    {
      title: 'Automação de Processos Jurídicos',
      description: 'Scripts de automação e rotinas SQL para otimizar o fluxo do departamento jurídico, eliminando processos manuais e garantindo integridade dos dados.',
      technologies: ['SQL Server', '.NET', 'Automation'],
    }
  ];
}