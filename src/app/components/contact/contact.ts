import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent {
  
  // 📨 Handle form submission
  onSubmit(event: Event): void {
    event.preventDefault();
    alert('✅ Thank you for contacting Pixelwave Studio! We’ll get back to you soon.');
  }
}
