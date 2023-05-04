import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-setfeedback',
  templateUrl: './setfeedback.component.html',
  styleUrls: ['./setfeedback.component.css']
})
export class SetfeedbackComponent {
  inscriptionId!: any;
  mark: number = 0;

  constructor(private route: ActivatedRoute,private _service:EventService) {
    if (this.route.snapshot.paramMap.get('id'))
      this.inscriptionId=this.route.snapshot.paramMap.get('id')
   }

  ngOnInit(): void {
    
  }

  setMark(value: number) {
    this.mark = value;
    console.log("id "+this.inscriptionId);
    console.log("value"+value);
    return this._service.setfeedback(this.inscriptionId,this.mark).subscribe(()=>{
      console.log("done")
    });
  }
  
}
