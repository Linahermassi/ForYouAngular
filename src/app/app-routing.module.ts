import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { MenuComponent } from './Components/menu/menu.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ListeventComponent } from './Components/listevent/listevent.component';
import { AddEventComponent } from './Components/add-event/add-event.component';
import { ModifEventComponent } from './Components/modifevent/modifevent.component';
import { ListeventfrontComponent } from './Components/listeventfront/listeventfront.component';
import { SimulateurAgriInssuranceComponent } from './Components/simulateur-agri-inssurance/simulateur-agri-inssurance.component';
import { SetfeedbackComponent } from './Components/setfeedback/setfeedback.component';


const routes: Routes = [
  {path:'homepage',component:HomePageComponent,
},
  {path:'menu',component:MenuComponent,children:[{path:'listevent',component:ListeventComponent}
  ,{path:'addevent',component:AddEventComponent},
  {path:'modifevent/:id',component:ModifEventComponent},]
  
},
  {path:'contact',component:ContactComponent},
  {path:'listeventfront',component:ListeventfrontComponent},
  {path:'simulateurafri',component:SimulateurAgriInssuranceComponent},
  {path:'setfeedback/:id',component:SetfeedbackComponent},
  {path:'',redirectTo:'homepage',pathMatch:'full'},
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
