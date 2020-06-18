import { Type } from "class-transformer";
import { BalanceSheetModel } from './balance-sheet.model';
import { BusinessResultModel } from './business-result.model';
import { Pagination } from './pagination.model';

export class FinancialReportModel {
    @Type(() => BalanceSheetModel)
    balanceSheets: Array<BalanceSheetModel>;
    @Type(() => BusinessResultModel)
    businessResults: Array<BusinessResultModel>;
    @Type(() => Pagination)
    pagination: Pagination;
}