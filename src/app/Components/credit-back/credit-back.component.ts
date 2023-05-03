import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CreditModel } from 'src/app/Models/CreditModel';
import { CreditService } from 'src/app/Services/credit.service';

@Component({
  selector: 'app-credit-back',
  templateUrl: './credit-back.component.html',
  styleUrls: ['./credit-back.component.css']
})
export class CreditBackComponent implements OnInit {
  n!:number;
  p!:number;
  type!:string;
  region!:string;
  
  
  constructor( private _service:CreditService, private route :Router){}
  ngOnInit(): void {
    this.GetRentability();
   
  }
  
  GetRentability(){
    this._service.Rentability().subscribe(res=>{console.log(res);
      this.n=res});}

  GetProfit(){
    this._service.Profit(this.type,this.region).subscribe(res=>{console.log(res);
      this.p=res});
  }    
  
  
  
    
  

  

}
