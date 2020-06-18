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