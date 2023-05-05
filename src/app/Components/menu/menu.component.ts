import { Component, OnInit } from '@angular/core';
import { ContractModel } from 'src/app/Models/ContractModel';
import { ContractService } from 'src/app/Services/contract.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  loggedIn: boolean = false;
  listContract!: ContractModel[];
  constructor( private _service:ContractService, private loginService: LoginService){}
  ngOnInit(): void {
    this.loggedIn = this.loginService.loggedIn();
  }

  GetContracts(){
    return this._service.getContracts().subscribe(res=>{console.log(res);
    this.listContract=res});
  }

  
  logout()
  {
    this.loginService.logout();
  }
}
