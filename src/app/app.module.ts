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
   
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }