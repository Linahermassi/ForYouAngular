import { Component } from '@angular/core';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-simulateur-agri-inssurance',
  templateUrl: './simulateur-agri-inssurance.component.html',
  styleUrls: ['./simulateur-agri-inssurance.component.css']
})
export class SimulateurAgriInssuranceComponent {
  landValue!: number ;
  expectedIncome!: number;
  insuranceType!: string;
  premium!: any;

  constructor(private premiumService: EventService) { }

  calculatePremium(): void {
    this.premiumService.calculatePremium(this.landValue, this.expectedIncome, this.insuranceType)
      .subscribe((premium: any) => this.premium = premium);
}
}