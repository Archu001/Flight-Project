import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class FlightservService {

  constructor(private http:HttpClient) { }
  get():Observable<any>{
    return this.http.get<any>("https://api.spaceXdata.com/v3/launches?limit=100");
  }
 getAll(year:any,Launch:any,Land:any){
   console.log(year,Launch,Land,17);
   return this.http.get<any>("https://api.spaceXdata.com/v3/lauches?limit=100&launch_success="+Launch+"&land_success="+Land+"launch_year="+year);
 }
 getLaunch(succ:any){
   console.log("hi:"+succ);
   return this.http.get<any>("https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+succ);
 }
 getLandandLaunch(val:any){
   return this.http.get<any>("https://api.spacedata.com/v3/launches?limit=100&launch_success=true&land_success"+val);
 }

}
