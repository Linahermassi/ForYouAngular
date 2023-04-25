import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { MenuComponent } from './Components/menu/menu.component';
//import { CreditComponent } from './Components/credit/credit.component';
import { AddCreditComponent } from './Components/add-credit/add-credit.component';
import { ListCreditComponent } from './Components/list-credit/list-credit.component';

//import { ListecontractComponent } from './Components/listecredit/listecontract.component';
//import { ModifContractComponent } from './Components/modif-contract/modif-contract.component';

const routes: Routes = [
  {path:'homepage',component:HomePageComponent},
  {path:'menu',component:MenuComponent,children :[
  
  {path:'addcredit',component:AddCreditComponent},
  {path:'listcredit',component:ListCreditComponent }
]},
  
  {path:'',redirectTo:'homepage',pathMatch:'full'},
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
