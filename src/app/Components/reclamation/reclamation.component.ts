import { Component, OnInit } from '@angular/core';
import { ReclamationService } from 'src/app/Services/reclamation.service';
import { ReclamationModel } from 'src/app/Models/ReclamationModel';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  reclamations: ReclamationModel[]=[];
  constructor(private reclamationService : ReclamationService) { }
  ngOnInit(): void {
    this.reclamationService.getReclamations().subscribe((datas) => {
      this.reclamations = datas;
        });
  }
}
