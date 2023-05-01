import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { MenuComponent } from './Components/menu/menu.component';
import { ContactComponent } from './Components/contact/contact.component';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';

const routes: Routes = [
  {path:'homepage',component:HomePageComponent},
  {path:'menu',component:MenuComponent},
  {path:'contact',component:ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path:'',redirectTo:'homepage',pathMatch:'full'},
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
