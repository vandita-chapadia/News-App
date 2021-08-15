import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }
  
 
  
  newsApiurl="https://newsapi.org/v2/top-headlines?country=in&apiKey=ed8d5f60cd6445b9b92548077d233fc7";
   
  techApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=ed8d5f60cd6445b9b92548077d233fc7";
  
  businessApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ed8d5f60cd6445b9b92548077d233fc7";
  
  topHeading():Observable<any>{
    return this._http.get(this.newsApiurl);
  }

  techNews():Observable<any>{
    return this._http.get(this.techApiUrl);
  }

  businessNews():Observable<any>{
    return this._http.get(this.businessApiUrl);
  }


}
