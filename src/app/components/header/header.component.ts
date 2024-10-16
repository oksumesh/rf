import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  closeMenu() {
    const checkbox = document.getElementById('main-menu-state') as HTMLInputElement;
    checkbox.checked = false;
  }

  isModalOpen = false;

  onPhoneButtonClick() {
    this.isModalOpen = true;
  }
  
  closeModal() {
    this.isModalOpen = false;
  }

  callNumber(phoneNumber: string) {
    window.open(`tel:${phoneNumber}`);
  }

  sendWhatsApp() {
    const whatsappUrl = `https://wa.me/918830230007?text=Hello, I am interested in learning more about the security and fire safety services offered by Reflex Fire & Security. Could you please provide more details about your services, pricing, and availability? Thank you!`;
    window.open(whatsappUrl);
  }
  
}
