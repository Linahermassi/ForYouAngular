import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/Services/authorization.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  loggedIn: boolean = false;

  constructor(private service : LoginService)
  {}

  ngOnInit(): void {
    this.loggedIn = this.service.loggedIn();
  }

  logout()
  {
    this.loggedIn = false;
    this.service.logout();
  }
}
