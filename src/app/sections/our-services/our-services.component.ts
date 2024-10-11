import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css'
})
export class OurServicesComponent {
  @Input() applyYogaBgClass: boolean = false;
    leftServices = [
      {
        title: 'Security Guard Services',
        description: 'Professional and highly trained security guards for your premises and events.',
        icon: 'assets/img/sgsicon.png'
      },
      {
        title: 'Bouncer Services',
        description: 'Expert bouncers to manage crowd control and ensure safety at your events.',
        icon: 'assets/img/bouncericon.png'
      },
      {
        title: 'Fire Safety Manpower',
        description: 'Certified fire safety personnel to handle fire prevention and emergency management.',
        icon: 'assets/img/firesafetymanpower.png'
      }
    ];
  
    // Right column services
    rightServices = [
      {
        title: 'Fire Safety Installation',
        description: 'Expert fire safety equipment installation to safeguard your premises.',
        icon: 'assets/img/firesafetyicon.png'
      },
      {
        title: '24/7 Monitoring Services',
        description: 'Round-the-clock surveillance to ensure continuous safety and security.',
        icon: 'assets/img/247service.png'
      },
      {
        title: 'Event Security Management',
        description: 'Comprehensive security solutions tailored for events to ensure smooth and safe operations.',
        icon: 'assets/img/esmicon.png'
      }
    ];
}
