import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReclamationModel } from '../Models/ReclamationModel';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
 readonly Api_Url ="http://localhost:8081"
 readonly Endpoint_Getreclamation ="/Reclamation/afficherAllReclamations"

  constructor(private httpClient : HttpClient) { }
  getReclamations(){
    return this.httpClient.get<ReclamationModel[]>(this.Api_Url+this.Endpoint_Getreclamation)
  }
}
