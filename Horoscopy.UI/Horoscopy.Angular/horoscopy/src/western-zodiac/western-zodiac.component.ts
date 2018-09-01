import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BirthdateNotifierService } from '../birthdate-notifier-service/birthdate-notifier.service';
import { HoroscopyApiService } from '../horoscopy-api/horoscopy-api.service';

@Component({
  selector: 'western-zodiac',
  templateUrl: './western-zodiac.component.html',
  styleUrls: ['./western-zodiac.component.css']
})
export class WesternZodiacComponent implements OnInit {

  private sign: string;

  constructor(private birthdateNotifierService: BirthdateNotifierService, private horscopyApi: HoroscopyApiService) {
    this.birthdateNotifierService.getBirthdateSubject().asObservable().subscribe(date => {
      this.getSign(date);
    });
  }

  ngOnInit() {
  }

  getSign(date: string) {

    if (date != null) {
      this.horscopyApi.getWesternZodiacObservable(date).subscribe(sign => this.sign = sign);
    }
    else
      this.sign = null;
  }
}
