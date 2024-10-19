import { ChangeDetectorRef, Component, Input, input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-guards-section',
  templateUrl: './guards-section.component.html',
  styleUrl: './guards-section.component.css'
})
export class GuardsSectionComponent {
  navLinks:any[]=[];
  @Input() showSlider: any = false;

  constructor(private router: Router,private changeDetectorRef: ChangeDetectorRef) {}
  guards:any = []
  ngOnInit():void{
    for (let i = 1; i <= this.showSlider; i++) {
      this.guards.push({
        image: `../../assets/img/guards/${i}.jpeg`,
        thumbImage: `../../assets/img/guards/${i}.jpeg`,
      });
    }
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
