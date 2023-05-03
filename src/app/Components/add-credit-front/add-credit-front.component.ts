import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditModel } from 'src/app/Models/CreditModel';
import { CreditService } from 'src/app/Services/credit.service';

@Component({
  selector: 'app-add-credit-front',
  templateUrl: './add-credit-front.component.html',
  styleUrls: ['./add-credit-front.component.css']
})
export class AddCreditFrontComponent implements OnInit {
  credit : CreditModel =new CreditModel();
  
  
  constructor(private c: CreditService, private _router:Router){
  }
  ngOnInit(): void {
  }
  AddCredits(){
    return this.c.AddCredits(this.credit).subscribe()
    
   
  }
  


}
 
