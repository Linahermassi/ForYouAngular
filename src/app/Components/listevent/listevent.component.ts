import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/Services/event.service';
import { Router,Route } from '@angular/router';
import { EventModel } from 'src/app/Models/EventModel';

@Component({
  selector: 'app-listevent',
  templateUrl: './listevent.component.html',
  styleUrls: ['./listevent.component.css']
})
export class ListeventComponent implements OnInit{
  p: number = 1;
    listEvent!: EventModel[];
    constructor( private _service:EventService, private route :Router){}
    ngOnInit(): void {
      this.GetEvents()
    }
  
    GetEvents(){
      return this._service.getEvents().subscribe((res: EventModel[])=>{console.log(res);
      this.listEvent=res});
    }
    goTo(id:any){
      this.route.navigateByUrl("menu/modifevent/"+id)
    }
    deleteEvent(id:number) {
      this._service.DeleteEvent(id).subscribe(()=>this.route.navigateByUrl("/menu/listcontract"));
    }
  }
