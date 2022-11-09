import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Country } from '../model/country';


@Injectable({
  providedIn: 'root'
})
export class CountriesServiceService {
    constructor(private http: HttpClient) {
    }
    
     loadCountries(){
        // let headers = new HttpHeaders();
        // headers.append('content-type', 'application/json');
        // headers.append('accept', 'application/json');
         return this.http.get<Country[]>('http://localhost:9090/countries');
     }
  
     
    
}