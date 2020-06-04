import { environment } from 'src/environments/environment';

export class Constants {
  public static readonly DomainURL = environment.production ? 'http://14.225.5.236:49220' : 'http://localhost:60173';
  public static readonly Authenticate = 'jwt-token/authenticate';
  public static readonly Authen = 'authen';
  public static readonly Company = 'api/company';
  public static readonly FinancialReport = 'api/financialReport';
}