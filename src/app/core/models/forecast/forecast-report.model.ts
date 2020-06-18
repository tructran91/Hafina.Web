import { ForecastBusinessResultModel } from './forecast-business-result.model';
import { ForecastBalanceSheetModel } from './forecast-balance-sheet.model';
import { BusinessResultModel } from '../business-result.model';
import { BalanceSheetModel } from '../balance-sheet.model';

export class ForecastReportModel {
    indicatorsBusinessResult : ForecastBusinessResultModel;
    indicatorsBalanceSheet: ForecastBalanceSheetModel;
    latestBusinessResultByAnnual: BusinessResultModel;
    latestBalanceSheetByAnnual: BalanceSheetModel;
}