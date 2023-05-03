import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditModel } from 'src/app/Models/CreditModel';
import { CreditService } from 'src/app/Services/credit.service';

@Component({
  selector: 'app-modifier-credit',
  templateUrl: './modifier-credit.component.html',
  styleUrls: ['./modifier-credit.component.css']
})
export class ModifierCreditComponent implements OnInit {
  contractid !: any;
  credit : CreditModel =new CreditModel();
  constructor(private c: CreditService, private _router:Router,private route: ActivatedRoute){
    if (this.route.snapshot.paramMap.get('id'))
    this.contractid=this.route.snapshot.paramMap.get('id')
  }
  ngOnInit(): void {
    this.FindCreditByid()
  }
  FindCreditByid(){
    return this.c.FindCreditByid(this.contractid).subscribe((data:CreditModel)=>{
      this.credit=data
      console.log(this.credit)
    });
  }

  EditCredits(){
    return this.c.EditCredits(this.credit).subscribe(()=>this._router.navigateByUrl("/menu/listcredit"));
    
  }
 


}
