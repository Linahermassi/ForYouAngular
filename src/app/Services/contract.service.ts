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
  readonly Endpoint_Deletecontract ="/foryou/Contract/SupprimerContractById/"
  readonly Endpoint_FindcontractByid ="/foryou/Contract/afficherContractById/"
  readonly Endpoint_GetRenewableContract ="/foryou/Contract/afficherRenewableContract"
  readonly Endpoint_GetScore ="/foryou/Score/Scoring/"


  constructor(private httpClient : HttpClient) { }
  getContracts(){
    return this.httpClient.get<ContractModel[]>(this.Api_Url+this.Endpoint_Getcontract)
  }
  AddContracts(contract:ContractModel){
    return this.httpClient.post<string>(this.Api_Url+this.Endpoint_Addcontract,contract)
  }
  FindContractByid(id:string){
    let ids:number = +id
    return this.httpClient.get<ContractModel>(this.Api_Url+this.Endpoint_FindcontractByid+ids)
  }
  EditContracts(contract:ContractModel){
    return this.httpClient.put(this.Api_Url+this.Endpoint_Editcontract,contract)
  }
  DeleteContracts(id:number){
    let ids:number = +id
    return this.httpClient.delete(this.Api_Url+this.Endpoint_Deletecontract+ids)
  }
  getRenewableContract(){
    return this.httpClient.get<ContractModel[]>(this.Api_Url+this.Endpoint_GetRenewableContract)
  }
  getScore(idc:number,idco:number){
    return this.httpClient.get<number[]>(this.Api_Url+this.Endpoint_GetScore+idc+"/"+idco)
  }

}

