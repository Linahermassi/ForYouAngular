import { Component,OnInit } from '@angular/core';
import { EventModel } from 'src/app/Models/EventModel';
import { EventService } from 'src/app/Services/event.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modifevent',
  templateUrl: './modifevent.component.html',
  styleUrls: ['./modifevent.component.css']
})

  
  export class ModifEventComponent implements OnInit {
    event_id !: any;
    Event :EventModel  =new EventModel();
    constructor(private c: EventService, private _router:Router,private route: ActivatedRoute){
      if (this.route.snapshot.paramMap.get('id'))
      this.event_id=this.route.snapshot.paramMap.get('id')
    }
    ngOnInit(): void {
      this.FindEventtByid()
    }
    FindEventtByid(){
      return this.c.FindEventByid(this.event_id).subscribe((data:EventModel)=>{
        this.Event=data
        console.log(this.Event)
      });
    }
  
    EditEvent(){
      return this.c.EditEvent(this.Event).subscribe(()=>this._router.navigateByUrl("/menu/listevent"));
    }
}