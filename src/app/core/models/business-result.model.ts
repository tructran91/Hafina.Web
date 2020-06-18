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