import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Constants } from '../helpers/constants';

@Injectable()
export class BaseService {
    protected _http: HttpClient;
    private _tokenKey: string;
    protected domain: string = Constants.DomainURL;

    constructor(private http: HttpClient) {
        this._http = http;
    }

    private createHeader(type: string = ''): HttpHeaders {
        this._tokenKey = localStorage.getItem('auth_token');
        let contentType: string = '';
        let headers = new HttpHeaders({
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
            // 'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
            // 'Access-Control-Allow-Credentials': 'true',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this._tokenKey}`
        });

        switch (type) {
            case 'json':
                contentType = 'application/json'
                break;
            case 'text':
                contentType = 'text/plain';
                break;
            case 'authentication':
                contentType = 'application/x-www-form-urlencoded';
                break;
            case 'file':
                contentType = ''
                break;
        }
        if (contentType.length > 0) {
            headers.append('Content-Type', contentType);
        }

        return headers;
    }

    protected doGet(apiUrl: string, params?: string): Observable<any> {
        var url = (params == undefined) ? `${this.domain}/${apiUrl}` : `${this.domain}/${apiUrl}/${params}`;
        let header: HttpHeaders = this.createHeader();

        return this.http.get(url, { headers: header }).pipe(
            catchError(this.handleError),
            catchError(() => {
                // caught rethrown error, providing fallback value
                return of(undefined);
            })
        );
    }

    protected doPost(apiUrl: string, data: any): Observable<any> {
        let bodyString = JSON.stringify(data);
        let header: HttpHeaders = this.createHeader();

        return this.http.post(`${this.domain}/${apiUrl}`, bodyString, { headers: header }).pipe(
            catchError(this.handleError),
            catchError(() => {
                // caught rethrown error, providing fallback value
                return of(undefined);
            })
        );
    }

    protected doPut(apiUrl: string, id: number, data: any): Observable<any> {
        let bodyString = JSON.stringify(data);
        let header: HttpHeaders = this.createHeader();

        return this.http.put(`${this.domain}/${apiUrl}/${id}`, bodyString, { headers: header }).pipe(
            catchError(this.handleError),
            catchError(() => {
                // caught rethrown error, providing fallback value
                return of(undefined);
            })
        );
    }

    // protected doDelete(apiUrl: string, id: string): Observable<any> {
    //   let header: Headers;
    //   header = this.createHeader();

    //   return this.http.delete(`${this.domain}/${apiUrl}/${id}`, { headers: header })
    //     .map((response: Response) => {
    //       if (response != undefined) {
    //         return response.json();
    //       }
    //     })
    //     .catch(this.handleError);
    // }

    // protected doAuthentication(apiUrl: string, data: any): Observable<any> {
    //   let dataRequest = `TenancyName=${data.TenancyName}&usernameOrEmailAddress=${data.UsernameOrEmailAddress}&password=${data.Password}`;
    //   let header: Headers;
    //   header = this.createHeader('authentication');

    //   return this.http.post(`${this.domain}/${Constants.Authenticate}`, dataRequest, { headers: header })
    //     .map((response: Response) => {
    //       return response.json();
    //     })
    //     .catch(this.handleError);
    // }

    private handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}\nError: ${error.error}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}
