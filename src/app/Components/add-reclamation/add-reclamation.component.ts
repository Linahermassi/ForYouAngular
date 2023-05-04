import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ReclamationModel } from 'src/app/Models/ReclamationModel';
import { ReclamationService } from 'src/app/Services/reclamation.service';

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent implements OnInit {
  reclamation : ReclamationModel =new ReclamationModel();
  constructor(private r: ReclamationService, private _router:Router){
  }
  ngOnInit(): void {
  }
  AddReclamations(){
    return this.r.AddReclamations(this.reclamation).subscribe(()=>this._router.navigateByUrl("/addreclamtion"));
  }

  EtatOptions=["sentiment_very_dissatisfied","sentiment_dissatisfied","sentiment_neutral","sentiment_satisfied","sentiment_very_satisfied"]
  StatutOptions=["EN_ATTENTE","EN_COURS","TRAITEE"]

}