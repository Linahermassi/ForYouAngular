import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContractModel } from '../Models/ContractModel';
@Injectable({
  providedIn: 'root'
})
export class ContractService {
  readonly Api_Url ="http://localhost:8081"
  readonly Endpoint_Getcontract ="/foryou/Contract/afficherAll"
  readonly Endpoint_Addcontract ="/foryou/Contract/ajouterContract"
  readonly Endpoint_Editcontract ="/foryou/Contract/ModifierContract"
  readonly Endpoint_Deletecontract ="/foryou/Contract/SupprimerContract"


  constructor(private httpClient : HttpClient) { }
  getContracts(){
    return this.httpClient.get<ContractModel[]>(this.Api_Url+this.Endpoint_Getcontract)
  }
  AddContracts(contract:ContractModel){
    return this.httpClient.post<string>(this.Api_Url+this.Endpoint_Addcontract,contract)
  }
  EditContracts(contract:ContractModel){
    return this.httpClient.put<string>(this.Api_Url+this.Endpoint_Addcontract,contract)
  }
  DeleteContracts(){
    this.httpClient.delete(this.Api_Url+this.Endpoint_Deletecontract)
  }
}

