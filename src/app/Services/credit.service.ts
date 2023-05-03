import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreditModel } from '../Models/CreditModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CreditService {
  readonly Api_Url ="http://localhost:8081"
  readonly Endpoint_Getcredit ="/foryou/Credit/afficherAllCredits"
  readonly Endpoint_Getcredit1 ="/foryou/Credit/afficherCreditById"
  readonly Endpoint_Addcredit ="/foryou/Credit/ajouterCredit"
  readonly Endpoint_Editcredit ="/foryou/Credit/ModifierCredit"
  readonly Endpoint_Deletecredit ="/foryou/Credit/SupprimerCreditById"
  readonly Endpoint_Rentability ="/foryou/Credit/Rentability"
  readonly Endpoint_Profit ="/foryou/Credit/Profit"
  readonly Endpoint_Calcul1 ="/foryou/Credit/Calcul1Credit"
  readonly Endpoint_Calcul2 ="/foryou/Credit/Calcul2Credit"
  readonly Endpoint_Status ="/foryou/Credit/Status"
  readonly Endpoint_Pdf ="/foryou/Credit/Pdf"


  constructor(private httpClient : HttpClient) { }
  
  getCredits(){
    return this.httpClient.get<CreditModel[]>(this.Api_Url+this.Endpoint_Getcredit)
  }
  AddCredits(credit:CreditModel){
    return this.httpClient.post<any>(this.Api_Url+this.Endpoint_Addcredit,credit)
  }
  FindCreditByid(id:string){
    let ids:number = +id
    return this.httpClient.get<CreditModel>(this.Api_Url+this.Endpoint_Getcredit1+"/"+ids)
    
  }
  EditCredits(credit:CreditModel){
    return this.httpClient.put<CreditModel>(this.Api_Url+this.Endpoint_Editcredit,credit)
   
  }

  DeleteCredit(id:number){
    let ids:number = +id
    return this.httpClient.delete(this.Api_Url+this.Endpoint_Deletecredit+'?creditId='+ids)
  }

  Rentability(){
    
    return this.httpClient.get<number>(this.Api_Url+this.Endpoint_Rentability)
  }

  Profit(type:string,region:string){
    return this.httpClient.get<number>(this.Api_Url+this.Endpoint_Profit+"/"+type+"/"+region)
    
  }
  

  Calcul1(id:number){
    return this.httpClient.get<number[][]>(this.Api_Url+this.Endpoint_Calcul1+"/"+id)

  }
  Calcul2(id:number){
    return this.httpClient.get<number[][]>(this.Api_Url+this.Endpoint_Calcul2+"/"+id)

  }

  Status(id:number){
    return this.httpClient.get<any>(this.Api_Url+this.Endpoint_Status+"/"+id)

  }
  exportPDF(id: number): Observable<Blob> {
    return this.httpClient.get(this.Api_Url+this.Endpoint_Pdf+"/"+id,{ responseType: 'blob' });
 
}}