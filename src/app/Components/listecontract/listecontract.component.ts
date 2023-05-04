import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ContractModel } from 'src/app/Models/ContractModel';
import { ContractService } from 'src/app/Services/contract.service';

@Component({
  selector: 'app-listecontract',
  templateUrl: './listecontract.component.html',
  styleUrls: ['./listecontract.component.css']
})
export class ListecontractComponent implements OnInit {
  contracts: ContractModel[] = [];
  filteredContracts: ContractModel[] = [];
  p: number = 1;

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
  deleteContract(id:number)
  {
    this._service.DeleteContracts(id).subscribe(
      ()=>this.contracts=this.contracts.filter((c)=>c.contract_id != id))
      this._service.getContracts().subscribe(data=>{
        this.contracts=data;}
      )
  }
 /* deleteContract(id:number) {
    this._service.DeleteContracts(id).subscribe(()=>this.route.navigateByUrl('/listcredit'));

  }*/

}
