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