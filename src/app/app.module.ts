import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { RatingComponent } from './rating/rating.component';
import { ProjectsComponent } from './projects/projects.component';
import { WhyusComponent } from './whyus/whyus.component';
import { ClientsComponent } from './clients/clients.component';
import { TouchComponent } from './touch/touch.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    RatingComponent,
    ProjectsComponent,
    WhyusComponent,
    ClientsComponent,
    TouchComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
