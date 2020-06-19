import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compound-interest',
  templateUrl: './compound-interest.component.html',
  styleUrls: ['./compound-interest.component.scss']
})
export class CompoundInterestComponent implements OnInit {
  initialCapital = 100000000;
  interestRatePerYear = 15;
  termOfYear = 10;
  capitalTable = new Array<Capital>();

  constructor() { }

  ngOnInit(): void {
    this.calculateCompoundInterest();
  }

  calculateCompoundInterest(){
    this.capitalTable = new Array<Capital>();
    let firstTerm = new Capital();
    firstTerm.no = 1;
    firstTerm.capital = this.initialCapital;
    firstTerm.capitalEndTerm = firstTerm.capital + firstTerm.capital * this.interestRatePerYear / 100;
    this.capitalTable.push(firstTerm);

    for (let index = 1; index < this.termOfYear; index++) {
      let nextTerm = new Capital();
      nextTerm.no = 1 + index;
      nextTerm.capital = this.capitalTable[index - 1].capitalEndTerm;
      nextTerm.capitalEndTerm = nextTerm.capital + nextTerm.capital * this.interestRatePerYear / 100;

      this.capitalTable.push(nextTerm);
    }
  }

}

class Capital{
    no = 1;
    capital = 0;
    capitalEndTerm = 0;
}