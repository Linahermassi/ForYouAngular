import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CreditModel } from 'src/app/Models/CreditModel';
import { CreditService } from 'src/app/Services/credit.service';

@Component({
  selector: 'app-add-credit',
  templateUrl: './add-credit.component.html',
  styleUrls: ['./add-credit.component.css']
})
export class AddCreditComponent implements OnInit {
  credit : CreditModel =new CreditModel();
  msg!:any;
  constructor(private c: CreditService, private _router:Router){
  }
  ngOnInit(): void {
  }
  AddCredits(){
     this.c.AddCredits(this.credit).subscribe(()=>this._router.navigateByUrl("/menu/listcredit"));
    console.log()
   
  }
  Status(id:number){
    return this.c.Status(id).subscribe(res=>{console.log(res);
      this.msg=res});
  }
  

  
}