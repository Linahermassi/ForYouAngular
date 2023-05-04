import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { MenuComponent } from './Components/menu/menu.component';
import { AddCreditComponent } from './Components/add-credit/add-credit.component';
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
import { SimulateurAgriInssuranceComponent } from './Components/simulateur-agri-inssurance/simulateur-agri-inssurance.component';
import { SetfeedbackComponent } from './Components/setfeedback/setfeedback.component';
import { ListinscriComponent} from './Components/listinscri/listinscri.component';

const routes: Routes = [
  {path:'homepage',component:HomePageComponent},
    {path:'addcreditfront',component:AddCreditFrontComponent},
    {path:'simulateur1/:id',component:Calcul1Component },
    {path:'listcreditfront/:id',component:ListCreditFrontComponent },
    {path:'simulateur2/:id',component:Calcul2Component },
    {path:'Status/:id',component:StatusCreditComponent },
    {path:'listeventfront',component:ListeventfrontComponent},
    {path:'simulateurafri',component:SimulateurAgriInssuranceComponent},
    {path:'setfeedback/:id',component:SetfeedbackComponent},
   
    
    
  
  {path:'menu',component:MenuComponent,children :[
  
  {path:'addcredit',component:AddCreditComponent},
  {path:'listcredit',component:ListCreditComponent },
  {path:'modifiercredit/:id',component:ModifierCreditComponent},
  {path:'credit',component:CreditBackComponent },
  {path:'listevent',component:ListeventComponent}
  ,{path:'addevent',component:AddEventComponent},
  {path:'listinscri',component:ListinscriComponent},
  {path:'modifevent/:id',component:ModifEventComponent}
  //{path:'simulateur1/:id',component:Calcul1Component },
 
  //{path:'simulateur2/:id',component:Calcul2Component },
 
  

]
},
{path:'',redirectTo:'homepage',pathMatch:'full'},
{path:'**',component:NotFoundComponent}
];
  




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
