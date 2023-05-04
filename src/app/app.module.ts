import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { AddCreditComponent } from './Components/add-credit/add-credit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListCreditComponent } from './Components/list-credit/list-credit.component';
import { ModifierCreditComponent } from './Components/modifier-credit/modifier-credit.component';
import { CreditBackComponent } from './Components/credit-back/credit-back.component';
import { Calcul1Component } from './Components/calcul1/calcul1.component';
import { AddCreditFrontComponent } from './Components/add-credit-front/add-credit-front.component';

import { Calcul2Component } from './Components/calcul2/calcul2.component';
import { ListCreditFrontComponent } from './Components/list-credit-front/list-credit-front.component';

import { StatusCreditComponent } from './Components/status-credit/status-credit.component';

import { ListeventComponent } from './Components/listevent/listevent.component';

import { AddEventComponent } from './Components/add-event/add-event.component';

import { ModifEventComponent } from './Components/modifevent/modifevent.component';
import { ListeventfrontComponent } from './Components/listeventfront/listeventfront.component';
import { EventCardComponent } from './Components/event-card/event-card.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SimulateurAgriInssuranceComponent } from './Components/simulateur-agri-inssurance/simulateur-agri-inssurance.component';
import {QRCodeModule} from 'angularx-qrcode';
import { SetfeedbackComponent } from './Components/setfeedback/setfeedback.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListinscriComponent } from './Components/listinscri/listinscri.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReclamationComponent } from './Components/reclamation/reclamation.component';
import { AddReclamationComponent } from './Components/add-reclamation/add-reclamation.component';
import { ListeReclamationComponent } from './Components/listereclamation/listereclamation.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ModifReclamationComponent } from './Components/modif-reclamation/modif-reclamation.component';
import { ContactComponent } from './Components/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddContractComponent } from './Components/add-contract/add-contract.component';
import { ListecontractComponent } from './Components/listecontract/listecontract.component';
import { ModifContractComponent } from './Components/modif-contract/modif-contract.component';
import { ContartRenouvComponent } from './Components/contart-renouv/contart-renouv.component'
import { PaymentComponent } from './Components/payment/payment.component';
import { ContratClientComponent } from './Components/contrat-client/contrat-client.component'
//import { QRCodeModule } from 'ngx-qrcode2';
//import {MatInputModule} from '@angular/material/input';
//import {MatAutocompleteModule} from '@angular/material/autocomplete';
//import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    AddCreditComponent,
    ListCreditComponent,
    NotFoundComponent,
    ModifierCreditComponent,
    CreditBackComponent,
    Calcul1Component,
    AddCreditFrontComponent,
    Calcul2Component,
    ListCreditFrontComponent,
    StatusCreditComponent,
    HomePageComponent,
    ListeventComponent,
    AddEventComponent,
    ModifEventComponent,
    ListeventfrontComponent,
    EventCardComponent,
    SimulateurAgriInssuranceComponent,
    SetfeedbackComponent,
    ListinscriComponent,
    ContactComponent,
    HomePageComponent,
    ReclamationComponent,
    AddReclamationComponent,
    ListeReclamationComponent,
    ModifReclamationComponent,
    AddContractComponent,
    ListecontractComponent,
    ModifContractComponent,
    ContartRenouvComponent,
    PaymentComponent,
    ContratClientComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    CommonModule,
    MatCardModule,
    QRCodeModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    NgxCaptchaModule,

  ],
  exports: [
    ListeventfrontComponent,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }