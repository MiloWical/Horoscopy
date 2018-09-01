import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BirthdateNotifierService } from '../birthdate-notifier-service/birthdate-notifier.service';
import { HoroscopyApiService } from '../horoscopy-api/horoscopy-api.service';

@Component({
  selector: 'chinese-zodiac',
  templateUrl: './chinese-zodiac.component.html',
  styleUrls: ['./chinese-zodiac.component.css']
})
export class ChineseZodiacComponent implements OnInit {

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
      this.horscopyApi.getChineseZodiacObservable(date).subscribe(sign => this.sign = sign);
    }
    else
      this.sign = null;
  }
}
