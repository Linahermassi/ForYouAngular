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
import { ListeventComponent } from './Components/listevent/listevent.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEventComponent } from './Components/add-event/add-event.component';
import { FormsModule } from '@angular/forms';
import { ModifEventComponent } from './Components/modifevent/modifevent.component';
import { ListeventfrontComponent } from './Components/listeventfront/listeventfront.component';
import { EventCardComponent } from './Components/event-card/event-card.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SimulateurAgriInssuranceComponent } from './Components/simulateur-agri-inssurance/simulateur-agri-inssurance.component';
import {QRCodeModule} from 'angularx-qrcode';
import { SetfeedbackComponent } from './Components/setfeedback/setfeedback.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//import { QRCodeModule } from 'ngx-qrcode2';
//import {MatInputModule} from '@angular/material/input';
//import {MatAutocompleteModule} from '@angular/material/autocomplete';
//import { MatPaginatorModule } from '@angular/material/paginator';

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
    ListeventComponent,
    AddEventComponent,
    ModifEventComponent,
    ListeventfrontComponent,
    EventCardComponent,
    SimulateurAgriInssuranceComponent,
    SetfeedbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    MatCardModule,
    QRCodeModule,
    FontAwesomeModule,

  ],
  exports: [
    ListeventfrontComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
