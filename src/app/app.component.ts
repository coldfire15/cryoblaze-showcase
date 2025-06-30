import { Component } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {Meta, Title} from '@angular/platform-browser';
import {filter, map, mergeMap} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private titleService:Title,
              private metaService:Meta
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(()=>this.activatedRoute),
      map(route => {
        while(route.firstChild) route = route.firstChild;
        return route;
      }),
      mergeMap(route => route.data)
    ).subscribe(data => {
      if(data['title']){
        this.titleService.setTitle(data['title']);
      }

      if(data['metaDescription']){
        this.metaService.updateTag({
          name:'description',
          content:data['metaDescription']
        });
      }
    });
  }
  title = 'cryoblaze';
}
