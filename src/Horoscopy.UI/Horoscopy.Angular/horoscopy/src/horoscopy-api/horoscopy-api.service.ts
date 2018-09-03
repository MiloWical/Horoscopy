import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConfigurationService, IConfiguration } from '../configuration/configuration.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HoroscopyApiService {

  private serviceAddress: string;

  private chineseZodiacApiRoute: string;
  private westernZodiacApiRoute: string;
  private westernHoroscopeApiRoute: string;

  private headers = new HttpHeaders(
    {
      'Content-Type': 'application/json'
    });

  constructor(private configService: ConfigurationService, private httpClient: HttpClient) {
    var config = configService.getConfiguration();

    var serviceConfig = config.configuration.services.find(service => service.name == "HoroscopyApi");

    this.serviceAddress = serviceConfig.url;
    this.chineseZodiacApiRoute = serviceConfig.routes.find(route => route.name == "ChineseZodiac").route;
    this.westernZodiacApiRoute = serviceConfig.routes.find(route => route.name == "WesternZodiac").route;
    this.westernHoroscopeApiRoute = serviceConfig.routes.find(route => route.name == "WesternHoroscope").route;
  }

  getChineseZodiacObservable(date: string): Observable<string> {
    return this.httpClient.post<string>(this.serviceAddress + this.chineseZodiacApiRoute, date, { headers: this.headers });
  }

  getWesternZodiacObservable(date: string): Observable<string> {
    return this.httpClient.post<string>(this.serviceAddress + this.westernZodiacApiRoute, date, { headers: this.headers });
  }

  getHoroscopeObservable(date: string): Observable<string> {
    return this.httpClient.post<string>(this.serviceAddress + this.westernHoroscopeApiRoute, date, { headers: this.headers });
  }
}
