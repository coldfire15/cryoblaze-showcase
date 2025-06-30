import {AfterViewInit, Component, inject} from '@angular/core';
import {ContactComponent} from '../contact/contact.component';
import {TranslateModule} from '@ngx-translate/core';
import {ActivatedRoute} from '@angular/router';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    ContactComponent,
    TranslateModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{
  private route = inject(ActivatedRoute);
  private viewportScroller = inject(ViewportScroller)

  ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      if(fragment) {
        setTimeout(()=> {
          this.viewportScroller.scrollToAnchor(fragment)
        },0);
      }
    })
  }

  experiences = [
    {
      title: 'home.experience.mappa.title',
      company: 'Mappa Assurances',
      duration: 'home.experience.mappa.duration',
      details: [
        'home.experience.mappa.detail1',
        'home.experience.mappa.detail2',
        'home.experience.mappa.detail3',
        'home.experience.mappa.detail4',
        'home.experience.mappa.detail5',
      ],
      tech: 'Java, PostgreSQL, Spring boot, Kubernetes, Git',
    },
    {
      title: 'home.experience.cgm.title',
      company: 'CompuGroupMedical Paris',
      duration: 'home.experience.cgm.duration',
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
      duration: 'home.experience.socgen.duration',
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
      duration: 'home.experience.capgemini.duration',
      details: [
        'home.experience.capgemini.detail1',
        'home.experience.capgemini.detail2',
        'home.experience.capgemini.detail3',
        'home.experience.capgemini.detail4'
      ],
      tech: 'Spring Boot, Angular, Confluence, Jira',
    }

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
