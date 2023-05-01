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
import { LoginComponent } from './Components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { AddContractComponent } from './Components/add-contract/add-contract.component';
import { ListecontractComponent } from './Components/listecontract/listecontract.component';
import { HttpClientModule } from '@angular/common/http';
import { ModifContractComponent } from './Components/modif-contract/modif-contract.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ContartRenouvComponent } from './Components/contart-renouv/contart-renouv.component'
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaymentComponent } from './Components/payment/payment.component'


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
    LoginComponent,
    SignUpComponent,
    AddContractComponent,
    ListecontractComponent,
    ModifContractComponent,
    ContartRenouvComponent,
    PaymentComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatAutocompleteModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
