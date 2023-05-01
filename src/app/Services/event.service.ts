import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EventModel } from '../Models/EventModel';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventService {
  readonly Api_Url ="http://localhost:8081"
  readonly Endpoint_Getevent ="/foryou/Event/afficherAllEvents"
  readonly Endpoint_Addevent ="/foryou/Event/ajouterEvent"
  readonly Endpoint_Editevent ="/foryou/Event/ModifierEvent"
  readonly Endpoint_Deleteevent ="/foryou/Event/SupprimerEventById"
  readonly Endpoint_FindcontractByid ="/foryou/Event/afficherEventById/"
 readonly calculatePremiumUrl = "/foryou/Simulator/calculate-premium";


  constructor(private httpClient : HttpClient) { }
  getEvents(){
    return this.httpClient.get<EventModel[]>(this.Api_Url+this.Endpoint_Getevent)
  }
  AddEvent(event:EventModel){
    return this.httpClient.post<EventModel[]>(this.Api_Url+this.Endpoint_Addevent,event)
  }
  EditEvent(event:EventModel){
    return this.httpClient.put(this.Api_Url+this.Endpoint_Editevent,event)
  }
  DeleteEvent(id:number){
    let ids:number = +id
    return this.httpClient.delete(this.Api_Url+this.Endpoint_Deleteevent+'?EventId='+ids)
  }
  FindEventByid(id:string){
    let ids:number = +id
    return this.httpClient.get<EventModel>(this.Api_Url+this.Endpoint_FindcontractByid+ids)
  }
  calculatePremium(landValue: number, expectedIncome: number, insuranceType: string): Observable<number> {
    //const url = `${this.Api_Url+ this.calculatePremiumUrl}?landValue=${landValue}&expectedIncome=${expectedIncome}&insuranceType=${insuranceType}`;
    return this.httpClient.get<number>(this.Api_Url+this.calculatePremiumUrl+'?landValue='+landValue+'&expectedIncome='+expectedIncome+'&insuranceType='+insuranceType);
}
}