import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SolvabilityService } from 'src/app/Services/solvability.service';
declare var require: any
const {GoogleCharts } = require('google-charts');

@Component({
  selector: 'app-solvabilities',
  templateUrl: './solvabilities.component.html',
  styleUrls: ['./solvabilities.component.css']
})
export class SolvabilitiesComponent  implements OnInit {
  
  currentAssets: any;
  nonCurrentAssets: any;
  currentLiabilities: any;
  nonCurrentLiabilities: any;
  year: any;
  form: FormGroup;

  constructor(private service: SolvabilityService)
  {}

  ngOnInit()
  {
    this.form = new FormGroup({
    currentAssets: new FormControl(null, Validators.required),
    nonCurrentAssets: new FormControl(null, Validators.required),
    currentLiabilities: new FormControl(null, Validators.required),
    nonCurrentLiabilities: new FormControl(null, Validators.required),
    year: new FormControl(null, Validators.required),
    })
    this.drawChart()
  }

  drawChart()
  {
    this.service.list().subscribe(
      {
        next: (response: any) =>{
           console.log(response);
           
            GoogleCharts.load(() => {
            const stats:any[] = [];
            response.forEach((element: any) => {
              stats.push([
                element.year.toString(),
                element.solvencyRatio,
                element.solvent ? 'green': 'red',
                element.liquidityProblems ? 'liq': 'liq.prob'
              ])
            });
            console.log(...stats);
            const data = GoogleCharts.api.visualization.arrayToDataTable([
              ['year', 'ratio', { role: 'style' }, {role: 'annotation'}],
              ...stats,
          ]);
        const pie_1_chart = new GoogleCharts.api.visualization.ColumnChart(document.getElementById('myChart'));
        pie_1_chart.draw(data);
        }); 
        }
      }
    )    
  }

  new()
  {
    if(this.form.valid)
    {
      this.service.new({
        currentAssets: this.currentAssets,
        nonCurrentAssets: this.nonCurrentAssets,
        currentLiabilities: this.currentLiabilities,
        nonCurrentLiabilities: this.nonCurrentLiabilities,
        year: this.year
      }).subscribe({
        next: () => this.drawChart()
      })
    }
  }
}
