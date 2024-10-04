import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TrainersComponent } from './trainers/trainers.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactUsComponent },
  {path:'trainers',component:TrainersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
