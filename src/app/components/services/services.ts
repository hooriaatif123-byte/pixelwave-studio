import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.html',
  styleUrls: ['./services.scss']
})
export class ServicesComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    // Animate cards on scroll
    const cards = this.el.nativeElement.querySelectorAll('.service-card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card: Element) => observer.observe(card));
  }
}
