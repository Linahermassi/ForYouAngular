
import { EventModel } from 'src/app/Models/EventModel';
import { EventService } from 'src/app/Services/event.service';
import { Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
//import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
//import { MatOptionSelectionChange } from '@angular/material/core';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit{
  event :EventModel =new EventModel();
  constructor(private c: EventService, private _router:Router){
  }
  ngOnInit(): void {
  }
  AddEvent(){
    return this.c.AddEvent(this.event).subscribe(()=>this._router.navigateByUrl("/menu/listevent"));
  }




}
