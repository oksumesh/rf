import { Component } from '@angular/core';

@Component({
  selector: 'app-guards-section',
  templateUrl: './guards-section.component.html',
  styleUrl: './guards-section.component.css'
})
export class GuardsSectionComponent {
  teamMembers = [
    {
      name: 'Tommy Clark',
      role: 'Yoga Dance',
      description: 'Suspendisse sagittis urna et lorem euismod, non semper neque euismod.',
      img: 'assets/img/instructors1.webp',
      socials: [
        { icon: 'fa-twitter', link: '#' },
        { icon: 'fa-facebook', link: '#' },
        { icon: 'fa-instagram', link: '#' }
      ]
    },
    // Add more team members as needed
  ];
}
