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