import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IncomeService } from 'src/app/Services/income.service';
declare var require: any
const {GoogleCharts } = require('google-charts');



@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.css']
})
export class IncomesComponent implements OnInit{
  public form: FormGroup;
  totalIncome: any;
  totalExpenses: any;
  product: any;
  constructor(private service: IncomeService)
  {}

  ngOnInit(): void {
    this.form = new FormGroup({
      totalIncome: new FormControl(null, Validators.required),
      totalExpenses: new FormControl(null, Validators.required),
      product: new FormControl(null, Validators.required),
    })
    this.draw();
  } 
  
  draw()
  {
    this.service.list().subscribe({
      next: (response: any) =>{
        const credit = response.sort((a: any,b : any) => b.id - a.id).filter((e:any) => e.product === 'Credit')[0];
        const agriculture = response.sort((a: any,b : any) => b.id - a.id).filter((e:any) => e.product === 'Agriculture')[0];
        const automobile = response.sort((a: any,b : any) => b.id - a.id).filter((e:any) => e.product === 'Automobile')[0];

        GoogleCharts.load(() => {
          const data = GoogleCharts.api.visualization.arrayToDataTable([
          ['Incomes', 'Total expenses'],
            ['Income',credit.totalIncome],
          ['Total expenses', credit.totalExpenses]
          ]);
          const pie_1_chart = new GoogleCharts.api.visualization.PieChart(document.getElementById('credit'));
          pie_1_chart.draw(data);
      })
      GoogleCharts.load(() => {
        const data = GoogleCharts.api.visualization.arrayToDataTable([
          ['Incomes', 'Total expenses'],
          ['Income',automobile.totalIncome],
          ['Total expenses', automobile.totalExpenses]
          ]);
        const pie_1_chart = new GoogleCharts.api.visualization.PieChart(document.getElementById('automobile'));
        pie_1_chart.draw(data);
    })
    GoogleCharts.load(() => {
      const data = GoogleCharts.api.visualization.arrayToDataTable([
        ['Incomes', 'Total expenses'],
        ['Income',agriculture.totalIncome],
        ['Total expenses', agriculture.totalExpenses]
        ]);
      const pie_1_chart = new GoogleCharts.api.visualization.PieChart(document.getElementById('agriculture'));
      pie_1_chart.draw(data);
  })
    }
  })
  }

  new()
  {
    if(this.form.valid)
    {
      this.service.new({
        totalIncome: this.totalIncome,
        totalExpenses: this.totalExpenses,
        product: this.product
      }).subscribe({
        next: () => this.draw()
      })
    }
  }
}
