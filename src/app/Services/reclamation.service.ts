import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReclamationModel } from '../Models/ReclamationModel';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
 readonly Api_Url ="http://localhost:8081"
 readonly Endpoint_Getreclamation ="/foryou/Reclamation/afficherAllReclamations"
 readonly Endpoint_Addreclamation ="/foryou/Reclamation/ajouterReclamation"
 readonly Endpoint_FindreclamationByid ="/foryou/Reclamation/afficherReclamationById/"
 readonly Endpoint_Editreclamation ="/foryou/Reclamation/editReclamation"
 readonly Endpoint_Deletereclamation ="/foryou/Reclamation/SupprimerReclamationById/"
 readonly Endpoint_Updatereclamation ="/foryou/Reclamation/status/en_cours/"

  constructor(private httpClient : HttpClient) { }
  getReclamations(){
    return this.httpClient.get<ReclamationModel[]>(this.Api_Url+this.Endpoint_Getreclamation)
  }
  AddReclamations(reclamation:ReclamationModel){
    return this.httpClient.post<string>(this.Api_Url+this.Endpoint_Addreclamation,reclamation)
  }
  FindReclamationByid(id:string){
    let ids:number = +id
    return this.httpClient.get<ReclamationModel>(this.Api_Url+this.Endpoint_FindreclamationByid+ids)
  }
  EditReclamations(reclamation:ReclamationModel){
    return this.httpClient.put(this.Api_Url+this.Endpoint_Editreclamation,reclamation)
  }
  DeleteReclamations(id:number){
    let ids:number = +id
    return this.httpClient.delete(this.Api_Url+this.Endpoint_Deletereclamation+'?ReclamationId='+ids)
  
  }
  UpdateReclamationStatus(id:number) {
    let ids:number = +id
    return this.httpClient.put(this.Api_Url+this.Endpoint_Updatereclamation+ids, {})
   // return this.httpClient.put(this.Api_Url+`${this.Endpoint_Updatereclamation}`+ids+`/status/en_cours`, {});
  }
 
  
}
