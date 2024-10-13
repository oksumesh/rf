import { ChangeDetectorRef, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-guards-section',
  templateUrl: './guards-section.component.html',
  styleUrl: './guards-section.component.css'
})
export class GuardsSectionComponent {
  navLinks:any[]=[];
  showSlider: boolean = false;

  constructor(private router: Router,private changeDetectorRef: ChangeDetectorRef) {}
  guards:any = []
  ngOnInit():void{
    this.guards = [
      {
        image:
          '../../assets/img/guards/1.png',
        thumbImage:
          '../../assets/img/guards/1.png',
      },
      {
        image:
          '../../assets/img/guards/2.png',
        thumbImage:
          '../../assets/img/guards/2.png',
      },
      {
        image:
          '../../assets/img/guards/3.png',
        thumbImage:
          '../../assets/img/guards/3.png',
      },
      {
        image:
          '../../assets/img/guards/4.png',
        thumbImage:
          '../../assets/img/guards/4.png',
      },
    ];
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showSlider = event.url === '/' || event.url === '/home';
        this.guards = this.guards.slice(0,2)
      }
      this.changeDetectorRef.detectChanges();
    });
    console.log(this.guards.length);
    
  }


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
