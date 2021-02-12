import { Component } from '@angular/core';
import { RaffleService } from './services/raffle.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RaffleDataUser } from './models/raffle-data-user';
import { ReturnMessage } from './models/return-message';
import { Raffle } from './models/raffle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MegaSena';
  constructor(private raffleService: RaffleService) {

  }

  listRandomNumbers = [];
  raffleDataUser = {} as RaffleDataUser;
  returnMessage: ReturnMessage;

  Status: any;
  MessageUser: any;
  Result: any;
  NumbersUser: any;
  NumbersResult: any;
  NumbersHit: any;

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

    this.raffleService.CheckResult(this.raffleDataUser).subscribe((raffle: any) => {
     
        this.Status = "Sucesso";
        this.MessageUser = "Ocorreu tudo bem ao realizar o sorteio";
        this.Result = raffle.result;
        this.NumbersUser = raffle.numbersUser;
        this.NumbersResult = raffle.numbersResult;
        this.NumbersHit = raffle.numbersHit;
       

    });

  }

}
