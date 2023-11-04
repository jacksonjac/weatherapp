import { Component, OnInit } from '@angular/core';
import { WeatherService } from './service/weatherservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 city:string ="Bangalore"
weatherdata :any
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getweather()
   
}

getweather (){
  this.weatherService.getWeather(this.city)
  .subscribe(data =>{
    this.weatherdata= data
    console.log(data,"skdfsjdflk")
  })
}

searchWeather() {

  console.log("lsdjflk")
  this.getweather()
}
}