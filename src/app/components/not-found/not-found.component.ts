import {Component, OnInit} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {Router, RouterLink} from '@angular/router';
import confetti from "canvas-confetti"

@Component({
  selector: 'app-not-found',
  imports: [TranslateModule, RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent implements OnInit {
  particles: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.createParticles();
  }

  createParticles(): void {
    const colors = [
      `rgb(${getComputedStyle(document.documentElement).getPropertyValue('--color-primary')})`,
      `rgb(${getComputedStyle(document.documentElement).getPropertyValue('--color-secondary')})`,
      `rgb(${getComputedStyle(document.documentElement).getPropertyValue('--color-accent-500')})`
    ];

    for (let i = 0; i < 15; i++) {
      this.particles.push({
        x: Math.random() * 300,
        y: Math.random() * 200,
        size: 5 + Math.random() * 15,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  }

  navigateHome(): void {
    this.router.navigate(['/']);
  }

  navigateProjects(): void {
    this.router.navigate(['/projects']);
  }

  playConfetti(): void {
    const duration = 2 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 1000
    };

    const interval: any = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2
        }
      });
    }, 250);
  }

  protected readonly Math = Math;
}
