import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Client } from '../model/client';


@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
    constructor(private http: HttpClient) {
    }
    
    /**
     * Get all book's categories as reference data from Backend server.
     */
     loadClients(){
        // let headers = new HttpHeaders();
        // headers.append('content-type', 'application/json');
        // headers.append('accept', 'application/json');
         return this.http.get<Client[]>('http://localhost:9090/clients');
     }
     
    
}