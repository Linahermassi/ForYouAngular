import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolvabilityService {
  baseUri = environment.baseUri;

  constructor(private httpClient: HttpClient,
    private router: Router
  ) { }
  
  list(): any
  {
    return this.httpClient.get<any>(
      `${this.baseUri}/foryou/solvabilities`
    )
  }

  new(payload: any)
  {
    return this.httpClient.post<any>(
      `${this.baseUri}/foryou/solvabilities`,
      payload
    )
  }
}
