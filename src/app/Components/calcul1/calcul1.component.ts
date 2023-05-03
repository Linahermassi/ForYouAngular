import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditService } from 'src/app/Services/credit.service';

@Component({
  selector: 'app-calcul1',
  templateUrl: './calcul1.component.html',
  styleUrls: ['./calcul1.component.css']
})
export class Calcul1Component implements OnInit{
  
  list!:number[][];
  id!:any;
  constructor( private _service:CreditService, private route :Router,private route1 :ActivatedRoute){}
  ngOnInit(): void {
     this.id = this.route1.snapshot.paramMap.get('id');
    this.Calcul1(this.id);
    this.Status(this.id);
  }
  Calcul1(id:any){
    this._service.Calcul1(id).subscribe((res=>{console.log(res);
      this.list=res}));
  } 
  Status(id:any){
    this._service.Status(id).subscribe();
    
  } 
}
