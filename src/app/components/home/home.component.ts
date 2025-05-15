import {Component} from '@angular/core';
import {ContactComponent} from '../contact/contact.component';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [
    ContactComponent,
    TranslateModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  experiences = [
    {
      title: 'home.experience.cgm.title',
      company: 'CompuGroupMedical Paris',
      duration: 'Since April 2024',
      details: [
        'home.experience.cgm.detail1',
        'home.experience.cgm.detail2',
        'home.experience.cgm.detail3',
        'home.experience.cgm.detail4',
        'home.experience.cgm.detail5',
        'home.experience.cgm.detail6',
      ],
      tech: 'Java, Quarkus, PostgreSQL, MongoDB, Kubernetes, Git',
    },
    {
      title: 'home.experience.socgen.title',
      company: 'Société Générale La Défense',
      duration: 'July 2021 to April 2024',
      details: [
        'home.experience.socgen.detail1',
        'home.experience.socgen.detail2',
        'home.experience.socgen.detail3',
        'home.experience.socgen.detail4',
      ],
      tech: 'Java, Angular, PostgreSQL, Jenkins, Kubernetes',
    },
    {
      title: 'home.experience.capgemini.title',
      company: 'CAPGEMINI TECHNOLOGY SERVICES - EDF Suresnes',
      duration: 'October 2018 – July 2021',
      details: [
        'home.experience.capgemini.detail1',
        'home.experience.capgemini.detail2',
        'home.experience.capgemini.detail3',
        'home.experience.capgemini.detail4',
        'home.experience.detail5',
      ],
      tech: 'Spring Boot, Angular, Confluence, Jira',
    },
  ];

  skills = {
    agile: 'Scrum, Safe',
    languages: 'Quarkus, Spring Boot, Java, Angular, Python, SQL, Node.js,html5,css3',
    tools: 'Eclipse, IntelliJ, Pycharm, WebStorm, Anaconda, Spyder, GitHub, GitLab, Jenkins, Kubernetes, Docker',
    other: 'LaTeX, Linux, REST API',
  };

  scrollToContact(): void {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({behavior: 'smooth'});
    }
  }
}
