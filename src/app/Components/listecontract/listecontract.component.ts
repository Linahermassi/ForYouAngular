import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContractModel } from 'src/app/Models/ContractModel';
import { ContractService } from 'src/app/Services/contract.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-listecontract',
  templateUrl: './listecontract.component.html',
  styleUrls: ['./listecontract.component.css']
})
export class ListecontractComponent implements OnInit {

  contracts: ContractModel[] = [];
  filteredContracts: ContractModel[] = [];


  listContract!: ContractModel[];
  constructor( private _service:ContractService, private route :Router){}
  ngOnInit(): void {
    this.GetContracts()
  }

  GetContracts(){
    return this._service.getContracts().subscribe(res=>{console.log(res);
    this.listContract=res});
  }
  goTo(id:any){
    this.route.navigateByUrl("menu/modifcontract/"+id)
  }

}
