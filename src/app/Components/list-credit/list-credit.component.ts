import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CreditModel } from 'src/app/Models/CreditModel';
import { CreditService } from 'src/app/Services/credit.service';

@Component({
  selector: 'app-list-credit',
  templateUrl: './list-credit.component.html',
  styleUrls: ['./list-credit.component.css']
})
export class ListCreditComponent implements OnInit {
  listCredit!: CreditModel[];
  list!:number[][];
  constructor( private _service:CreditService, private route :Router){}
  ngOnInit(): void {
    this.GetCredits()
  }

  GetCredits(){
    return this._service.getCredits().subscribe(res=>{console.log(res);
    this.listCredit=res});
  }
  goTo(id:any){
    this.route.navigateByUrl("menu/modifiercredit/"+id)
  }
  deleteCredit(id:number) {
    this._service.DeleteCredit(id).subscribe(()=>this.route.navigateByUrl('/listcredit'));
    
  }
  

}