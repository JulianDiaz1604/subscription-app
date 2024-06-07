import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";


@Injectable({
    providedIn: 'root'
  })
  export class PlanService{

    options = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Headers': 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,' +
            'Content-Type,Authorization',
          'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
          'Vary': 'Origin',
          'Accept': 'application/json',
        }
    };

      
  constructor(private http: HttpClient) {

  } 

  createPlan(plan: any): Observable<any> {


    // Realiza la solicitud POST con los encabezados
    return this.http.post<any>('/api/v1/rest/plan', plan);
  }

  getPlan(plan: any): Observable<any> {


    // Realiza la solicitud GET con los encabezados
    return this.http.get<any>('http://localhost:8080/api/v1/rest/subscription');
  }


}