import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContractModel } from 'src/app/Models/ContractModel';
import { ContractService } from 'src/app/Services/contract.service';

@Component({
  selector: 'app-contart-renouv',
  templateUrl: './contart-renouv.component.html',
  styleUrls: ['./contart-renouv.component.css']
})
export class ContartRenouvComponent implements OnInit {
  contracts: ContractModel[] = [];
  filteredContracts: ContractModel[] = [];
  p: number = 1;

  listContract!: ContractModel[];
  constructor( private _service:ContractService, private route :Router){}
  ngOnInit(): void {
    this.GetRenewableContract()
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
      window.location.reload();
  }
  sortReclamations() {
    this.listContract.sort((a, b) => {
      return new Date(a.exprirationDate).getTime() - new Date(b.exprirationDate).getTime();
    });
  }
  GetRenewableContract(){
    return this._service.getRenewableContract().subscribe(res=>{console.log(res);
    this.listContract=res});

  }



}
