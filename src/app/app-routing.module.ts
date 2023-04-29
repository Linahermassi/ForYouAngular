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


const routes: Routes = [
  {path:'homepage',component:HomePageComponent,children:[{path:'listeventfront',component:ListeventfrontComponent},]
},
  {path:'menu',component:MenuComponent,children:[{path:'listevent',component:ListeventComponent}
  ,{path:'addevent',component:AddEventComponent},
  {path:'modifevent/:id',component:ModifEventComponent},]
  
},
  {path:'contact',component:ContactComponent},
  {path:'listeventfront',component:ListeventfrontComponent},
  {path:'',redirectTo:'homepage',pathMatch:'full'},
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
