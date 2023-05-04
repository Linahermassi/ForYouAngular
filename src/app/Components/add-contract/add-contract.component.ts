import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContractModel } from 'src/app/Models/ContractModel';
import { ContractService } from 'src/app/Services/contract.service';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css']
})
export class AddContractComponent implements OnInit {
  contract : ContractModel =new ContractModel();
  constructor(private c: ContractService, private _router:Router){
  }
  ngOnInit(): void {
  }
  AddContracts(){
    return this.c.AddContracts(this.contract).subscribe(()=>this._router.navigateByUrl("/menu/listcontract"));
  }

  formalityOptions=["BankCard","BankCheck","BankTransfer"]
  typeOptions=["ANNUEL","SEMESTRIEL","TRIMESTRIEL","MENSUEL "]

}
