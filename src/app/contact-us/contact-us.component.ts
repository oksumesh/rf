import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  contacts = [
    {
      icon: 'fa fa-map-marker',
      content: `<a href="https://www.google.com/maps/search/?api=1&query=Ridhi+Sidhi+2+Platinum+O+Block+Plot+19,+Sri+Ganganagar+335001" target="_blank">
              Ridhi Sidhi 2 Platinum O Block Plot 19, Sri Ganganagar 335001
              </a>`
    },
    {
      icon: 'fa fa-phone',
      content: '<a href="tel:+918830230007">+91 8830230007</a>'
    },
    {
      icon: 'fa fa-envelope',
      content: '<a href="mailto:info@reflexfire.in">Reflexfire.in</a>'
    }
  ];

  navLinks: any[] = [];
  ngOnInit(): void {
    this.navLinks.push({ id: 'Contact Us', name: 'Contact Us' });
  }
  isWhatsAppButtonClicked: boolean = false;
  isEmailButtonClicked: boolean = false;
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  sendEmail() {
    const emailControl = this.contactForm.get('email');
    if (emailControl && emailControl.value) {
      const subject = `Inquiry from ${this.contactForm.value.name}`;
      const body = `Hello, This is ${this.contactForm.value.name}. My Phone Number is ${this.contactForm.value.phone}
    I'm interested in your Service.
    Additional details:
    ${this.contactForm.value.message}`;

      const mailtoLink = `mailto:info@reflexfire.in?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink);

      this.contactForm.reset();
    } else {
      this.isEmailButtonClicked = true;
      emailControl?.markAsTouched();
    }
  }

  sendWhatsApp() {
    const phoneControl = this.contactForm.get('phone');
    if (
      phoneControl &&
      phoneControl.value &&
      !phoneControl?.hasError('pattern')
    ) {
      const userMessage = `Hello, this is ${this.contactForm.value.name}, enquiry = ${this.contactForm.value.message}`;
      const whatsappUrl = `https://wa.me/+918830230007?text=${encodeURIComponent(userMessage)}`;
      window.open(whatsappUrl);

      this.contactForm.reset();
    } else {
      this.isWhatsAppButtonClicked = true;
      console.log('Phone number is required for WhatsApp.');
      phoneControl?.markAsTouched();
    }
  }
  openGoogleMaps() {
    const googleMapsUrl = `https://goo.gl/maps/iwwg81PKhTC7J7DJ6`;

    window.open(googleMapsUrl);
  }
  onPhoneButtonClick(number:any) {
    // Replace 'phone-number' with the actual phone number
    window.open(`tel:${number}`, '_blank');
  }
}
