import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/core/services/base.service';
import { Constants } from 'src/app/core/helpers/constants';

@Injectable()
export class CompanyService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }

  getCompanies(): Observable<any> {
    return this.doGet(Constants.Company);
  }

  getCompany(companyCode: string): Observable<any> {
    return this.doGet(Constants.Company, companyCode);
  }

  getFinancialReport(companyCode: string, viewBy: string, page: number): Observable<any> {
    let param = `${companyCode}?type=${viewBy}&page=${page}`
    return this.doGet(Constants.FinancialReport, param);
  }

  getForecastReport(companyCode: string): Observable<any> {
    return this.doGet(Constants.ForecastReport, `${companyCode}`);
  }
}
