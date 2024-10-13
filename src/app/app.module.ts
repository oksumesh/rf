import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { TrainersComponent } from './trainers/trainers.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { OurServicesComponent } from './sections/our-services/our-services.component';
import { GuardsSectionComponent } from './sections/guards-section/guards-section.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CertificationsComponent } from './certifications/certifications.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { BannerComponent } from './sections/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactUsComponent,
    HomeComponent,
    ServicesComponent,
    TrainersComponent,
    HeaderComponent,
    FooterComponent,
    OurServicesComponent,
    GuardsSectionComponent,
    CertificationsComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
