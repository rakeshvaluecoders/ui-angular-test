import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {

   }
   get(api: string) : Observable<any>{
     let header = new HttpHeaders()
     
    //  header.append('Access-Control-Allow-Origin', '*')
     header.delete('Access-Control-Allow-Origin')
    return this.http.get(api);
  }
}
