import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';
import { ContractComponent } from './Components/contract/contract.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ReclamationComponent } from './Components/reclamation/reclamation.component';
import { AddReclamationComponent } from './Components/add-reclamation/add-reclamation.component';
import { ListeReclamationComponent } from './Components/listereclamation/listereclamation.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ModifReclamationComponent } from './Components/modif-reclamation/modif-reclamation.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContractComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    ContactComponent,
    HomePageComponent,
    ReclamationComponent,
    AddReclamationComponent,
    ListeReclamationComponent,
    ModifReclamationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
