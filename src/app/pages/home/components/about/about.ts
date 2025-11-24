import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

interface ServiceData {
  id: string;
  title: string;
  icon: string;
  shortDesc: string;
  fullDesc: string;
  skills: string[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  
  services: ServiceData[] = [
    {
      id: 'frontend',
      title: 'Front-End Development',
      icon: 'code',
      shortDesc: 'Angular & React',
      fullDesc: 'Especialista na construção de interfaces modernas e responsivas. Tenho foco em performance, acessibilidade e criação de componentes reutilizáveis. Minha experiência principal é com Angular (RxJS, Signals), mas também possuo sólidos conhecimentos em React e Next.js.',
      skills: ['Angular', 'TypeScript', 'RxJS', 'SASS', 'HTML5/CSS3', 'React', 'Next.js', 'Figma']
    },
    {
      id: 'backend',
      title: 'Back-End & APIs',
      icon: 'dns',
      shortDesc: 'Nest.js & Node.js',
      fullDesc: 'Desenvolvimento de APIs RESTful escaláveis e seguras. Aplico rigorosamente os princípios de Clean Code, SOLID e Design Patterns para garantir manutenibilidade. Experiência com integração de bancos de dados relacionais e testes automatizados.',
      skills: ['Node.js', 'Nest.js', '.NET / C#', 'PostgreSQL', 'SQL Server', 'Jest', 'Swagger', 'SOLID']
    },
    {
      id: 'cloud',
      title: 'Cloud & DevOps',
      icon: 'cloud_queue',
      shortDesc: 'AWS & Docker',
      fullDesc: 'Gerenciamento de infraestrutura e deploys automatizados. Experiência na configuração de ambientes cloud na AWS, criação de pipelines CI/CD e containerização de aplicações para garantir consistência entre desenvolvimento e produção.',
      skills: ['AWS (S3, Gateway)', 'Docker', 'CI/CD', 'Terraform', 'Git/GitHub']
    }
  ];

  selectedService: ServiceData = this.services[0];

  selectService(service: ServiceData) {
    this.selectedService = service;
  }
}