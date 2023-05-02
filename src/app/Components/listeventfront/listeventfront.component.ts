import { Component } from '@angular/core';
import { EventModel } from 'src/app/Models/EventModel';
import { EventService } from 'src/app/Services/event.service';
import { Router } from '@angular/router';
import { InscriptionEvent } from 'src/app/Models/InscriptionEvent';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { NgxQRCodeModule } from 'ngx-qrcode2';
@Component({
  selector: 'app-listeventfront',
  templateUrl: './listeventfront.component.html',
  styleUrls: ['./listeventfront.component.css']
})
export class ListeventfrontComponent {
  listEvent!: EventModel[];
  
  inscription!: InscriptionEvent;
  private _router: any;
    constructor( private _service:EventService, private route :Router,private snackBar: MatSnackBar){}
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
    register(event: EventModel){
       this._service.registerForEvent(this.inscription,event).subscribe();
       Swal.fire({
        icon: 'success',
        title: 'Registration Received',
        text: 'Your registration for the event has been received!',
        html: `<ngx-qrcode [qrc-value]="event"></ngx-qrcode>`
      });
    }

}
