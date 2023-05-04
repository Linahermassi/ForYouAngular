import { Component } from '@angular/core';
import { EventModel } from 'src/app/Models/EventModel';
import { EventService } from 'src/app/Services/event.service';
import { Router } from '@angular/router';
import { InscriptionEvent } from 'src/app/Models/InscriptionEvent';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { QRCodeComponent } from 'angularx-qrcode';
import { Renderer2, ViewChild,  ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-listeventfront',
  templateUrl: './listeventfront.component.html',
  styleUrls: ['./listeventfront.component.css']
})
export class ListeventfrontComponent {
  listEvent!: EventModel[];
  qrdata = 'Initial QR code data string';
  inscription!: InscriptionEvent;
  qrcode :any;
  private _router: any;
    constructor( private _service:EventService, private route :Router,private renderer: Renderer2,private sanitizer: DomSanitizer){}
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
    async generateQrCodeUrl(qrData: string): Promise<string> {
      

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d')!;
      const qrCodeComponent = new QRCodeComponent(this.renderer, this.sanitizer);
      
      qrCodeComponent.qrdata = qrData;
      qrCodeComponent.width = 256;
      
      //qrCodeComponent.ngAfterViewInit();
      await new Promise(resolve => setTimeout(resolve, 1000)); // wait for the component to render
      
      const qrCodeElement = qrCodeComponent.qrcElement.nativeElement;
      console.log('Generating QR code URL...');
      canvas.width = qrCodeElement.offsetWidth;
      canvas.height = qrCodeElement.offsetHeight;
    
      context.drawImage(qrCodeElement.firstChild, 0, 0, canvas.width, canvas.height);
    
      return canvas.toDataURL('image/png');
    }

    async register(event: EventModel){
       // const qrCodeUrl = await this.generateQrCodeUrl(event.name_Event);
       // console.log('QR code URL:', qrCodeUrl);
       this._service.registerForEvent(this.inscription,event).subscribe();
       //const qrCodeImageUrl = await this.qrcode.toDataURL(event.name_Event);
       Swal.fire({
        icon: 'success',
        title: 'Registration Received',
        text: 'Your registration for the event has been received!',
        //imageUrl: qrCodeUrl,
    imageAlt: 'QR Code',
    showCloseButton: true,
      });
        
       
    }

}
