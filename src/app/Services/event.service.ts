import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EventModel } from '../Models/EventModel';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  readonly Api_Url ="http://localhost:8081"
  readonly Endpoint_Getevent ="/foryou/Event/afficherAllEvents"
  readonly Endpoint_Addevent ="/foryou/Event/ajouterEvent"
  readonly Endpoint_Editevent ="/foryou/Event/ModifierEvent"
  readonly Endpoint_Deleteevent ="/foryou/Event/SupprimerEvent"


  constructor(private httpClient : HttpClient) { }
  getEvents(){
    return this.httpClient.get<any[]>(this.Api_Url+this.Endpoint_Getevent)
  }
  AddEvent(event:EventModel){
    return this.httpClient.post<string>(this.Api_Url+this.Endpoint_Addevent,event)
  }
  EditEvent(event:any){
    return this.httpClient.put<string>(this.Api_Url+this.Endpoint_Addevent,event)
  }
  DeleteEvent(){
    this.httpClient.delete(this.Api_Url+this.Endpoint_Deleteevent)
  }
}