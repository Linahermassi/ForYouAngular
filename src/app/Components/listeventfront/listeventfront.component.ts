import { Component } from '@angular/core';
import { EventModel } from 'src/app/Models/EventModel';
import { EventService } from 'src/app/Services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listeventfront',
  templateUrl: './listeventfront.component.html',
  styleUrls: ['./listeventfront.component.css']
})
export class ListeventfrontComponent {
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
      this.route.navigateByUrl("");
    }
    

}
