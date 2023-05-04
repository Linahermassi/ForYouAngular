import { Component } from '@angular/core';
import { InscriptionEvent } from 'src/app/Models/InscriptionEvent';
import { EventService } from 'src/app/Services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listinscri',
  templateUrl: './listinscri.component.html',
  styleUrls: ['./listinscri.component.css']
})
export class ListinscriComponent {
  listinscri!: InscriptionEvent[];
  constructor( private _service:EventService, private route :Router){}
    ngOnInit(): void {
      this.GetInscriptions();
    }
    GetInscriptions(){
      return this._service.getInscriptions().subscribe((res: InscriptionEvent[])=>{console.log(res);
      this.listinscri=res});
    }
}
