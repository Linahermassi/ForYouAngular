import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
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
import { AddContractComponent } from './Components/add-contract/add-contract.component';
import { ListecontractComponent } from './Components/listecontract/listecontract.component';
import { HttpClientModule } from '@angular/common/http';
import { ModifContractComponent } from './Components/modif-contract/modif-contract.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ContartRenouvComponent } from './Components/contart-renouv/contart-renouv.component'
import { PaymentComponent } from './Components/payment/payment.component';
import { ContratClientComponent } from './Components/contrat-client/contrat-client.component'
import { MatIconModule } from '@angular/material/icon';


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
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
