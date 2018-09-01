import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BirthdateNotifierService } from '../birthdate-notifier-service/birthdate-notifier.service';
import { ConfigurationService, IConfiguration } from '../configuration/configuration.service';
import { HoroscopyApiService } from '../horoscopy-api/horoscopy-api.service';

@Component({
  selector: 'western-horoscope',
  templateUrl: './western-horoscope.component.html',
  styleUrls: ['./western-horoscope.component.css']
})
export class WesternHoroscopeComponent implements OnInit {

  horoscope: string;

  constructor(private birthdateNotifierService: BirthdateNotifierService, private horscopyApi: HoroscopyApiService) {
    this.birthdateNotifierService.getBirthdateSubject().asObservable().subscribe(date => {
      this.getHoroscope(date);
    });
  }

  ngOnInit() {
  }

  getHoroscope(date: string) {

    if (date != null) {
      this.horscopyApi.getHoroscopeObservable(date).subscribe(horoscope => this.horoscope = horoscope);
    }
    else
      this.horoscope = null;
  }

  

}
