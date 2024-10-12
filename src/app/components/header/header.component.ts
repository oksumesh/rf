import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  onPhoneButtonClick() {
    // Replace 'phone-number' with the actual phone number
    window.open('tel:+918830230007', '_blank');
  }
}
