import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  services = [
    {
      title: 'Web Development',
      description: 'Custom websites with Angular and Spring Boot.'
    },
    {
      title: 'Consulting',
      description: 'Technical guidance for your projects.'
    },
    {
      title: 'SEO Optimization',
      description: 'Improve your site’s search rankings.'
    }
  ];

}
