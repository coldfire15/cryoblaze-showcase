import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [
    RouterLink,
    TranslateModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  hero =
    {

      github: 'https://github.com/coldfire15',
      linkedin: 'https://linkedin.com/in/ahmed-ammouri',
      twitter: 'https://github.com/coldfire15'
    };

}
