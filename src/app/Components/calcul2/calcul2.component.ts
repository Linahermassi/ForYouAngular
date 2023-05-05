import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditService } from 'src/app/Services/credit.service';

@Component({
  selector: 'app-calcul2',
  templateUrl: './calcul2.component.html',
  styleUrls: ['./calcul2.component.css']
})
export class Calcul2Component implements OnInit{
  
  list!:number[][];
  constructor( private _service:CreditService, private route :Router,private route1 :ActivatedRoute){}
  ngOnInit(): void {
  this.Calcul2(this.route1.snapshot.paramMap.get('id'))
  }
  Calcul2(id:any){
    this._service.Calcul2(id).subscribe((res=>{console.log(res);
      this.list=res}));
  }  
}