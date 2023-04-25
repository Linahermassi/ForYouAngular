import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreditModel } from '../Models/CreditModel';
@Injectable({
  providedIn: 'root'
})
export class CreditService {
  readonly Api_Url ="http://localhost:8081"
  readonly Endpoint_Getcredit ="/foryou/Credit/afficherAllCredits"
  readonly Endpoint_Addcredit ="/foryou/Credit/ajouterCredit"
  readonly Endpoint_Editcredit ="/foryou/Credit/ModifierCredit"
  readonly Endpoint_Deletecredit ="/foryou/Credit/SupprimerCredit"


  constructor(private httpClient : HttpClient) { }
  getCredits(){
    return this.httpClient.get<CreditModel[]>(this.Api_Url+this.Endpoint_Getcredit)
  }
  AddCredits(credit:CreditModel){
    return this.httpClient.post<string>(this.Api_Url+this.Endpoint_Addcredit,credit)
  }
  EditCredits(credit:CreditModel){
    return this.httpClient.put<string>(this.Api_Url+this.Endpoint_Editcredit,credit)
  }
  DeleteCredits(){
    this.httpClient.delete(this.Api_Url+this.Endpoint_Deletecredit)
  }
}