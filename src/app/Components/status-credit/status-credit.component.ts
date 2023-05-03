import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditModel } from 'src/app/Models/CreditModel';
import { StateCredit } from 'src/app/Models/StateCredit';
import { CreditService } from 'src/app/Services/credit.service';
import { saveAs } from 'file-saver';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-status-credit',
  templateUrl: './status-credit.component.html',
  styleUrls: ['./status-credit.component.css']
})
export class StatusCreditComponent implements  OnInit {
  Credit!: CreditModel;
  Statecredit!:StateCredit;

 
  constructor( private _service:CreditService, private route :Router,private route1 :ActivatedRoute){}
  ngOnInit(): void {
   
    this.GetCredit(this.route1.snapshot.paramMap.get('id'))
   
  }

  GetCredit(id:any){
    return this._service.FindCreditByid(id).subscribe(res=>{console.log(res);
    this.Credit=res});
  }
  exportPDF(id: any) {
    this._service.exportPDF(id).subscribe(
        (data: Blob) => {
            const filename = 'credit.pdf';
            saveAs(data, filename);
        },
        error => console.error(error)
    );
}
}
