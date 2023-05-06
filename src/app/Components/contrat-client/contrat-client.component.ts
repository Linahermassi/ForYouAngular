import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { ContractService } from 'src/app/Services/contract.service';


@Component({
  selector: 'app-contrat-client',
  templateUrl: './contrat-client.component.html',
  styleUrls: ['./contrat-client.component.css']
})
export class ContratClientComponent implements OnInit{
  list !:number[];
  showScore: boolean = false;
  user :User;
  constructor( private _service:ContractService, private route :Router){}
  ngOnInit(): void {
    this.GetScore()
    const currentUser = this._service.getCurrentUsername();
    console.log(currentUser);
  }
  GetScore(){
    this._service.getScore(2,5).subscribe((res=>{console.log(res);
      this.list=res}));
  }

}
