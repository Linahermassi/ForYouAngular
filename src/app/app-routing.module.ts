import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { MenuComponent } from './Components/menu/menu.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AddReclamationComponent } from './Components/add-reclamation/add-reclamation.component';
import { ListeReclamationComponent } from './Components/listereclamation/listereclamation.component';
import { ModifReclamationComponent } from './Components/modif-reclamation/modif-reclamation.component';

const routes: Routes = [
  {path:'homepage',component:HomePageComponent},
  {path:'menu',component:MenuComponent,
  children:[{path:'addreclamation',component:AddReclamationComponent},
  {path:'listreclamation',component:ListeReclamationComponent},
  {path:'editreclamation',component:ModifReclamationComponent},]},
  {path:'contact',component:ContactComponent},
  {path:'',redirectTo:'homepage',pathMatch:'full'},
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
