import { Component, OnInit } from '@angular/core';
import { CreditModel } from 'src/app/Models/CreditModel';
import { CreditService } from 'src/app/Services/credit.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  listCredit!: CreditModel[];
  constructor( private _service:CreditService){}
  ngOnInit(): void {

  }

  GetCredits(){
    return this._service.getCredits().subscribe(res=>{console.log(res);
    this.listCredit=res});
  }

}
