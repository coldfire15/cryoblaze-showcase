import { Component } from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  imports: [TranslateModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm: FormGroup;
  isSubmitted = false;
  isError = false;
  isSubmitting = false;


  constructor(private formBuilder: FormBuilder,private http: HttpClient) {
    this.contactForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
    })
  }
  submit() {
    if(this.contactForm.invalid) return;
    this.isSubmitting = true;
    this.isSubmitted=false;
    this.isError = false;

    const formData = this.contactForm.value;
    const endpoint = 'https://formspree.io/f/xvgrvwnb';

    this.http.post(endpoint,formData).subscribe({
      next: () => {
        this.isSubmitted = true;
        this.isSubmitting = false;
        this.contactForm.reset()

        setTimeout(() => this.isSubmitted = false, 5000);
      },
      error: () => {
        this.isSubmitted = false;
        this.isError = true;
        setTimeout(() => this.isError = false, 5000);
      }
    });
  }
}
