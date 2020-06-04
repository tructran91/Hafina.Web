import { Component, OnInit } from '@angular/core';
import { CompanyService } from './company.service';
import { FinancialReportModel, CompanyModel } from './company.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  isLoadingData: boolean = true;
  viewBy: string = 'quarter';
  financialReport: FinancialReportModel = new FinancialReportModel();
  company: CompanyModel = new CompanyModel();
  page: number = 0;
  companyCode: string = 'msn';

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getCompany(this.companyCode).subscribe(data => {
      this.company = data;
      console.log(this.company);
    });

    this.getFinancialReport();
  }

  getFinancialReport() {
    this.companyService.getFinancialReport(this.companyCode, this.viewBy, this.page).subscribe(data => {
      this.financialReport = data;
      console.log(this.financialReport);
      this.page = this.financialReport.pagination.actualPage;
      this.isLoadingData = false;
    });
  }

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
}
