import { Component } from '@angular/core';
import { RaffleService } from './services/raffle.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RaffleDataUser } from './models/raffle-data-user';
import { ReturnMessage } from './models/return-message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MegaSena';
  constructor(private raffleService: RaffleService) { }

  listRandomNumbers = [];
  raffleDataUser = {} as RaffleDataUser;
  returnMessage: ReturnMessage;

  public Random() {

    this.raffleService.RandomNumber().subscribe((listRandomNumbers: number[]) => {
      this.listRandomNumbers = listRandomNumbers;
    });
  }

  public Raffle(form) {

    let auxNumbers: [];

    this.raffleDataUser.QuantityNumbers = 6
    this.raffleDataUser.Numbers = `
    ${(form.target.inptUm.value)};
    ${(form.target.inptDois.value)};
    ${(form.target.inptTres.value)};
    ${(form.target.inptQuatro.value)};
    ${(form.target.inptCinco.value)};
    ${(form.target.inptSeis.value)}
    `

    this.raffleService.CheckResult(this.raffleDataUser).subscribe((returnMessage: ReturnMessage) => {
      this.returnMessage = returnMessage;
     
    });

  }

}
