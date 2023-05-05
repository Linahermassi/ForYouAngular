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
import { ModifContractComponent } from './Components/modif-contract/modif-contract.component';
import {MatInputModule} from '@angular/material/input'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ContartRenouvComponent } from './Components/contart-renouv/contart-renouv.component'
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaymentComponent } from './Components/payment/payment.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './Components/users/users.component';
import { UserDetailsComponent } from './Components/users/user-details/user-details.component';
import { UserListComponent } from './Components/users/user-list/user-list.component';
import { UserUpdateComponent } from './Components/users/user-update/user-update.component';
import { UserNewComponent } from './Components/users/user-new/user-new.component';
import { JwtModule  } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { SolvabilitiesComponent } from './Components/solvabilities/solvabilities.component';
import { IncomesComponent } from './Components/incomes/incomes.component';

const baseUri = environment.baseUri;

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
    PaymentComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    UsersComponent,
    UserDetailsComponent,
    UserListComponent,
    UserUpdateComponent,
    UserNewComponent,
    SolvabilitiesComponent,
    IncomesComponent,
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
    MatPaginatorModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token'),
        allowedDomains: ['localhost:8081'],
        disallowedRoutes: [`${baseUri}/foryou/authenticate`,
         `${baseUri}/foryou/forgot_password/*`, 
         `${baseUri}/foryou/reset_password/*/*`, 
         `${baseUri}/foryou/register/*`]
      },
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
