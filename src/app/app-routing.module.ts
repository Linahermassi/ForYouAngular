import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { MenuComponent } from './Components/menu/menu.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AddContractComponent } from './Components/add-contract/add-contract.component';
import { ContractComponent } from './Components/contract/contract.component';
import { ListecontractComponent } from './Components/listecontract/listecontract.component';
import { ModifContractComponent } from './Components/modif-contract/modif-contract.component';

const routes: Routes = [
  {path:'homepage',component:HomePageComponent},
  {path:'menu',component:MenuComponent,children :[
  {path:'listcontract',component:ListecontractComponent},
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
