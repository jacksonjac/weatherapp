import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'a24be9e0b14a6ba6962d9a8707e31933'; // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key

  constructor(private http: HttpClient) { }

  getWeather(cityName: string): Observable<any> {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apiKey}`;

    console.log(apiUrl,"sdklfsjflsdfj"); // Check the generated URL in the console

    return this.http.get(apiUrl);
  }
}
