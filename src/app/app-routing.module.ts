import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { MenuComponent } from './Components/menu/menu.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AddContractComponent } from './Components/add-contract/add-contract.component';
import { ListecontractComponent } from './Components/listecontract/listecontract.component';
import { ModifContractComponent } from './Components/modif-contract/modif-contract.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { ContratClientComponent } from './Components/contrat-client/contrat-client.component';
import { ContartRenouvComponent } from './Components/contart-renouv/contart-renouv.component';

const routes: Routes = [
  {path:'homepage',component:HomePageComponent},
  {path:'payment',component:PaymentComponent},
  {path:'contratClient',component:ContratClientComponent},
  {path:'menu',component:MenuComponent,children :[
  {path:'listcontract',component:ListecontractComponent},
  {path:'renouvcontract',component:ContartRenouvComponent},
  {path:'addcontract',component:AddContractComponent},
  {path:'modifcontract/:id',component:ModifContractComponent},
]},
  {path:'contact',component:ContactComponent},
  {path:'',redirectTo:'homepage',pathMatch:'full'},
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
