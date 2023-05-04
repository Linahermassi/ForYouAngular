import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReclamationModel } from 'src/app/Models/ReclamationModel';
import { ReclamationService } from 'src/app/Services/reclamation.service';

@Component({
  selector: 'app-modif-reclamation',
  templateUrl: './modif-reclamation.component.html',
  styleUrls: ['./modif-reclamation.component.css']
})
export class ModifReclamationComponent implements OnInit{
  reclamationid !: any;
  reclamation : ReclamationModel =new ReclamationModel();
  constructor(private r: ReclamationService, private _router:Router,private route: ActivatedRoute){
    if (this.route.snapshot.paramMap.get('id'))
    this.reclamationid=this.route.snapshot.paramMap.get('id')
  }
  ngOnInit(): void {
    this.FindReclamationByid()
  }
  FindReclamationByid(){
    return this.r.FindReclamationByid(this.reclamationid).subscribe((data:ReclamationModel)=>{
      this.reclamation=data
      console.log(this.reclamation)
    });
  }
  EditReclamations(){
    return this.r.EditReclamations(this.reclamation).subscribe(()=>this._router.navigateByUrl("/menu/listreclamation"));
  }

  EtatOptions=["sentiment_very_dissatisfied","sentiment_dissatisfied","sentiment_neutral","sentiment_satisfied","sentiment_very_satisfied"]
  StatutOptions=["EN_ATTENTE","EN_COURS","TRAITEE"]

}
