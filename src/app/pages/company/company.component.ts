import { Component, OnInit, OnDestroy } from '@angular/core';
import { CompanyService } from './company.service';
import { FinancialReportModel, CompanyModel, ForecastReportModel, BusinessResultModel, BalanceSheetModel } from './company.model';
import { EventService } from 'src/app/core/services/event.service';
import {plainToClass} from 'class-transformer';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit, OnDestroy {
  isLoadingData: boolean = true;
  viewBy: string = 'quarter';
  financialReport: FinancialReportModel = new FinancialReportModel();
  dataToForecast: ForecastReportModel = new ForecastReportModel();
  forecastBusinessResults: Array<BusinessResultModel> = new Array<BusinessResultModel>();
  forecastBalanceSheets: Array<BalanceSheetModel> = new Array<BalanceSheetModel>();
  company: CompanyModel = new CompanyModel();
  page: number = 0;
  companyCode: string = 'msn';
  inputGrowthRateSalesOfGoodsAndServices: number = 0;
  inputGrowthRateCostOfGoodsSold: number = 0;
  inputGrowthRateGrossProfitOfGoodsAndServices: number = 0;
  inputGrowthRateOtherProfits: number = 0;
  inputGrowthRateAccountingProfitBeforeTax: number = 0;
  inputGrowthRateProfitAfterTaxCorporateIncome: number = 0;
  inputGrowthRateCurrentAssets: number = 0;
  inputGrowthRateTotalAssets: number = 0;
  inputGrowthRateShortTermLiabilities: number = 0;
  inputGrowthRateLongTermLiabilities: number = 0;
  inputGrowthRateOwnersEquity: number = 0;

  constructor(private companyService: CompanyService, private eventService: EventService) { }

  ngOnInit(){
    this.companyService.getCompany(this.companyCode).subscribe(data => {
      this.company = data;
    });

    this.getFinancialReport();
    this.getForecastReport();
  }

  //#region get data
  getFinancialReport() {
    this.companyService.getFinancialReport(this.companyCode, this.viewBy, this.page).subscribe(data => {
      this.financialReport = plainToClass(FinancialReportModel, data);
      console.log(this.financialReport);
      this.page = this.financialReport.pagination.actualPage;
      this.isLoadingData = false;
    });
  }

  getForecastReport() {
    this.companyService.getForecastReport(this.companyCode).subscribe(data => {
      this.dataToForecast = data;
      this.setInitIndicatorsBusinessResult();
      this.setInitIndicatorsBalanceSheet();
      this.calculateForecastBusinessResult();
      this.calculateForecastBalanceSheet();
    });
  }
  //#endregion

  setInitIndicatorsBusinessResult(){
    let indicatorsBusinessResult = this.dataToForecast.indicatorsBusinessResult;
    this.inputGrowthRateSalesOfGoodsAndServices = indicatorsBusinessResult.growthRateSalesOfGoodsAndServicesYoY;
    this.inputGrowthRateCostOfGoodsSold = indicatorsBusinessResult.growthRateCostOfGoodsSoldYoY;
    this.inputGrowthRateGrossProfitOfGoodsAndServices = indicatorsBusinessResult.growthRateGrossProfitOfGoodsAndServicesYoY;
    this.inputGrowthRateOtherProfits = indicatorsBusinessResult.growthRateOtherProfitsYoY;
    this.inputGrowthRateAccountingProfitBeforeTax = indicatorsBusinessResult.growthRateAccountingProfitBeforeTaxYoY;
    this.inputGrowthRateProfitAfterTaxCorporateIncome = indicatorsBusinessResult.growthRateProfitAfterTaxCorporateIncomeYoY;
  }

  setInitIndicatorsBalanceSheet(){
    let indicatorsBalanceSheet = this.dataToForecast.indicatorsBalanceSheet;
    this.inputGrowthRateCurrentAssets = indicatorsBalanceSheet.growthRateCurrentAssetsYoY;
    this.inputGrowthRateTotalAssets = indicatorsBalanceSheet.growthRateTotalAssetsYoy;
    this.inputGrowthRateShortTermLiabilities = indicatorsBalanceSheet.growthRateShortTermLiabilitiesYoY;
    this.inputGrowthRateLongTermLiabilities = indicatorsBalanceSheet.growthRateLongTermLiabilitiesYoY;
    this.inputGrowthRateOwnersEquity = indicatorsBalanceSheet.growthRateOwnersEquityYoY;
  }

  calculateForecastBusinessResult(){
    let latestBusinessResult = this.dataToForecast.latestBusinessResultByAnnual;
    this.forecastBusinessResults = new Array<BusinessResultModel>();

    let firstBusinessResult: BusinessResultModel = new  BusinessResultModel();
    firstBusinessResult.salesOfGoodsAndServices = latestBusinessResult.salesOfGoodsAndServices;
    firstBusinessResult.costOfGoodsSold = latestBusinessResult.costOfGoodsSold;
    firstBusinessResult.grossProfitOfGoodsAndServices = latestBusinessResult.grossProfitOfGoodsAndServices;
    firstBusinessResult.otherProfits = latestBusinessResult.otherProfits;
    firstBusinessResult.accountingProfitBeforeTax = latestBusinessResult.accountingProfitBeforeTax;
    firstBusinessResult.profitAfterTaxCorporateIncome = latestBusinessResult.profitAfterTaxCorporateIncome;
    firstBusinessResult.duration = latestBusinessResult.duration;
    this.forecastBusinessResults.push(firstBusinessResult);

    for (let i = 0; i < 4; i++) {
      let businessResult: BusinessResultModel = new  BusinessResultModel();
      businessResult.salesOfGoodsAndServices = this.forecastBusinessResults[i].salesOfGoodsAndServices + this.forecastBusinessResults[i].salesOfGoodsAndServices * this.inputGrowthRateSalesOfGoodsAndServices / 100;
      businessResult.costOfGoodsSold = this.forecastBusinessResults[i].costOfGoodsSold + this.forecastBusinessResults[i].costOfGoodsSold * this.inputGrowthRateCostOfGoodsSold / 100;
      businessResult.grossProfitOfGoodsAndServices = this.forecastBusinessResults[i].grossProfitOfGoodsAndServices + this.forecastBusinessResults[i].grossProfitOfGoodsAndServices * this.inputGrowthRateGrossProfitOfGoodsAndServices / 100;
      businessResult.otherProfits = this.forecastBusinessResults[i].otherProfits + this.forecastBusinessResults[i].otherProfits * this.inputGrowthRateOtherProfits / 100;
      businessResult.accountingProfitBeforeTax = this.forecastBusinessResults[i].accountingProfitBeforeTax + this.forecastBusinessResults[i].accountingProfitBeforeTax * this.inputGrowthRateAccountingProfitBeforeTax / 100;
      businessResult.profitAfterTaxCorporateIncome = this.forecastBusinessResults[i].profitAfterTaxCorporateIncome + this.forecastBusinessResults[i].profitAfterTaxCorporateIncome * this.inputGrowthRateProfitAfterTaxCorporateIncome / 100;
      businessResult.duration = (Number(this.forecastBusinessResults[i].duration) + 1).toString();

      this.forecastBusinessResults.push(businessResult);
    }
    this.forecastBusinessResults.shift();
  }

  calculateForecastBalanceSheet(){
    let latestBalanceSheet = this.dataToForecast.latestBalanceSheetByAnnual;
    this.forecastBalanceSheets = new Array<BalanceSheetModel>();

    let firstBalanceSheet: BalanceSheetModel = new  BalanceSheetModel();
    firstBalanceSheet.currentAssets = latestBalanceSheet.currentAssets;
    firstBalanceSheet.totalAssets = latestBalanceSheet.totalAssets;
    firstBalanceSheet.shortTermLiabilities = latestBalanceSheet.shortTermLiabilities;
    firstBalanceSheet.longTermLiabilities = latestBalanceSheet.longTermLiabilities;
    firstBalanceSheet.ownersEquity = latestBalanceSheet.ownersEquity;
    firstBalanceSheet.duration = latestBalanceSheet.duration;
    this.forecastBalanceSheets.push(firstBalanceSheet);
    
    for (let i = 0; i < 4; i++) {
      let balanceSheet: BalanceSheetModel = new  BalanceSheetModel();
      balanceSheet.currentAssets = this.forecastBalanceSheets[i].currentAssets + this.forecastBalanceSheets[i].currentAssets * this.inputGrowthRateCurrentAssets / 100;
      balanceSheet.totalAssets = this.forecastBalanceSheets[i].totalAssets + this.forecastBalanceSheets[i].totalAssets * this.inputGrowthRateTotalAssets / 100;
      balanceSheet.shortTermLiabilities = this.forecastBalanceSheets[i].shortTermLiabilities + this.forecastBalanceSheets[i].shortTermLiabilities * this.inputGrowthRateShortTermLiabilities / 100;
      balanceSheet.longTermLiabilities = this.forecastBalanceSheets[i].longTermLiabilities + this.forecastBalanceSheets[i].longTermLiabilities * this.inputGrowthRateLongTermLiabilities / 100;
      balanceSheet.ownersEquity = this.forecastBalanceSheets[i].ownersEquity + this.forecastBalanceSheets[i].ownersEquity * this.inputGrowthRateOwnersEquity / 100;
      balanceSheet.duration = (Number(this.forecastBalanceSheets[i].duration) + 1).toString();

      this.forecastBalanceSheets.push(balanceSheet);
    }
    this.forecastBalanceSheets.shift();
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
  }
}
