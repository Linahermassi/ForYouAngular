import { Component, OnInit , ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ContractModel } from 'src/app/Models/ContractModel';
import { ContractService } from 'src/app/Services/contract.service';

@Component({
  selector: 'app-contart-renouv',
  templateUrl: './contart-renouv.component.html',
  styleUrls: ['./contart-renouv.component.css']
})
export class ContartRenouvComponent implements OnInit {
  contracts: ContractModel[] = [];
  filteredContracts !: MatTableDataSource<ContractModel>;

  displayedColumns: string[] = ['id', 'name', 'status', 'startDate', 'endDate', 'actions'];
  pageSize: number = 5;
  pageIndex: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _service: ContractService, private route: Router) { }

  ngOnInit(): void {
    this.GetContracts()
  }
  GetContracts() {
    return this._service.getContracts().subscribe(res => {
      this.contracts = res;
      this.filteredContracts = new MatTableDataSource(this.contracts);
      this.filteredContracts.paginator = this.paginator;
      this.filteredContracts.sort = this.sort;
    });
  }
  applyFilter(filterValue: string) {
    this.filteredContracts.filter = filterValue.trim().toLowerCase();
    if (this.filteredContracts.paginator) {
      this.filteredContracts.paginator.firstPage();
    }
  }

  onPageChange(event: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }

}
