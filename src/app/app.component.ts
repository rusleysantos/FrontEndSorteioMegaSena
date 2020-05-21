import { Component } from '@angular/core';
import { RaffleService } from './services/raffle.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MegaSena';
  constructor(private raffleService: RaffleService) {}

  listRandomNumbers = [];

  public Random() {

    this.raffleService.CheckResult().subscribe((listRandomNumbers: number[]) => {
      this.listRandomNumbers = listRandomNumbers;
    });


    console.log(this.listRandomNumbers);

  }

}
