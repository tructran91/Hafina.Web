import { Pagination } from 'src/app/core/models/pagination.model';

export class CompanyModel{
    companyId: number = 0;
    name: string = '';
    code: string = '';
}

export class BalanceSheet{
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

export class BusinessResult{
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

export class FinancialReportModel{
    balanceSheets: Array<BalanceSheet>;
    businessResults: Array<BusinessResult>;
    pagination: Pagination;
}