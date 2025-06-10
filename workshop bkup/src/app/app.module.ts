import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LayersComponent } from './layouts/layers/layers.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ServicesComponent } from './pages/services/services.component';
import { BookServicesComponent } from './pages/book-services/book-services.component';
import { RegisterComponent } from './pages/register/register.component';
import { ServiceInfoComponent } from './pages/service-info/service-info.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TrackOrdersComponent } from './pages/track-orders/track-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayersComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    BookServicesComponent,
    RegisterComponent,
    ServiceInfoComponent,
    ContactUsComponent,
    TrackOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
