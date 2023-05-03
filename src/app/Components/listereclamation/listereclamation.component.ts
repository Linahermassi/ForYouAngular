import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ReclamationModel } from 'src/app/Models/ReclamationModel';
import { ReclamationService } from 'src/app/Services/reclamation.service';

@Component({
  selector: 'app-listereclamation',
  templateUrl: './listereclamation.component.html',
  styleUrls: ['./listereclamation.component.css']
})
export class ListeReclamationComponent implements OnInit {
  listReclamation!: ReclamationModel[];
  constructor( private _service:ReclamationService, private route :Router){}
  ngOnInit(): void {
    this.GetReclamations()
  }

  GetReclamations(){
    return this._service.getReclamations().subscribe(res=>{console.log(res);
    this.listReclamation=res});
  }

  deleteReclamation(id:number) {
    this._service.DeleteReclamations(id).subscribe(() => {
      this.GetReclamations(); // Appel de la méthode pour récupérer les réclamations après la suppression réussie
      this.route.navigateByUrl('/menu/listreclamation');
  });
  window.location.reload();
  }

  updateReclamationStatus(id:number) {
    this._service.UpdateReclamationStatus(id).subscribe(() => {
      this.GetReclamations(); // Appel de la méthode pour récupérer les réclamations après la suppression réussie
      this.route.navigateByUrl('/menu/listreclamation');
  });
  window.location.reload();
  }
  
  goTo(id:any){
    this.route.navigateByUrl("/menu/listreclamation")
  }

}
