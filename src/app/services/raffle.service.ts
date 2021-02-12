import { Injectable } from '@angular/core';
import { RaffleDataUser } from '../models/raffle-data-user';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ReturnMessage } from '../models/return-message';
import { Raffle } from '../models/raffle';

@Injectable({
  providedIn: 'root'
})
export class RaffleService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  RandomNumber(): Observable<number[]> {
    return this.httpClient.get<number[]>(`/api/RandomNumber/?quantityNumbers=6`)
  }

  CheckResult(raffleDataUser: RaffleDataUser): Observable<any> {
    return this.httpClient.post<any>(`/api/CheckResult/`, raffleDataUser, this.httpOptions)
  }

}
