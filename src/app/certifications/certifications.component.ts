import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {
  navLinks:any[]=[];
  ngOnInit():void{
    this.navLinks.push({id:'certifications',name:'Certifications'});
  }

  certificates = [
    {
      image:
        '../../assets/img/certificates/1.png',
      thumbImage:
        '../../assets/img/certificates/1.png',
    },
    {
      image:
        '../../assets/img/certificates/2.png',
      thumbImage:
        '../../assets/img/certificates/2.png',
    },
    {
      image:
        '../../assets/img/certificates/3.png',
      thumbImage:
        '../../assets/img/certificates/3.png',
    },
    {
      image:
        '../../assets/img/certificates/4.png',
      thumbImage:
        '../../assets/img/certificates/4.png',
    },
  ];

  selectedImageUrl: string | null = null;
  showImageModal = false;

  openImageModal(imageUrl: string) {
    this.selectedImageUrl = imageUrl;
    this.showImageModal = true;
  }

  closeImageModal() {
    this.selectedImageUrl = null;
    this.showImageModal = false;
  }
}
