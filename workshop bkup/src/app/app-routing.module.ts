import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiceInfoComponent } from './pages/service-info/service-info.component';
import { ServicesComponent } from './pages/services/services.component';
import { RegisterComponent } from './pages/register/register.component';
import { BookServicesComponent } from './pages/book-services/book-services.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TrackOrdersComponent } from './pages/track-orders/track-orders.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  { path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"service-info/:info",component:ServiceInfoComponent},
  {path:"services",component:ServicesComponent},
  {path:"register",component:RegisterComponent},
  {path:"book-services",component:BookServicesComponent},
  {path:"about-us",component:ContactUsComponent},
  {path:"track-orders",component:TrackOrdersComponent},
  {path:"contactUsForm",component:ContactUsComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
