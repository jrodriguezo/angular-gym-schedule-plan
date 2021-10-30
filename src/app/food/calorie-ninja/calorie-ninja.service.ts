import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CalorieNinjaService {

  constructor(private http: HttpClient) {}

  getFood(query: string) {
    let url =  'https://api.calorieninjas.com/v1/nutrition?query=' + query;
    return this.http.get( url , {
      headers: { 'X-Api-Key': 'YOUR_Api_Key'}
    });
  }
}
