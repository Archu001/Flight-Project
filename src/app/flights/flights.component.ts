import { Component, OnInit } from '@angular/core';
import { FlightservService } from '../flightserv.service';
import {error} from '@angular/compiler/src/util';
@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  win:boolean=true;
  Launchwin:boolean=true;
  show:string='';


  constructor(private fly:FlightservService) { }
   flightData:any=[]
  ngOnInit(): void {
   this.fly.get().subscribe(data=>{
     this.flightData=data;
     if(this.flightData.length==0){
       this.show="No records Found";
     }
     console.log("Data :"+this.flightData);
   })
  }
  sendAll(year:any):void{
    console.log(year);
    this.fly.getAll(year,this.win,this.Launchwin).subscribe(data=>{
      this.flightData=data;
      console.log("Success :"+this.flightData);
    })
  }
  sendLaunch(succ:any){
  this.win=succ;
  this.fly.getLaunch(succ).subscribe(data=>{
    this.flightData=data;
    console.log("Success:"+this.flightData);
  })
  }
  sendLandandLaunch(val:any){
    this.Launchwin=val;
    this.fly.getLandandLaunch(val).subscribe(data=>{
      this.flightData=data;
      console.log("Land :"+this.flightData);
    })
  }

}
