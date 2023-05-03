import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditModel } from 'src/app/Models/CreditModel';
import { CreditService } from 'src/app/Services/credit.service';

@Component({
  selector: 'app-list-credit-front',
  templateUrl: './list-credit-front.component.html',
  styleUrls: ['./list-credit-front.component.css']
})
export class ListCreditFrontComponent implements OnInit{
  Credit!: CreditModel;

 
  constructor( private _service:CreditService, private route :Router,private route1 :ActivatedRoute){}
  ngOnInit(): void {
    this.GetCredit(58)
    //this.GetCredit(this.route1.snapshot.paramMap.get('id'))
   
  }

  GetCredit(id:any){
    return this._service.FindCreditByid(id).subscribe(res=>{console.log(res);
    this.Credit=res});
  }
}
