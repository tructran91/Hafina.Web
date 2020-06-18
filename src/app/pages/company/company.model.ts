import { Pagination } from 'src/app/core/models/pagination.model';
import { Type } from "class-transformer";

export class CompanyModel {
    companyId: number = 0;
    name: string = '';
    code: string = '';
}

export class BalanceSheetModel {
    balanceSheetId: number;

    // Tài sản ngắn hạn
    currentAssets: number;

    // Tiền và các khoản tương đương tiền
    cashAndCashEuivalents: number;

    // Các khoản đầu tư tài chính ngắn hạn
    shortTermFinancialInvestment: number;

    // Các khoản phải thu ngắn hạn
    shortTermAccountReceivables: number;

    // Hàng tồn kho
    inventory: number;

    // Tài sản ngắn hạn khác
    otherCurrentAssets: number;

    // Tài sản dài hạn
    longTermAssets: number;

    // Các khoản phải thu dài hạn
    longTermAccountReceivable: number;

    // Tài sản cố định
    fixedAssets: number;

    // Lợi thế thương mại
    commercialAdvantage: number;

    // Bất động sản đầu tư
    realEstateInvestment: number;

    // Các khoản đầu tư tài chính dài hạn
    longTermFinacialInvestments: number;

    // Tài sản dài hạn khác
    otherLongTermAssets: number;

    // Tổng cộng tài sản
    totalAssets: number;

    // Nợ ngắn hạn
    shortTermLiabilities: number;

    // Nợ dài hạn
    longTermLiabilities: number;

    // Vốn chủ sở hữu
    ownersEquity: number;

    startDate: Date;

    endDate: Date;

    duration: string;
}

export class BusinessResultModel {
    businessResultId: number;

    // Doanh thu bán hàng và cung cấp dịch vụ
    salesOfGoodsAndServices: number;

    // Các khoản giảm trừ doanh thu
    deductibleRevenue: number;

    // Doanh thu thuần về bán hàng và cung cấp dịch vụ
    netSalesOfGoodsAndServices: number;

    // Giá vốn hàng bán
    costOfGoodsSold: number;

    // Lợi nhuận gộp về bán hàng và cung cấp dịch vụ
    grossProfitOfGoodsAndServices: number;

    // Doanh thu hoạt động tài chính
    revenueFromFinancialActivities: number;

    // Chi phí tài chính
    financialExpenses: number;

    // Chi phí lãi vay
    interestExpenses: number;

    // Phần lãi lỗ hoặc lỗ trong công ty liên doanh, liên kết
    profitOrLossInJointVenturesOrAssociates: number;

    // Chi phí bán hàng
    sellingExpenses: number;

    // Chi phí quản lý doanh nghiệp
    enterpriseCostManagement: number;

    // Lợi nhuận thuần từ hoạt động kinh doanh
    netProfitFromBusinessActivities: number;

    // Thu nhập khác
    otherIncome: number;

    // Chi phí khác
    otherCosts: number;

    // Lợi nhuận khác
    otherProfits: number;

    // Tổng lợi nhuận kế toán trước thuế
    accountingProfitBeforeTax: number;

    // Chi phí thuế TNDN hiện hành
    currentCorporateIncomeTaxExpense: number;

    // Chi phí thuế TNDN hoãn lại
    deferredCorporateIncomeTaxExpense: number;

    // Lợi nhuận sau thuế thu nhập doanh nghiệp
    profitAfterTaxCorporateIncome: number;

    // Lợi ích của cổ đông thiểu số
    benefitsOfMinorityShareholders: number;

    // Lợi nhuận sau thuế của công ty mẹ
    profitAfterTaxOfTheParentCompany: number;

    // Lãi cơ bản trên cổ phiếu
    basicEarningsPerShare: number;

    // Lãi suy giảm trên cổ phiếu
    declineEarningsPerShare: number;

    // Cổ tức
    dividend: number;

    startDate: Date;

    endDate: Date;

    duration: string;
}

export class FinancialReportModel {
    @Type(() => BalanceSheetModel)
    balanceSheets: Array<BalanceSheetModel>;
    @Type(() => BusinessResultModel)
    businessResults: Array<BusinessResultModel>;
    @Type(() => Pagination)
    pagination: Pagination;
}

// Forecast

export class ForecastBusinessResultModel {
    // Tốc độ tăng trưởng doanh thu bán hàng và cung cấp dịch vụ hàng năm
    growthRateSalesOfGoodsAndServicesYoY: number;

    // Tốc độ tăng trưởng giá vốn hàng bán hàng năm
    growthRateCostOfGoodsSoldYoY: number;

    // Tốc độ tăng trưởng lợi nhuận gộp về bán hàng và cung cấp dịch vụ hàng năm
    growthRateGrossProfitOfGoodsAndServicesYoY: number;

    // Tốc độ tăng trưởng lợi nhuận khác hàng năm
    growthRateOtherProfitsYoY: number;

    // Tốc độ tăng trưởng tổng lợi nhuận kế toán trước thuế hàng năm
    growthRateAccountingProfitBeforeTaxYoY: number;

    // Tốc độ tăng trưởng lợi nhuận sau thuế thu nhập doanh nghiệp hàng năm
    growthRateProfitAfterTaxCorporateIncomeYoY: number;

    duration: string;
}

export class ForecastBalanceSheetModel {
    // Tốc độ tăng trưởng tài sản ngắn hạn hàng năm
    growthRateCurrentAssetsYoY: number;

    // Tốc độ tăng trưởng tổng cộng tài sản hàng năm
    growthRateTotalAssetsYoy: number;

    // Tốc độ tăng trưởng nợ ngắn hạn hàng năm
    growthRateShortTermLiabilitiesYoY: number;

    // Tốc độ tăng trưởng nợ dài hạn hàng năm
    growthRateLongTermLiabilitiesYoY: number;

    // Tốc độ tăng trưởng vốn chủ sở hữu hàng năm
    growthRateOwnersEquityYoY: number;

    duration: string;
}

export class ForecastReportModel {
    indicatorsBusinessResult : ForecastBusinessResultModel;
    indicatorsBalanceSheet: ForecastBalanceSheetModel;
    latestBusinessResultByAnnual: BusinessResultModel;
    latestBalanceSheetByAnnual: BalanceSheetModel;
}