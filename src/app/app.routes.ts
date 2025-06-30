import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ContactComponent} from './components/contact/contact.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title:"CryoBlaze",
    pathMatch: 'full'
  },
  {
    path:'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path:'contact',
    title: 'Contact Us - CryoBlaze',

    component: ContactComponent
  },
  {
    path:'**',
    title: 'Page Not Found - CryoBlaze',
    component:NotFoundComponent
  }
];
