import { Component, OnInit } from '@angular/core';
import { CreditModel } from 'src/app/Models/CreditModel';
import { CreditService } from 'src/app/Services/credit.service';
import { ContractModel } from 'src/app/Models/ContractModel';
import { ContractService } from 'src/app/Services/contract.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  listCredit!: CreditModel[];
  listContract!: ContractModel[];
  constructor( private _service2:CreditService,private _service:ContractService){}
  ngOnInit(): void {

  }

  GetCredits(){
    return this._service2.getCredits().subscribe(res=>{console.log(res);
    this.listCredit=res});
  }
  GetContracts(){
    return this._service.getContracts().subscribe(res=>{console.log(res);
    this.listContract=res});
  }

}
