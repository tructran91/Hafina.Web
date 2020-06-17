import { Component, OnInit, OnDestroy } from '@angular/core';
import { CompanyService } from './company.service';
import { FinancialReportModel, CompanyModel, ForecastReportModel, BusinessResult } from './company.model';
import { EventService } from 'src/app/core/services/event.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit, OnDestroy {
  isLoadingData: boolean = true;
  viewBy: string = 'quarter';
  financialReport: FinancialReportModel = new FinancialReportModel();
  forecastReport: ForecastReportModel = new ForecastReportModel();
  forecastBusinessResults: Array<BusinessResult> = new Array<BusinessResult>();
  company: CompanyModel = new CompanyModel();
  page: number = 0;
  companyCode: string = 'msn';
  valueChangeCompanySubscription: Subscription;

  constructor(private companyService: CompanyService, private eventService: EventService) { }

  ngOnInit(){
    // this.valueChangeCompanySubscription = this.eventService.valueFromChangeCompany.subscribe(data => {
    //   console.log(data);
    // });

    this.companyService.getCompany(this.companyCode).subscribe(data => {
      this.company = data;
    });

    this.getFinancialReport();
    this.getForecastReport();
  }

  //#region get data
  getFinancialReport() {
    this.companyService.getFinancialReport(this.companyCode, this.viewBy, this.page).subscribe(data => {
      this.financialReport = data;
      this.page = this.financialReport.pagination.actualPage;
      this.isLoadingData = false;
    });
  }

  getForecastReport() {
    this.companyService.getForecastReport(this.companyCode).subscribe(data => {
      this.forecastReport = data;
      this.calculateForecastBusinessResult();
    });
  }
  //#endregion

  calculateForecastBusinessResult(){
    let latestBusinessResult = this.forecastReport.latestBusinessResultByAnnual;
    let indicatorsBusinessResult = this.forecastReport.indicatorsBusinessResult;
    this.forecastBusinessResults = new Array<BusinessResult>();

    let firstBusinessResult: BusinessResult = new  BusinessResult();
    firstBusinessResult.salesOfGoodsAndServices = latestBusinessResult.salesOfGoodsAndServices;
    firstBusinessResult.costOfGoodsSold = latestBusinessResult.costOfGoodsSold;
    firstBusinessResult.grossProfitOfGoodsAndServices = latestBusinessResult.grossProfitOfGoodsAndServices;
    firstBusinessResult.otherProfits = latestBusinessResult.otherProfits;
    firstBusinessResult.accountingProfitBeforeTax = latestBusinessResult.accountingProfitBeforeTax;
    firstBusinessResult.profitAfterTaxCorporateIncome = latestBusinessResult.profitAfterTaxCorporateIncome;
    firstBusinessResult.duration = latestBusinessResult.duration;
    this.forecastBusinessResults.push(firstBusinessResult);
    
    for (let i = 0; i < 4; i++) {
      let businessResult: BusinessResult = new  BusinessResult();
      businessResult.salesOfGoodsAndServices = this.forecastBusinessResults[i].salesOfGoodsAndServices + this.forecastBusinessResults[i].salesOfGoodsAndServices * indicatorsBusinessResult.growthRateSalesOfGoodsAndServicesYoY / 100;
      businessResult.costOfGoodsSold = this.forecastBusinessResults[i].costOfGoodsSold + this.forecastBusinessResults[i].costOfGoodsSold * indicatorsBusinessResult.growthRateCostOfGoodsSoldYoY / 100;
      businessResult.grossProfitOfGoodsAndServices = this.forecastBusinessResults[i].grossProfitOfGoodsAndServices + this.forecastBusinessResults[i].grossProfitOfGoodsAndServices * indicatorsBusinessResult.growthRateGrossProfitOfGoodsAndServicesYoY / 100;
      businessResult.otherProfits = this.forecastBusinessResults[i].otherProfits + this.forecastBusinessResults[i].otherProfits * indicatorsBusinessResult.growthRateOtherProfitsYoY / 100;
      businessResult.accountingProfitBeforeTax = this.forecastBusinessResults[i].accountingProfitBeforeTax + this.forecastBusinessResults[i].accountingProfitBeforeTax * indicatorsBusinessResult.growthRateAccountingProfitBeforeTaxYoY / 100;
      businessResult.profitAfterTaxCorporateIncome = this.forecastBusinessResults[i].profitAfterTaxCorporateIncome + this.forecastBusinessResults[i].profitAfterTaxCorporateIncome * indicatorsBusinessResult.growthRateProfitAfterTaxCorporateIncomeYoY / 100;
      businessResult.duration = (Number(this.forecastBusinessResults[i].duration) + 1).toString();

      this.forecastBusinessResults.push(businessResult);
    }
    this.forecastBusinessResults.shift();
  }
  
  //#region behavior
  onViewBy(data: string) {
    this.viewBy = data;
    this.page = 0;
    this.getFinancialReport();
  }

  onPrevious() {
    if (this.financialReport.pagination.isNext) {
      this.page = this.financialReport.pagination.actualPage + 1;
      this.getFinancialReport();
    }
  }

  onNext() {
    if (this.financialReport.pagination.isPrevious) {
      this.page = this.financialReport.pagination.actualPage - 1;
      this.getFinancialReport();
    }
  }
  //#endregion

  ngOnDestroy() {
    this.valueChangeCompanySubscription.unsubscribe();
  }
}
