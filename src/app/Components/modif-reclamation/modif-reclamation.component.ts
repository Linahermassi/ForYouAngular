import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ReclamationModel } from 'src/app/Models/ReclamationModel';
import { ReclamationService } from 'src/app/Services/reclamation.service';

@Component({
  selector: 'app-modif-reclamation',
  templateUrl: './modif-reclamation.component.html',
  styleUrls: ['./modif-reclamation.component.css']
})
export class ModifReclamationComponent implements OnInit{
  reclamation : ReclamationModel =new ReclamationModel();
  constructor(private r: ReclamationService, private _router:Router){
  }
  ngOnInit(): void {
  }
  EditReclamations(){
    return this.r.EditReclamations(this.reclamation).subscribe(()=>this._router.navigateByUrl("/menu/listreclamation"));
  }

  EtatOptions=["sentiment_very_dissatisfied","sentiment_dissatisfied","sentiment_neutral","sentiment_satisfied","sentiment_very_satisfied"]
  StatutOptions=["EN_ATTENTE","EN_COURS","TRAITEE"]

}
